import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { services } from '@/lib/data/services'
import { techStack } from '@/lib/data/principles'
import { contactInfo } from '@/lib/data/contact'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Three honest engagements: Custom Software & MVP development, Architecture & Design, and Software Consultancy. Senior engineers, end-to-end ownership, no SDR funnel.',
}

const SERVICE_VISUALS: Record<string, { image: string; alt: string; caption: string; ships: string[]; doesnt: string[] }> = {
  'custom-software': {
    image: '/images/services/mvp.jpg',
    alt: 'A close-up of hand-drawn wireframes on paper, sketched in pencil',
    caption: 'a Tuesday wireframe — the cheapest place to be wrong',
    ships: [
      'Production-ready v1 inside 8 weeks',
      'Founder in every standup',
      'Behind-feature-flag rollout from day one',
      'Source code, repos, and infra you own outright',
    ],
    doesnt: [
      'No PowerPoint demos that aren\'t real product',
      'No vendor lock-in or proprietary tooling',
      'No throwaway "MVP" that gets rewritten in month four',
    ],
  },
  'architecture-design': {
    image: '/images/services/architecture.jpg',
    alt: 'Engineering blueprint with pen and pencil on paper',
    caption: 'a system diagram is cheaper than a refactor',
    ships: [
      'System & data-model walkthrough',
      'Risk register with mitigation owners',
      'Cloud + DevOps blueprint',
      'Hiring plan & first three job specs',
    ],
    doesnt: [
      'No 200-page deliverable nobody reads',
      'No microservices for the sake of it',
      'No "best-practice" handed down without context',
    ],
  },
  'consultancy': {
    image: '/images/services/consultancy.jpg',
    alt: 'Two professionals reviewing documents at a desk with a laptop',
    caption: 'half-day reviews land more value than month-long audits',
    ships: [
      'Read of the codebase + verbal walkthrough',
      'Two-page action plan with owner + ETA',
      '90-day check-in to verify the moves landed',
      'Optional fractional CTO hours',
    ],
    doesnt: [
      'No invoice for "thinking time"',
      'No moonlit consultants we\'ve never worked with',
      'No retainers without a measurable scope',
    ],
  },
}

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative">
        {/* ── Editorial top ─────────────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 lg:pt-28 pb-20 lg:pb-28">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono tracking-[0.2em] uppercase text-ash">
              <span className="inline-flex items-center gap-2">
                <span className="live-dot" aria-hidden />
                Engagements
              </span>
              <span aria-hidden className="hidden sm:inline-block w-6 h-px bg-ink/25" />
              <span>Three shapes — pick what fits</span>
            </div>

            <div className="mt-12 grid grid-cols-12 gap-y-12 lg:gap-x-12 items-end">
              <h1
                className="col-span-12 lg:col-span-9"
                style={{ fontSize: 'clamp(56px, 10vw + 18px, 168px)', lineHeight: 0.98, letterSpacing: '-0.028em' }}
              >
                Pick the smallest
                <br />
                shape that{' '}
                <span
                  style={{
                    color: 'var(--color-cherry)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 144",
                  }}
                >
                  works.
                </span>
              </h1>
              <p className="col-span-12 lg:col-span-7 lg:col-start-1 max-w-[560px] text-[18px] leading-[1.55] text-ash">
                We do three things, honestly named. Most engagements start in one
                shape and morph into another as the company changes — so we&apos;ve
                made each one upgradeable into the next.
              </p>
            </div>
          </div>
        </section>

        {/* ── Three deep-dive engagements ─────────────────────── */}
        {services.map((s, idx) => {
          const num = String(idx + 1).padStart(2, '0')
          const visual = SERVICE_VISUALS[s.id]
          const flip = idx % 2 === 1

          return (
            <section
              key={s.id}
              id={s.id}
              className={`relative ${idx % 2 === 1 ? 'bg-paper-deep/40' : ''} border-t border-ink/10`}
            >
              <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
                <div className="grid grid-cols-12 gap-y-12 lg:gap-x-14 items-start">
                  {/* Heading column */}
                  <div className={`col-span-12 ${flip ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5'}`}>
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-cherry-text mb-6">
                      Engagement · {num} of 03
                    </p>
                    <h2
                      style={{ fontSize: 'clamp(40px, 5vw + 12px, 88px)', lineHeight: 0.96, letterSpacing: '-0.024em' }}
                    >
                      {s.title.split('&')[0].trim()}
                      {s.title.includes('&') && (
                        <>
                          <br />
                          <span className="italic text-cherry-text font-display">
                            &amp; {s.title.split('&')[1].trim()}
                          </span>
                        </>
                      )}
                    </h2>
                    <p className="mt-8 max-w-[460px] text-[16px] leading-[1.7] text-ash">
                      {s.description}
                    </p>
                  </div>

                  {/* Visual column */}
                  <div className={`col-span-12 ${flip ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7'}`}>
                    <figure>
                      <div className="relative aspect-[16/11] overflow-hidden rounded-[2px] border border-ink/12 bg-bone">
                        {visual && (
                          <Image
                            src={visual.image}
                            alt={visual.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-ink/20 via-transparent to-transparent" />
                      </div>
                      {visual && (
                        <figcaption className="mt-3 pl-1 flex items-baseline gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                            Fig. {num}
                          </span>
                          <span className="text-[12px] italic text-ash font-display">
                            {visual.caption}
                          </span>
                        </figcaption>
                      )}
                    </figure>
                  </div>

                  {/* Ships / doesn't / tech */}
                  <div className="col-span-12 lg:col-span-5 lg:col-start-1 lg:order-3">
                    <h3 className="eyebrow mb-5">What we ship</h3>
                    <ul className="space-y-3">
                      {visual?.ships.map((line) => (
                        <li
                          key={line}
                          className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink/85"
                        >
                          <span aria-hidden className="font-mono text-[10px] text-cherry-text mt-0.5">
                            +
                          </span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:order-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                      <div>
                        <h3 className="eyebrow mb-5">What we don&apos;t do</h3>
                        <ul className="space-y-3">
                          {visual?.doesnt.map((line) => (
                            <li
                              key={line}
                              className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ash"
                            >
                              <span aria-hidden className="font-mono text-[10px] text-ash-soft mt-0.5">
                                —
                              </span>
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="eyebrow mb-5">Default toolkit</h3>
                        <ul className="flex flex-wrap gap-2">
                          {s.features?.slice(0, 5).map((f) => (
                            <li key={f} className="mono-chip">
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* ── Tech stack belt ──────────────────────────────── */}
        <section className="relative bg-ink text-paper border-y border-ink/40 overflow-hidden">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
            <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16">
              <p className="col-span-12 lg:col-span-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
                <span className="h-px w-10 bg-paper/30" />
                The toolkit
              </p>
              <h2
                className="col-span-12 lg:col-span-9 text-paper"
                style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
              >
                Boring choices,{' '}
                <span className="italic text-paper/55 font-display">made on purpose.</span>
              </h2>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12">
              {techStack.map((g) => (
                <div key={g.group}>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55 mb-5">
                    {g.group}
                  </h3>
                  <ul className="space-y-3">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="font-display text-[22px] tracking-tight text-paper"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-16 max-w-[640px] text-paper/70 text-[15px] leading-[1.65]">
              We do not learn frameworks on your dime. If a tool isn&apos;t on this
              list, we&apos;ll either bring in a specialist we&apos;ve already worked
              with, or recommend a different studio for that engagement.
            </p>
          </div>
        </section>

        {/* ── Process pointer ──────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-28">
            <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <p className="eyebrow flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-ink/30" />
                  How we work
                </p>
                <h2 style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}>
                  Discover · Architect · Build · Scale —
                  <br />
                  <span className="italic text-ink/55 font-display">in that exact order.</span>
                </h2>
              </div>
              <Link
                href="/#process"
                className="col-span-12 lg:col-span-4 lg:justify-self-end group inline-flex items-center gap-2 text-[14px] text-ink hover:text-cherry-text transition-colors"
              >
                See the four-step process
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="relative bg-paper-deep/40 border-y border-ink/10">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h2 style={{ fontSize: 'var(--text-7xl)', lineHeight: 0.92, letterSpacing: '-0.028em' }}>
                  Which shape
                  <br />
                  <span className="italic text-cherry-text font-display">do you need?</span>
                </h2>
                <p className="mt-8 max-w-[560px] text-[17px] leading-[1.55] text-ash">
                  Email us with two paragraphs about your project. The first reply
                  comes from a senior engineer, usually inside a working day.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:justify-self-end flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper text-[14px] font-medium hover:bg-cherry transition-colors duration-500"
                >
                  Start a project
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:translate-x-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
                <a
                  href={contactInfo.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-ink/80 hover:text-ink underline-offset-[6px] hover:underline decoration-cherry decoration-[1.5px]"
                >
                  Or book a call →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
