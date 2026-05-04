import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'
import BlogCard from '@/components/BlogCard'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import CTASection from '@/components/CTASection'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPost, getPostSlugs, getRelatedPosts } from '@/sanity/queries'
import { getSanityImageUrl } from '@/sanity/imageUrl'
import { generateBlogMetadata } from '@/lib/seo'
import { formatDate, calculateReadingTime } from '@/lib/utils'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return generateBlogMetadata(
    post.title,
    post.excerpt,
    post.publishedAt,
    post.mainImage?.asset?.url,
    slug
  )
}

export const revalidate = 60

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(slug, 3)
  const readingTime = post.body ? calculateReadingTime(JSON.stringify(post.body)) : 5

  return (
    <>
      <Navbar />

      {/* Hero with Image */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-96 sm:h-[500px]">
          <Image
            src={getSanityImageUrl(post.mainImage, 1200, 500)}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Article Content */}
      <SectionWrapper>
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <Link href="/blog" className="text-primary hover:text-primary-600 text-sm font-semibold mb-4 inline-block">
              ← Back to Blog
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold text-dark-primary dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{readingTime} min read</span>
              {post.author && (
                <>
                  <span>•</span>
                  <span>By {post.author.name}</span>
                </>
              )}
            </div>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.categories.map((cat) => (
                  <span
                    key={cat._id}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            {post.body && <PortableTextRenderer value={post.body} />}
          </div>

          {/* Author Info */}
          {post.author && (
            <div className="bg-light-bg dark:bg-gray-900 rounded-xl p-6 mb-12 flex gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-dark-primary dark:text-white">
                  {post.author.name}
                </h3>
                {post.author.bio && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}
        </article>
      </SectionWrapper>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <SectionWrapper className="bg-light-bg dark:bg-gray-900 rounded-2xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-dark-primary dark:text-white mb-4">
              Related Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Check out these related posts from our blog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost._id} {...relatedPost} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* CTA Section */}
      <CTASection
        title="Have a Question?"
        description="Feel free to reach out to us if you have any questions or would like to discuss your project."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="primary"
      />

      <Footer />
    </>
  )
}
