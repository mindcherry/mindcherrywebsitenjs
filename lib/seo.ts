import { Metadata } from 'next'

export function generateMetadata(
  title: string,
  description: string,
  image?: string,
  url?: string
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mindcherry.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const imageUrl = image || `${baseUrl}/og-image.jpg`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'MindCherry',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function generateBlogMetadata(
  title: string,
  description: string,
  publishedAt: string,
  image?: string,
  slug?: string
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mindcherry.com'
  const url = slug ? `/blog/${slug}` : '/blog'
  const fullUrl = `${baseUrl}${url}`
  const imageUrl = image || `${baseUrl}/og-image.jpg`

  return {
    title,
    description,
    authors: [{ name: 'MindCherry' }],
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: 'article',
      publishedTime: publishedAt,
      siteName: 'MindCherry',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}
