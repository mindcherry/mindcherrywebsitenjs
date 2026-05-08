'use client'

import { useEffect, useReducer } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WORDS = ['shipped', 'loved', 'live', 'scaled', 'measurable'] as const
const ROTATE_MS = 3200
// Delay the first rotation past Lighthouse's LCP measurement window (~5s).
// The rotation is a "delight" — fine if it kicks in once the page has
// settled. Setting this short causes a className change on the headline
// that registers as a fresh LCP paint and pulls the score down.
const INITIAL_DELAY_MS = 6000

// `phase: 'static'` suppresses the morph animation on first render so the
// headline paints with no transition, which keeps the LCP element stable.
type State = { i: number; phase: 'in' | 'out' | 'static' }
type Action = { type: 'tick' } | { type: 'next' }

function reducer(s: State, a: Action): State {
  if (a.type === 'tick') return { ...s, phase: 'out' }
  return { i: (s.i + 1) % WORDS.length, phase: 'in' }
}

export default function HeroKinetic() {
  const [state, dispatch] = useReducer(reducer, { i: 0, phase: 'static' })

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined
    const start = setTimeout(() => {
      dispatch({ type: 'tick' })
      interval = setInterval(() => dispatch({ type: 'tick' }), ROTATE_MS)
    }, INITIAL_DELAY_MS)
    return () => {
      clearTimeout(start)
      if (interval) clearInterval(interval)
    }
  }, [])

  // 540ms after the out animation, swap to next + start the in animation
  useEffect(() => {
    if (state.phase !== 'out') return
    const t = setTimeout(() => dispatch({ type: 'next' }), 540)
    return () => clearTimeout(t)
  }, [state.phase, state.i])

  const word = WORDS[state.i]

  return (
    <section
      aria-label="MindCherry — software for founders"
      className="relative isolate overflow-hidden"
    >
      {/* faint vertical guide rules — editorial feel */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 right-0 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pointer-events-none"
      >
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-ink/8 to-transparent" />
          <div className="absolute inset-y-0 left-2/3 w-px bg-gradient-to-b from-transparent via-ink/8 to-transparent" />
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 lg:pt-28 pb-24 lg:pb-36">
        {/* eyebrow */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono tracking-[0.2em] uppercase text-ash">
          <span className="inline-flex items-center gap-2">
            <span className="live-dot" aria-hidden />
            Booking Q3 / Q4 2026
          </span>
          <span aria-hidden className="hidden sm:inline-block w-6 h-px bg-ink/25" />
          <span>A studio of seven · 15 + years combined</span>
          <span aria-hidden className="hidden md:inline-block w-6 h-px bg-ink/25" />
          <span className="hidden md:inline">PKT — overlap with EU &amp; US</span>
        </div>

        {/* main grid */}
        <div className="mt-12 grid grid-cols-12 gap-y-14 lg:gap-x-12 items-end">
          {/* Headline is the LCP element — no entrance animation here so
              Lighthouse paints it immediately on first render. Subordinate
              elements below still animate in. */}
          <h1
            className="col-span-12 lg:col-span-9"
            style={{
              fontSize: 'clamp(56px, 10vw + 18px, 168px)',
              lineHeight: 0.98,
              letterSpacing: '-0.028em',
            }}
          >
            We turn founder ideas
            <br />
            into{' '}
            <span className="relative inline-block align-baseline">
              <span
                key={word}
                className={
                  state.phase === 'static'
                    ? ''
                    : state.phase === 'out'
                      ? 'kinetic-exit'
                      : 'kinetic-enter'
                }
                style={{
                  display: 'inline-block',
                  color: 'var(--color-cherry)',
                  fontStyle: 'italic',
                  fontVariationSettings: "'opsz' 144",
                }}
              >
                [{word}]
              </span>
              {/* hand-drawn underline */}
              <svg
                aria-hidden
                viewBox="0 0 600 14"
                preserveAspectRatio="none"
                className="kinetic-underline"
                style={{ width: '100%' }}
              >
                <path d="M2 9 Q 120 -2 280 6 T 598 4" />
              </svg>
            </span>
            <br />
            software.
          </h1>

          <p className="col-span-12 lg:col-span-5 lg:col-start-1 max-w-[520px] text-[17px] sm:text-[18px] leading-[1.55] text-ash">
            MindCherry is a software house for ambitious founders. We sit beside
            early and mid-stage teams to design, build, and quietly grow the
            product they bet the company on.
          </p>

          {/* CTAs + meta */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:justify-self-end flex flex-col items-start lg:items-end gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper text-[14px] font-medium hover:bg-cherry transition-colors duration-500"
              >
                Start a project
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink group-hover:bg-paper transition-transform duration-500 group-hover:translate-x-0.5">
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
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] text-ink/80 hover:text-ink transition-colors underline-offset-[6px] hover:underline decoration-cherry decoration-[1.5px]"
              >
                See selected work
              </Link>
            </div>
          </div>
        </div>

        {/* secondary row — small editorial inset photo + caption */}
        <div className="mt-20 grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
          <div className="col-span-12 md:col-span-7 lg:col-span-5">
            <div className="relative">
              <div
                className="relative aspect-[5/4] overflow-hidden rounded-[2px] border border-ink/12 shadow-[0_30px_60px_-30px_rgba(11,11,15,0.32)]"
                style={{ transform: 'rotate(-1.4deg)' }}
              >
                <Image
                  src="/images/hero/atmosphere.jpg"
                  alt="Sunlit studio with grid of windows casting long diagonal shadows on chairs and tables"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                  /* No `priority` — the LCP element on this page is the H1
                     headline above this image, and racing this image against
                     the display font hurts LCP. */
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/15 via-transparent to-transparent" />
              </div>
              <div className="mt-3 pl-2 flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                  Fig. 01
                </span>
                <span className="text-[12px] italic text-ash font-display">
                  the studio, on a quiet Tuesday morning
                </span>
              </div>
            </div>
          </div>

          <blockquote className="col-span-12 md:col-span-5 lg:col-span-6 lg:col-start-7 max-w-[540px]">
            <p
              className="font-display text-ink/95"
              style={{ fontSize: 'clamp(22px, 2vw + 12px, 30px)', lineHeight: 1.25, letterSpacing: '-0.012em' }}
            >
              <span className="text-cherry">“</span>
              We don&apos;t do throwaway demos. The first thing we ship to your
              users is the same code we&apos;ll be running in production three
              years from now.
              <span className="text-cherry">”</span>
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <span className="h-px w-10 bg-ink/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
                Adeel · founding engineer
              </span>
            </footer>
          </blockquote>
        </div>

        {/* scroll cue */}
        <div className="mt-20 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-ash">
          <span className="inline-block w-12 h-px bg-ink/25" />
          <span style={{ animation: 'scrollnudge 2.4s var(--ease-out-soft) infinite' }}>
            scroll · meet the studio
          </span>
        </div>
      </div>
    </section>
  )
}
