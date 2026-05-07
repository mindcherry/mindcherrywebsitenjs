import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/lib/data/caseStudies'

export default function SelectedWork() {
  const [primary, secondary] = caseStudies
  return (
    <section id="work" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
        <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 lg:mb-24">
          <p className="col-span-12 lg:col-span-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
            <span className="h-px w-10 bg-paper/30" />
            Selected work
          </p>
          <h2
            className="col-span-12 lg:col-span-9 text-paper"
            style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
          >
            We&apos;d rather show you{' '}
            <span className="italic text-paper/55 font-display">two products</span>{' '}
            we still maintain than a wall of logos we don&apos;t.
          </h2>
        </header>

        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">
          {/* Primary — Arcadia, larger */}
          <article className="col-span-12 lg:col-span-7">
            <Link href="/portfolio" className="group block">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2px] border border-paper/10">
                <Image
                  src={primary.image}
                  alt={primary.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-baseline">
                  <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                    Case · 01 — {primary.industry}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/70">
                    2023 → ongoing
                  </span>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-12 gap-y-5 lg:gap-x-8 items-end">
                <div className="col-span-12 lg:col-span-7">
                  <h3
                    className="font-display group-hover:text-cherry transition-colors duration-500"
                    style={{ fontSize: 'clamp(36px, 4vw + 14px, 72px)', lineHeight: 0.96, letterSpacing: '-0.022em' }}
                  >
                    {primary.title}.
                  </h3>
                  <p className="mt-3 max-w-md text-paper/70 text-[16px]">
                    {primary.shortDescription}
                  </p>
                </div>
                <ul className="col-span-12 lg:col-span-5 flex flex-wrap gap-2">
                  {primary.technologies.slice(0, 5).map((t) => (
                    <li
                      key={t}
                      className="mono-chip border-paper/25 text-paper/80"
                      style={{ borderColor: 'rgba(245, 242, 234, 0.25)', color: 'rgba(245, 242, 234, 0.85)' }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </article>

          {/* Secondary — Mindwell, taller column */}
          <article className="col-span-12 lg:col-span-5">
            <Link href="/portfolio" className="group block">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[2px] border border-paper/10">
                <Image
                  src={secondary.image}
                  alt={secondary.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-baseline">
                  <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                    Case · 02 — {secondary.industry}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/70">
                    2024 → ongoing
                  </span>
                </div>
              </div>

              <div className="mt-7">
                <h3
                  className="font-display group-hover:text-cherry transition-colors duration-500"
                  style={{ fontSize: 'clamp(36px, 4vw + 14px, 64px)', lineHeight: 0.96, letterSpacing: '-0.022em' }}
                >
                  {secondary.title}.
                </h3>
                <p className="mt-3 max-w-md text-paper/70 text-[16px]">
                  {secondary.shortDescription}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {secondary.technologies.slice(0, 4).map((t) => (
                    <li
                      key={t}
                      className="mono-chip"
                      style={{ borderColor: 'rgba(245, 242, 234, 0.25)', color: 'rgba(245, 242, 234, 0.85)' }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </article>
        </div>

        <div className="mt-20 pt-10 border-t border-paper/10 flex flex-wrap items-baseline justify-between gap-y-6 gap-x-12">
          <p className="text-paper/65 max-w-md text-[15px] leading-relaxed">
            We&apos;re currently writing up two more engagements (a fintech back-office
            and an internal tool for a marketplace). Email us if you&apos;d like an early read.
          </p>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-[14px] text-paper hover:text-cherry transition-colors"
          >
            All case studies
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
