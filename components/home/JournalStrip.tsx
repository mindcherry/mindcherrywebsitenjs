import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/types'
import { formatDate, calculateReadingTime } from '@/lib/utils'

interface JournalStripProps {
  posts: BlogPost[]
}

// Sensible fallback so the page never looks empty before Sanity is wired up.
const fallback: Array<Omit<BlogPost, 'body'> & { body: string }> = [
  {
    _id: 'fallback-1',
    title: 'How we migrated 9,000+ orders to Shopify, seamlessly',
    slug: 'shopify-migration-9000-orders',
    excerpt:
      'A step-by-step account of the legacy → Shopify migration we ran for a 9-figure DTC brand without dropping a single order or breaking a single SKU.',
    publishedAt: '2025-08-25',
    body: 'A long-form engineering write-up on schema mapping, reconciliation, and the boring math of an e-commerce migration.',
  },
  {
    _id: 'fallback-2',
    title: 'E-commerce store migration to Shopify, with the tools we use',
    slug: 'ecommerce-migration-tools',
    excerpt:
      'The migration playbook we now reach for by default — including the small set of tools that earn a place in our toolkit and the ones we quietly retired.',
    publishedAt: '2025-07-13',
    body: 'Our internal playbook for store migrations: data prep, SKU mapping, redirect strategy, and the Shopify gotchas that bite first-timers.',
  },
  {
    _id: 'fallback-3',
    title: 'Unlocking the potential of AI in business',
    slug: 'ai-in-business',
    excerpt:
      'A grounded look at where LLMs actually move the needle for the kinds of mid-market businesses we usually work with — and where they only look like they do.',
    publishedAt: '2024-04-24',
    body: 'When and where to deploy LLMs in business workflows, with a checklist of pitfalls we keep seeing on consulting calls.',
  },
]

const fallbackImages = [
  '/images/process/01-discover.jpg',
  '/images/process/02-architect.jpg',
  '/images/process/03-build.jpg',
]

export default function JournalStrip({ posts }: JournalStripProps) {
  const items = posts.length > 0 ? posts : (fallback as unknown as BlogPost[])
  const showFallbackNote = posts.length === 0

  return (
    <section id="journal" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16">
          <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-ink/30" />
            From the journal
          </p>
          <div className="col-span-12 lg:col-span-9 flex flex-wrap items-end justify-between gap-y-6 gap-x-8">
            <h2
              className="max-w-[820px]"
              style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
            >
              Long-form notes from the studio,
              <br />
              <span className="italic text-ink/55 font-display">written by the people who built it.</span>
            </h2>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[14px] text-ink hover:text-cherry transition-colors"
            >
              All entries
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
          {items.slice(0, 3).map((post, idx) => {
            const url = `/blog/${post.slug}`
            const reading = post.body
              ? calculateReadingTime(typeof post.body === 'string' ? post.body : JSON.stringify(post.body))
              : 6
            const img = post.mainImage?.asset?.url || fallbackImages[idx] || fallbackImages[0]

            return (
              <article
                key={post._id}
                className={
                  idx === 0
                    ? 'col-span-12 lg:col-span-7 lg:row-span-2'
                    : 'col-span-12 md:col-span-6 lg:col-span-5'
                }
              >
                <Link href={url} className="group block">
                  <div
                    className={`relative overflow-hidden rounded-[2px] border border-ink/10 ${idx === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}
                  >
                    <Image
                      src={img}
                      alt={post.mainImage?.alt || post.title}
                      fill
                      sizes={idx === 0 ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 40vw'}
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  </div>

                  <div className="mt-6 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="text-ink/20">·</span>
                    <span>{reading} min read</span>
                  </div>

                  <h3
                    className="mt-3 font-display group-hover:text-cherry transition-colors duration-500"
                    style={{
                      fontSize: idx === 0 ? 'clamp(28px, 3vw + 12px, 48px)' : 'clamp(22px, 2vw + 10px, 32px)',
                      lineHeight: 1.06,
                      letterSpacing: '-0.018em',
                    }}
                  >
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-4 text-ash text-[15px] leading-[1.6] max-w-[540px]">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            )
          })}
        </div>

        {showFallbackNote && (
          <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
            Note · entries are placeholders until Sanity is connected — log in to{' '}
            <Link
              href="/studio"
              aria-label="Open Sanity Studio to publish posts"
              className="text-cherry-text underline decoration-cherry decoration-[1.5px] underline-offset-[5px] hover:text-cherry-deep"
            >
              /studio
            </Link>{' '}
            to publish the real ones.
          </p>
        )}
      </div>
    </section>
  )
}
