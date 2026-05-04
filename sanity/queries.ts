import { client } from './client'
import { BlogPost } from '@/lib/types'

const postFields = `
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset->{
      url
    },
    alt
  },
  body,
  author->{
    _id,
    name,
    image {
      asset->{
        url
      }
    },
    bio
  },
  categories[]->{
    _id,
    title,
    slug
  }
`

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        ${postFields}
      }`
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        ${postFields}
      }`,
      { slug }
    )
    return post || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch(
      `*[_type == "post"] {
        slug
      }`
    )
    return slugs?.map((post: any) => post.slug.current) || []
  } catch (error) {
    console.error('Error fetching post slugs:', error)
    return []
  }
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "post" && $slug in categories[].slug.current] | order(publishedAt desc) {
        ${postFields}
      }`,
      { slug: categorySlug }
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  try {
    const post = await getPost(slug)
    if (!post) return []

    const relatedPosts = await client.fetch(
      `*[_type == "post" && slug.current != $slug && categories[]._ref in $categoryRefs] | order(publishedAt desc)[0...$limit] {
        ${postFields}
      }`,
      {
        slug,
        categoryRefs: post.categories?.map((cat) => cat._id) || [],
        limit: limit - 1,
      }
    )

    return relatedPosts || []
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "post" && (title match $query || excerpt match $query || body match $query)] | order(publishedAt desc) {
        ${postFields}
      }`,
      { query: `*${query}*` }
    )
    return posts || []
  } catch (error) {
    console.error('Error searching posts:', error)
    return []
  }
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
        ${postFields}
      }`,
      { limit: limit - 1 }
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching latest posts:', error)
    return []
  }
}
