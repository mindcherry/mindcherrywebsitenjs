'use client'

import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'
import { formatDate, calculateReadingTime } from '@/lib/utils'
import { getSanityImageUrl } from '@/sanity/imageUrl'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  mainImage?: {
    asset?: {
      url: string
    }
  }
  body?: any
  featured?: boolean
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  publishedAt,
  mainImage,
  body,
  featured = false,
}: BlogCardProps) {
  const readingTime = body ? calculateReadingTime(JSON.stringify(body)) : 5

  return (
    <Link href={`/blog/${slug}`}>
      <Card className={featured ? 'lg:col-span-2' : ''} hover>
        <div className={featured ? 'lg:flex lg:gap-6' : ''}>
          {mainImage?.asset?.url && (
            <div className={featured ? 'lg:w-1/2' : 'relative w-full h-48'}>
              <Image
                src={getSanityImageUrl(mainImage, featured ? 500 : 400, featured ? 300 : 192)}
                alt={title}
                width={featured ? 500 : 400}
                height={featured ? 300 : 192}
                className="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
              />
            </div>
          )}
          <div className={featured ? 'lg:w-1/2 p-6' : 'p-6'}>
            <div className="flex gap-2 mb-3">
              <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                Article
              </span>
              <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {readingTime} min read
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-dark-primary dark:text-white mb-2 line-clamp-2 hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {excerpt}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {formatDate(publishedAt)}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
