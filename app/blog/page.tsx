import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { getPosts } from '@/sanity/queries'
import type { BlogPost } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Long-form writing from the MindCherry studio: engineering deep-dives, migration playbooks, and notes from the field. Written by the people who built it.',
}

export const revalidate = 60

const FALLBACK_POSTS: BlogPost[] = [
  {
    _id: 'fallback-1',
    title: 'How we migrated 9,000+ orders to Shopify, seamlessly',
    slug: 'shopify-migration-9000-orders',
    excerpt:
      'A step-by-step account of the legacy → Shopify migration we ran for a 9-figure DTC brand without dropping a single order or breaking a single SKU. The boring math of e-commerce migrations, and the spreadsheets we leaned on.',
    publishedAt: '2025-08-25',
    body: 'placeholder' as unknown as BlogPost['body'],
  },
  {
    _id: 'fallback-2',
    title: 'E-commerce store migration to Shopify, with the tools we use',
    slug: 'ecommerce-migration-tools',
    excerpt:
      'The migration playbook we now reach for by default — including the small set of tools that earn a place in our toolkit and the ones we quietly retired.',
    publishedAt: '2025-07-13',
    body: 'placeholder' as unknown as BlogPost['body'],
  },
  {
    _id: 'fallback-3',
    title: 'Unlocking the potential of AI in business',
    slug: 'ai-in-business',
    excerpt:
      'A grounded look at where LLMs actually move the needle for the kinds of mid-market businesses we usually work with — and where they only look like they do.',
    publishedAt: '2024-04-24',
    body: 'placeholder' as unknown as BlogPost['body'],
  },
]

const FALLBACK_IMAGES = [
  '/images/blog/reading.jpg',
  '/images/process/03-build.jpg',
  '/images/services/mvp.jpg',
  '/images/process/02-architect.jpg',
]

export default async function Blog() {
  const real = await getPosts()
  const posts = real.length > 0 ? real : FALLBACK_POSTS
  const isFallback = real.length === 0

  return (
    <>
      <Navbar />
      <main className="flex-1 relative">
        {/* ── Editorial top ─────────────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 lg:pt-28 pb-16 lg:pb-24">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono tracking-[0.2em] uppercase text-ash">
              <span className="inline-flex items-center gap-2">
                <span className="live-dot" aria-hidden />
                Journal
              </span>
              <span aria-hidden className="hidden sm:inline-block w-6 h-px bg-ink/25" />
              <span>Long-form, by the people who built it</span>
            </div>

            <div className="mt-12 grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
              <h1
                className="col-span-12 lg:col-span-9"
                style={{
                  fontSize: 'clamp(56px, 10vw + 18px, 168px)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.028em',
                }}
              >
                Notes from
                <br />
                the{' '}
                <span
                  style={{
                    color: 'var(--color-cherry)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 144",
                  }}
                >
                  studio.
                </span>
              </h1>
              <p className="col-span-12 lg:col-span-7 lg:col-start-1 max-w-[580px] text-[18px] leading-[1.55] text-ash">
                Engineering deep-dives, migration playbooks, the occasional
                opinion. Written by the engineers who shipped the work — not
                ghostwritten, not SEO-optimised, not on a content calendar.
              </p>
            </div>
          </div>
        </section>

        {/* ── Index ─────────────────────────────────────────── */}
        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <BlogIndex posts={posts} fallbackImages={FALLBACK_IMAGES} />

            {isFallback && (
              <p className="mt-16 pt-8 border-t border-ink/10 max-w-[640px] font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
                Note · entries above are the previous-site archive shown as
                placeholders. Once you connect Sanity at{' '}
                <Link
                  href="/studio"
                  className="text-cherry-text underline decoration-cherry decoration-[1.5px] underline-offset-[5px]"
                  aria-label="Open Sanity Studio to publish posts"
                >
                  /studio
                </Link>{' '}
                and publish, real posts replace this list.
              </p>
            )}
          </div>
        </section>

        {/* ── Closer ─────────────────────────────────────── */}
        <section className="relative bg-paper-deep/40 border-t border-ink/10">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h2 style={{ fontSize: 'var(--text-6xl)', lineHeight: 0.94, letterSpacing: '-0.026em' }}>
                  Want one of these
                  <br />
                  <span className="italic text-cherry-text font-display">written about your project?</span>
                </h2>
                <p className="mt-6 max-w-[520px] text-ash text-[16px] leading-[1.65]">
                  We write up engagements after they ship — with the founder&apos;s
                  blessing. Start one here.
                </p>
              </div>
              <Link
                href="/contact"
                className="col-span-12 lg:col-span-4 lg:justify-self-end group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper text-[14px] font-medium hover:bg-cherry transition-colors duration-500"
              >
                Start a project
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:translate-x-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 11L11 3M11 3H5M11 3V9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
