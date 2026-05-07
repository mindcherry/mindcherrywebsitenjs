import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { caseStudies } from '@/lib/data/caseStudies'

export const metadata: Metadata = {
  title: 'Selected work',
  description:
    'Two products MindCherry built and still maintains: Arcadia, a real-estate classifieds platform, and Mindwell, a HIPAA-compliant telehealth platform.',
}

const NOTES: Record<string, { window: string; team: string; honest: string }> = {
  arcadia: {
    window: '2023 → ongoing',
    team: '3 engineers · 1 designer',
    honest:
      'The hardest part wasn\'t the listings — it was modelling the messy ownership graph (agency, sub-agency, agent, individual) without making the search UX confusing. We rewrote the data model twice in week three; the second one stuck.',
  },
  mindwell: {
    window: '2024 → ongoing',
    team: '2 engineers · 1 mobile · 1 compliance',
    honest:
      'HIPAA compliance is mostly a documentation problem dressed up as a software problem. We embedded a part-time compliance officer for the first six weeks and that turned out to be the single highest-leverage decision on the engagement.',
  },
}

export default function Portfolio() {
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
                Selected work
              </span>
              <span aria-hidden className="hidden sm:inline-block w-6 h-px bg-ink/25" />
              <span>Two products · still maintained</span>
            </div>

            <div className="mt-12 grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
              <h1
                className="col-span-12 lg:col-span-9"
                style={{ fontSize: 'clamp(56px, 10vw + 18px, 168px)', lineHeight: 0.98, letterSpacing: '-0.028em' }}
              >
                Two cases,
                <br />
                shown{' '}
                <span
                  style={{
                    color: 'var(--color-cherry)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 144",
                  }}
                >
                  honestly.
                </span>
              </h1>
              <p className="col-span-12 lg:col-span-7 lg:col-start-1 max-w-[580px] text-[18px] leading-[1.55] text-ash">
                We&apos;d rather walk you through two products we still ship to than
                a logo wall of clients we don&apos;t. Here&apos;s the work — what we
                built, what was hard, what we&apos;d do again.
              </p>
            </div>
          </div>
        </section>

        {/* ── Case studies ───────────────────────────────────── */}
        {caseStudies.map((c, idx) => {
          const num = String(idx + 1).padStart(2, '0')
          const note = NOTES[c.id]
          const isPrimary = idx === 0

          return (
            <article
              key={c.id}
              id={c.id}
              className={`relative ${idx === 0 ? '' : 'border-t border-ink/10'} ${idx === 1 ? 'bg-ink text-paper' : ''}`}
            >
              <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
                {/* meta row */}
                <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] ${idx === 1 ? 'text-paper/70' : 'text-ash'}`}>
                  <span>Case · {num} of 02</span>
                  <span aria-hidden className="hidden sm:inline-block w-6 h-px bg-current opacity-30" />
                  <span>{c.industry}</span>
                  <span aria-hidden className="hidden md:inline-block w-6 h-px bg-current opacity-30" />
                  {note && <span>{note.window}</span>}
                  <span aria-hidden className="hidden md:inline-block w-6 h-px bg-current opacity-30" />
                  {note && <span className="hidden md:inline">{note.team}</span>}
                </div>

                {/* Headline */}
                <h2
                  className={`mt-8 ${idx === 1 ? 'text-paper' : ''}`}
                  style={{ fontSize: 'clamp(64px, 9vw + 16px, 168px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}
                >
                  {c.title}
                  <span
                    style={{
                      color: idx === 1 ? 'var(--color-cherry)' : 'var(--color-cherry)',
                    }}
                  >
                    .
                  </span>
                </h2>

                {/* Sub */}
                <p
                  className={`mt-3 text-[18px] sm:text-[20px] italic font-display max-w-[680px] ${idx === 1 ? 'text-paper/75' : 'text-ink/65'}`}
                >
                  {c.shortDescription}
                </p>

                {/* Image */}
                <figure className="mt-12">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[2px] border border-ink/15">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 90vw"
                      className="object-cover"
                      priority={isPrimary}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-ink/35 via-transparent to-transparent" />
                  </div>
                </figure>

                {/* Body grid */}
                <div className="mt-16 grid grid-cols-12 gap-y-12 lg:gap-x-14">
                  <div className="col-span-12 lg:col-span-7">
                    <h3
                      className={`eyebrow mb-5 ${idx === 1 ? 'text-paper/55' : ''}`}
                    >
                      The brief
                    </h3>
                    <p
                      className={`text-[16px] leading-[1.7] ${idx === 1 ? 'text-paper/85' : 'text-ash'}`}
                      style={{ maxWidth: '60ch' }}
                    >
                      {c.description}
                    </p>

                    {note && (
                      <>
                        <h3 className={`eyebrow mt-12 mb-5 ${idx === 1 ? 'text-paper/55' : ''}`}>
                          What was hard
                        </h3>
                        <p
                          className={`font-display italic text-[18px] sm:text-[20px] leading-[1.55] ${idx === 1 ? 'text-paper/85' : 'text-ink/85'}`}
                          style={{ maxWidth: '52ch' }}
                        >
                          &ldquo;{note.honest}&rdquo;
                        </p>
                      </>
                    )}
                  </div>

                  <div className="col-span-12 lg:col-span-5">
                    <h3 className={`eyebrow mb-5 ${idx === 1 ? 'text-paper/55' : ''}`}>
                      Outcomes
                    </h3>
                    <ol className={`space-y-5 ${idx === 1 ? '' : ''}`}>
                      {c.results.map((r, i) => (
                        <li key={r} className="grid grid-cols-12 gap-x-4 items-baseline">
                          <span
                            className={`col-span-2 font-mono text-[10px] tracking-[0.18em] ${idx === 1 ? 'text-cherry' : 'text-cherry-text'}`}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <p
                            className={`col-span-10 text-[15px] leading-[1.6] ${idx === 1 ? 'text-paper/90' : 'text-ink/90'}`}
                          >
                            {r}
                          </p>
                        </li>
                      ))}
                    </ol>

                    <h3 className={`eyebrow mt-12 mb-5 ${idx === 1 ? 'text-paper/55' : ''}`}>
                      Stack
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {c.technologies.map((t) => (
                        <li
                          key={t}
                          className="mono-chip"
                          style={{
                            borderColor: idx === 1 ? 'rgba(245, 242, 234, 0.25)' : undefined,
                            color: idx === 1 ? 'rgba(245, 242, 234, 0.85)' : undefined,
                          }}
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          )
        })}

        {/* ── In progress / writing up ──────────────────────── */}
        <section className="relative border-t border-ink/10">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16">
              <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
                <span className="h-px w-10 bg-ink/30" />
                Currently writing up
              </p>
              <h2
                className="col-span-12 lg:col-span-9"
                style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
              >
                Two more engagements
                <br />
                <span className="italic text-ink/55 font-display">should publish next quarter.</span>
              </h2>
            </header>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-x-12">
              {[
                {
                  num: '03',
                  title: 'Internal back-office for a B2B fintech',
                  meta: 'Confidential · 2025 → ongoing',
                  brief:
                    'Replaced six spreadsheets and one Notion database with a typed, audited admin surface. Currently saving the team approximately 14 person-hours a week.',
                },
                {
                  num: '04',
                  title: 'Marketplace operator console',
                  meta: 'Confidential · 2025 → ongoing',
                  brief:
                    'Tooling for a marketplace ops team that was previously running on shared logins to the customer-facing app. Real role-based access, real audit log, real keyboard shortcuts.',
                },
              ].map((c) => (
                <li key={c.num}>
                  <article>
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ash">
                      Case · {c.num}
                    </span>
                    <h3
                      className="mt-3 font-display"
                      style={{ fontSize: 'clamp(28px, 2.6vw + 12px, 44px)', lineHeight: 1.04, letterSpacing: '-0.018em' }}
                    >
                      {c.title}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ash">
                      {c.meta}
                    </p>
                    <p className="mt-5 max-w-[440px] text-[15px] leading-[1.65] text-ash">
                      {c.brief}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

            <p className="mt-16 max-w-[640px] text-[15px] leading-[1.7] text-ash">
              We don&apos;t publish a case study until the engagement has been live
              for at least six months and the founder is happy for us to do so.
              That&apos;s why this list is short — and why it stays current.
            </p>
          </div>
        </section>

        {/* ── Closer ─────────────────────────────────────── */}
        <section className="relative bg-paper-deep/40 border-y border-ink/10">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h2 style={{ fontSize: 'var(--text-7xl)', lineHeight: 0.92, letterSpacing: '-0.028em' }}>
                  Want a project
                  <br />
                  <span className="italic text-cherry-text font-display">on this list?</span>
                </h2>
                <p className="mt-8 max-w-[560px] text-[17px] leading-[1.55] text-ash">
                  Email us a paragraph about what you&apos;re building. We&apos;ll
                  reply within a working day with whether — and how — we can help.
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
