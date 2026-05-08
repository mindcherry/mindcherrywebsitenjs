import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { teamMembers } from '@/lib/data/team'
import { principles } from '@/lib/data/principles'
import { contactInfo } from '@/lib/data/contact'

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'MindCherry is a small Pakistan-based software house. Seven engineers, designers, and operators who sit beside founders to design, build, and grow custom software, MVPs, and architecture.',
}

export default function About() {
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
                The studio
              </span>
              <span aria-hidden className="hidden sm:inline-block w-6 h-px bg-ink/25" />
              <span>Seven engineers · Lahore</span>
              <span aria-hidden className="hidden md:inline-block w-6 h-px bg-ink/25" />
              <span className="hidden md:inline">Est. 2018</span>
            </div>

            <div className="mt-12 grid grid-cols-12 gap-y-12 lg:gap-x-12">
              <h1
                className="col-span-12 lg:col-span-9"
                style={{ fontSize: 'clamp(56px, 10vw + 18px, 168px)', lineHeight: 0.98, letterSpacing: '-0.028em' }}
              >
                A small studio
                <br />
                for ambitious{' '}
                <span
                  style={{
                    color: 'var(--color-cherry)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 144",
                  }}
                >
                  founders.
                </span>
              </h1>

              <p className="col-span-12 lg:col-span-7 lg:col-start-1 max-w-[560px] text-[18px] sm:text-[19px] leading-[1.55] text-ash">
                MindCherry has been building product alongside founders since 2018.
                We&apos;re seven people in Lahore — engineers, designers, and operators —
                who&apos;d rather ship one thing well than a portfolio of demos. We pick
                our work, we limit our headcount, and we stay until your engagement is
                no longer interesting (it usually takes a while).
              </p>
            </div>
          </div>
        </section>

        {/* ── Big editorial photo + opening manifesto ─────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pb-24 lg:pb-32">
            <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">
              <figure className="col-span-12 lg:col-span-7">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2px] border border-ink/12 bg-bone">
                  <Image
                    src="/images/studio/founders.jpg"
                    alt="Two members of the studio in mid-conversation, brick wall in soft focus behind them"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/25 via-transparent to-transparent" />
                </div>
                <figcaption className="mt-3 pl-1 flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                    Fig. 01
                  </span>
                  <span className="text-[12px] italic text-ash font-display">
                    a Tuesday-afternoon kickoff, the back of the studio
                  </span>
                </figcaption>
              </figure>

              <div className="col-span-12 lg:col-span-5 lg:pt-12">
                <p className="eyebrow flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-ink/30" />
                  Why we do this
                </p>
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(28px, 3vw + 12px, 48px)', lineHeight: 1.06, letterSpacing: '-0.02em' }}
                >
                  Most agencies optimise for{' '}
                  <span className="italic text-cherry-text">throughput.</span> We optimise for the
                  thing the founder actually cares about{' '}
                  <span className="italic text-ink/60">— and stay there.</span>
                </h2>
                <p className="mt-6 text-ash text-[16px] leading-[1.65] max-w-[460px]">
                  Most of what makes early-stage software hard isn&apos;t the code —
                  it&apos;s the unsaid trade-offs, the missing brief, the founder
                  who&apos;s wearing six hats. We absorb the technical hat early so
                  the rest can be worn well.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pull-quote / numbers ─────────────────────────────── */}
        <section className="relative bg-ink text-paper border-y border-ink/40">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
              <blockquote
                className="col-span-12 lg:col-span-8 font-display"
                style={{ fontSize: 'clamp(32px, 3.6vw + 12px, 72px)', lineHeight: 1.04, letterSpacing: '-0.022em' }}
              >
                <span className="text-cherry">&ldquo;</span>
                We don&apos;t do throwaway demos. The first thing we ship to your
                users is the same code we&apos;ll be running in production three
                years from now.
                <span className="text-cherry">&rdquo;</span>
              </blockquote>

              <dl className="col-span-12 lg:col-span-4 lg:pt-8 grid grid-cols-2 gap-y-10 gap-x-6 self-end">
                {[
                  { k: 'Years in studio', v: '8+' },
                  { k: 'Engineers', v: '7' },
                  { k: 'Avg engagement', v: '14 mo' },
                  { k: 'Repeat founders', v: '78%' },
                ].map(({ k, v }) => (
                  <div key={k}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
                      {k}
                    </dt>
                    <dd
                      className="mt-2 font-display text-paper"
                      style={{ fontSize: 'clamp(36px, 3.6vw + 12px, 64px)', lineHeight: 1, letterSpacing: '-0.018em' }}
                    >
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── Six commitments — list with photo aside ─────────── */}
        <section id="commitments" className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16">
              <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
                <span className="h-px w-10 bg-ink/30" />
                Commitments
              </p>
              <h2
                className="col-span-12 lg:col-span-9"
                style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
              >
                Six things we will not
                <br />
                <span className="italic text-ink/55 font-display">compromise on.</span>
              </h2>
            </header>

            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
              <ol className="col-span-12 lg:col-span-7 divide-y divide-ink/10 border-y border-ink/10">
                {principles.map((p, i) => (
                  <li key={p.id} className="grid grid-cols-12 gap-x-6 py-8">
                    <span className="col-span-2 sm:col-span-1 font-mono text-[11px] tracking-[0.18em] text-ash pt-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="col-span-10 sm:col-span-11">
                      <h3
                        className="font-display"
                        style={{ fontSize: 'clamp(24px, 2vw + 10px, 34px)', lineHeight: 1.05, letterSpacing: '-0.018em' }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-3 text-ash text-[15px] leading-[1.65] max-w-[520px]">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="col-span-12 lg:col-span-5 lg:pt-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ink/12 bg-bone">
                  <Image
                    src="/images/studio/whiteboard.jpg"
                    alt="A close-up of a hand drawing technical lines on a blueprint"
                    fill
                    sizes="(max-width: 1024px) 90vw, 35vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                </div>
                <p className="mt-4 text-[13px] italic text-ash font-display max-w-[360px]">
                  &ldquo;Boring on purpose&rdquo; — pinned above the whiteboard since 2019.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ── The seven — team list ─────────────────────────── */}
        <section id="team" className="relative bg-paper-deep/40 border-y border-ink/10">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16">
              <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
                <span className="h-px w-10 bg-ink/30" />
                The seven
              </p>
              <h2
                className="col-span-12 lg:col-span-9"
                style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
              >
                Senior people, doing the work,
                <br />
                <span className="italic text-ink/55 font-display">with you in the loop.</span>
              </h2>
            </header>

            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {teamMembers.map((m, i) => (
                <li key={m.id} className="grid grid-cols-12 gap-y-3 lg:gap-x-12 py-8 sm:py-10 items-baseline">
                  <span className="col-span-3 sm:col-span-2 font-mono text-[11px] tracking-[0.18em] text-ash">
                    {String(i + 1).padStart(2, '0')} / 07
                  </span>
                  <div className="col-span-9 sm:col-span-4">
                    <h3
                      className="font-display"
                      style={{ fontSize: 'clamp(24px, 2vw + 10px, 32px)', lineHeight: 1.05, letterSpacing: '-0.018em' }}
                    >
                      {m.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ash">
                      {m.role}
                    </p>
                  </div>
                  {m.bio && (
                    <p className="col-span-12 sm:col-span-6 text-ash text-[15px] leading-[1.65]">
                      {m.bio}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-12 max-w-[600px] text-ash text-[15px] leading-[1.65]">
              We hire roughly one person every 18 months — usually someone we&apos;ve
              already worked with. The seventh seat is currently filled by{' '}
              <span className="italic text-ink/80 font-display">whichever client engagement is the most demanding that quarter.</span>
            </p>
          </div>
        </section>

        {/* ── Closer ────────────────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <p className="eyebrow flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-ink/30" />
                  Talk to us
                </p>
                <h2
                  style={{ fontSize: 'var(--text-6xl)', lineHeight: 0.94, letterSpacing: '-0.026em' }}
                >
                  We answer every email
                  <br />
                  <span className="italic text-cherry-text font-display">in person.</span>
                </h2>
                <p className="mt-6 max-w-[520px] text-ash text-[16px] leading-[1.65]">
                  No SDR funnel. No qualifying form. The first reply you get is from
                  the engineer or designer who&apos;d run your project.
                </p>
              </div>

              <div className="col-span-12 lg:col-span-4 flex flex-wrap items-center gap-4">
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
                  href={`mailto:${contactInfo.email}`}
                  className="text-[14px] text-ink/80 hover:text-ink underline-offset-[6px] hover:underline decoration-cherry decoration-[1.5px]"
                >
                  {contactInfo.email}
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
