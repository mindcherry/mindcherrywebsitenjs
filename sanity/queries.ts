import { getClient, isSanityConfigured } from './client'
import type { BlogPost } from '@/lib/types'

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage {
    asset->{ url, metadata { dimensions, lqip } },
    alt
  },
  body,
  author->{
    _id,
    name,
    "slug": slug.current,
    image { asset->{ url } },
    bio
  },
  categories[]->{ _id, title, "slug": slug.current }
`

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback
  try {
    const result = await getClient().fetch<T>(query, params)
    return result ?? fallback
  } catch (error) {
    console.error('[sanity] query failed:', error)
    return fallback
  }
}

export async function getPosts(): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${postFields} }`,
    {},
    [],
  )
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  return safeFetch<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug][0] { ${postFields} }`,
    { slug },
    null,
  )
}

export async function getPostSlugs(): Promise<string[]> {
  const slugs = await safeFetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`,
    {},
    [],
  )
  return slugs.map((s) => s.slug)
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(
    `*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) { ${postFields} }`,
    { slug: categorySlug },
    [],
  )
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(
    `*[_type == "post" && slug.current != $slug && count((categories[]->_id)[@ in *[_type=="post" && slug.current==$slug][0].categories[]._ref]) > 0]
       | order(publishedAt desc)[0...$limit] { ${postFields} }`,
    { slug, limit },
    [],
  )
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(
    `*[_type == "post" && (title match $q || excerpt match $q || pt::text(body) match $q)] | order(publishedAt desc) { ${postFields} }`,
    { q: `*${query}*` },
    [],
  )
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...$limit] { ${postFields} }`,
    { limit },
    [],
  )
}
