import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import { getPost, getPostSlugs, getRelatedPosts } from '@/sanity/queries'
import { formatDate, calculateReadingTime } from '@/lib/utils'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Post not found' }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : undefined,
    },
  }
}

export const revalidate = 60

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const related = await getRelatedPosts(slug, 3)
  const reading = post.body
    ? calculateReadingTime(
        typeof post.body === 'string' ? post.body : JSON.stringify(post.body),
      )
    : 6

  return (
    <>
      <Navbar />
      <main className="flex-1 relative">
        {/* ── Header ─────────────────────────────────────────── */}
        <header className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 lg:pt-24 pb-16 lg:pb-24">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ash hover:text-ink transition-colors mb-12"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:-translate-x-0.5">
                <path d="M9 6H1M1 6L5 2M1 6L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to journal
            </Link>

            {post.categories && post.categories.length > 0 && (
              <ul className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((c) => (
                  <li key={c._id} className="mono-chip border-cherry/40 text-cherry-text">
                    {c.title}
                  </li>
                ))}
              </ul>
            )}

            <h1
              className="max-w-[14ch]"
              style={{
                fontSize: 'clamp(40px, 6vw + 18px, 120px)',
                lineHeight: 0.96,
                letterSpacing: '-0.026em',
              }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p
                className="mt-8 max-w-[680px] font-display italic text-ink/65"
                style={{ fontSize: 'clamp(20px, 1.4vw + 12px, 26px)', lineHeight: 1.4 }}
              >
                {post.excerpt}
              </p>
            )}

            <div className="mt-12 pt-6 border-t border-ink/10 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden className="text-ink/20">·</span>
              <span>{reading} min read</span>
              {post.author && (
                <>
                  <span aria-hidden className="text-ink/20">·</span>
                  <span>By {post.author.name}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* ── Hero image (if any) ───────────────────────────── */}
        {post.mainImage?.asset?.url && (
          <figure className="relative">
            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2px] border border-ink/10">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </figure>
        )}

        {/* ── Body ──────────────────────────────────────────── */}
        <article className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24 pb-24 lg:pb-32">
            <div className="grid grid-cols-12 lg:gap-x-14">
              {/* Left rail — sticky meta */}
              <aside className="hidden lg:block col-span-3">
                <div className="sticky top-28">
                  {post.author && (
                    <div className="mb-10">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash mb-2">
                        Written by
                      </p>
                      <p className="font-display text-[20px] text-ink leading-tight">
                        {post.author.name}
                      </p>
                      {post.author.bio && (
                        <p className="mt-2 text-[13px] leading-[1.55] text-ash max-w-[220px]">
                          {post.author.bio}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash mb-1">
                        Reading time
                      </p>
                      <p className="font-display text-[18px] text-ink">{reading} min</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash mb-1">
                        Published
                      </p>
                      <p className="font-display text-[18px] text-ink">{formatDate(post.publishedAt)}</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Body column with dropcap on first paragraph */}
              <div className="col-span-12 lg:col-span-8 lg:col-start-5 max-w-[680px] post-body">
                {post.body && <PortableTextRenderer value={post.body} />}
              </div>
            </div>
          </div>
        </article>

        {/* ── Related ──────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="relative bg-paper-deep/40 border-y border-ink/10">
            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
              <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-12">
                <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
                  <span className="h-px w-10 bg-ink/30" />
                  More from the studio
                </p>
                <h2
                  className="col-span-12 lg:col-span-9"
                  style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
                >
                  Three more entries{' '}
                  <span className="italic text-ink/55 font-display">worth your time.</span>
                </h2>
              </header>

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-12 lg:gap-x-12">
                {related.map((r) => (
                  <li key={r._id}>
                    <Link href={`/blog/${r.slug}`} className="group block">
                      {r.mainImage?.asset?.url && (
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-ink/10 mb-5">
                          <Image
                            src={r.mainImage.asset.url}
                            alt={r.mainImage.alt || r.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      )}
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                        {formatDate(r.publishedAt)}
                      </p>
                      <h3
                        className="mt-2 font-display group-hover:text-cherry-text transition-colors duration-500"
                        style={{
                          fontSize: 'clamp(20px, 1.6vw + 8px, 26px)',
                          lineHeight: 1.1,
                          letterSpacing: '-0.018em',
                        }}
                      >
                        {r.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h2 style={{ fontSize: 'var(--text-6xl)', lineHeight: 0.94, letterSpacing: '-0.026em' }}>
                  Have a project that&apos;d
                  <br />
                  <span className="italic text-cherry-text font-display">make a good entry?</span>
                </h2>
                <p className="mt-6 max-w-[520px] text-ash text-[16px] leading-[1.65]">
                  We write up engagements after they ship — with the founder&apos;s
                  blessing. Get in touch and yours might be next.
                </p>
              </div>
              <Link
                href="/contact"
                className="col-span-12 lg:col-span-4 lg:justify-self-end group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper text-[14px] font-medium hover:bg-cherry transition-colors duration-500"
              >
                Start a project
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:translate-x-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
