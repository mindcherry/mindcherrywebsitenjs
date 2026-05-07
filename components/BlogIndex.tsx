'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/types'
import { formatDate, calculateReadingTime } from '@/lib/utils'

interface BlogIndexProps {
  posts: BlogPost[]
  /** Optional placeholder shown when Sanity isn't connected yet. */
  fallbackImages: string[]
}

export default function BlogIndex({ posts, fallbackImages }: BlogIndexProps) {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    if (!q.trim()) return posts
    const needle = q.toLowerCase()
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(needle) ||
        (p.excerpt || '').toLowerCase().includes(needle),
    )
  }, [posts, q])

  if (posts.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
          The shelf is empty for the moment.
        </p>
        <p className="mt-4 max-w-[480px] mx-auto text-[15px] leading-[1.65] text-ash">
          Once the studio publishes its first entry, it lands here. In the
          meantime,{' '}
          <Link
            href="/contact"
            className="text-cherry-text underline decoration-cherry decoration-[1.5px] underline-offset-[5px] hover:text-cherry-deep"
          >
            tell us what you&apos;re building →
          </Link>
        </p>
      </div>
    )
  }

  const [featured, ...rest] = filtered

  return (
    <>
      {/* Search */}
      <div className="mb-14 lg:mb-16">
        <div className="relative max-w-[480px]">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.22em] text-ash pointer-events-none">
            Search
          </span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="—"
            aria-label="Search journal entries"
            className="w-full bg-transparent border-b border-ink/15 pl-[68px] pr-3 py-3 text-[16px] font-display text-ink placeholder-ink/30 focus:border-cherry focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <article className="mb-20">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14 items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-ink/10">
                  <Image
                    src={featured.mainImage?.asset?.url || fallbackImages[0]}
                    alt={featured.mainImage?.alt || featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-cherry-text mb-4">
                  Featured · most recent
                </p>
                <h2
                  className="font-display group-hover:text-cherry-text transition-colors duration-500"
                  style={{
                    fontSize: 'clamp(34px, 3.6vw + 12px, 56px)',
                    lineHeight: 1.04,
                    letterSpacing: '-0.022em',
                  }}
                >
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="mt-5 max-w-[440px] text-ash text-[16px] leading-[1.65]">
                    {featured.excerpt}
                  </p>
                )}
                <div className="mt-6 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
                  <span>{formatDate(featured.publishedAt)}</span>
                  <span aria-hidden className="text-ink/20">·</span>
                  <span>
                    {featured.body
                      ? calculateReadingTime(
                          typeof featured.body === 'string'
                            ? featured.body
                            : JSON.stringify(featured.body),
                        )
                      : 6}{' '}
                    min read
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-16 lg:gap-x-14 border-t border-ink/10 pt-16">
          {rest.map((post, idx) => {
            const img =
              post.mainImage?.asset?.url ||
              fallbackImages[(idx + 1) % fallbackImages.length]
            const reading = post.body
              ? calculateReadingTime(
                  typeof post.body === 'string' ? post.body : JSON.stringify(post.body),
                )
              : 6
            return (
              <li key={post._id}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-ink/10">
                    <Image
                      src={img}
                      alt={post.mainImage?.alt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                  </div>
                  <div className="mt-6 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span aria-hidden className="text-ink/20">·</span>
                    <span>{reading} min read</span>
                  </div>
                  <h3
                    className="mt-3 font-display group-hover:text-cherry-text transition-colors duration-500"
                    style={{
                      fontSize: 'clamp(22px, 2vw + 8px, 30px)',
                      lineHeight: 1.08,
                      letterSpacing: '-0.018em',
                    }}
                  >
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-3 text-ash text-[15px] leading-[1.6] max-w-[480px]">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
          No entries match &ldquo;{q}&rdquo;
        </p>
      )}
    </>
  )
}
