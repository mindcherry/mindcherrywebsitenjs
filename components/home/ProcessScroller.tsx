'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Step {
  num: string
  title: string
  body: string
  image: string
  alt: string
  artifacts: string[]
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Discover',
    body:
      'We sit with the founders for a week. We map the user, the model, the constraints, and the unsaid assumptions. The output is a one-page brief that disambiguates the product before a pixel is drawn.',
    image: '/images/process/01-discover.jpg',
    alt: 'A designer sketching ideas in a spiral notebook on a wooden desk',
    artifacts: ['Founder interviews', 'User flows', 'One-page brief'],
  },
  {
    num: '02',
    title: 'Architect',
    body:
      'Senior engineers and architects pick the boring, well-understood primitives. We choose Postgres over the new database, Rails or Next over the trendy framework — unless the trade-off genuinely justifies it.',
    image: '/images/process/02-architect.jpg',
    alt: 'Architectural sketches and floor plans on a spiral notepad',
    artifacts: ['System diagram', 'Data model', 'Risk register'],
  },
  {
    num: '03',
    title: 'Build',
    body:
      'Two-week iterations, end-to-end, with the founder in the loop. Every PR ships behind a feature flag. The first usable surface lands in your hands inside the first sprint — no demos, real product.',
    image: '/images/process/03-build.jpg',
    alt: 'Macro photograph of colourful programming code on a dark editor screen',
    artifacts: ['Sprint demos', 'Behind feature flags', 'Real production deploys'],
  },
  {
    num: '04',
    title: 'Scale',
    body:
      'We watch the dashboards we built. Performance, reliability, abuse, and growth signals get a weekly review. We tell you about issues before your users do, and we hand off to your team only when you ask.',
    image: '/images/process/04-scale.jpg',
    alt: 'Overhead view of a modern data centre, with neat parallel cable trays',
    artifacts: ['On-call rotation', 'SLOs & dashboards', 'Quarterly architecture review'],
  },
]

export default function ProcessScroller() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    stepRefs.current.forEach((el, idx) => {
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio > 0.5) setActive(idx)
          })
        },
        { threshold: [0.5, 0.8], rootMargin: '-20% 0px -20% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 lg:mb-24">
          <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-ink/30" />
            How we work
          </p>
          <h2
            className="col-span-12 lg:col-span-9"
            style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
          >
            Four moves we make on every engagement,
            <br />
            <span className="italic text-ink/55 font-display">in this exact order.</span>
          </h2>
        </header>

        <div className="grid grid-cols-12 lg:gap-x-14 gap-y-16">
          {/* Sticky stage */}
          <div className="col-span-12 lg:col-span-6 lg:sticky lg:top-28 lg:self-start lg:h-[calc(100vh-8rem)]">
            <div className="relative h-[420px] sm:h-[520px] lg:h-full max-h-[640px] overflow-hidden rounded-[2px] border border-ink/15 bg-bone">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className="absolute inset-0 transition-opacity duration-700 ease-out"
                  style={{ opacity: i === active ? 1 : 0 }}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/55 via-ink/15 to-transparent" />
                </div>
              ))}

              {/* step caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-6 text-paper">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase">
                    Step {steps[active].num} of 04
                  </p>
                  <p
                    className="mt-2 font-display"
                    style={{ fontSize: 'clamp(36px, 4vw + 12px, 64px)', lineHeight: 0.95 }}
                  >
                    {steps[active].title}
                  </p>
                </div>
                {/* Decorative — the active step number/title above already
                    conveys progress. Hidden from a11y tree to keep contrast
                    rules clean while preserving the visual indicator. */}
                <ol aria-hidden className="flex flex-col gap-1.5">
                  {steps.map((s, i) => (
                    <li key={s.num} className="flex items-center gap-3">
                      <span
                        className="block h-px transition-all duration-500"
                        style={{
                          width: i === active ? 36 : 18,
                          background:
                            i === active ? 'var(--color-paper)' : 'rgba(245, 242, 234, 0.4)',
                        }}
                      />
                      <span
                        className="font-mono text-[10px] uppercase tracking-[0.22em] transition-opacity"
                        style={{ opacity: i === active ? 0.95 : 0.45 }}
                      >
                        {s.num}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <div className="col-span-12 lg:col-span-6">
            {steps.map((s, idx) => (
              <div
                key={s.num}
                ref={(el) => {
                  stepRefs.current[idx] = el
                }}
                className={`py-10 lg:py-16 ${idx === 0 ? '' : 'border-t border-ink/10'} transition-colors duration-500 ${
                  idx === active ? '' : 'is-inactive'
                }`}
                // Inactive steps are visually de-emphasised via colour shift
                // on the title only, not parent opacity — so the body copy
                // stays at full a11y contrast.
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] tracking-[0.18em] text-cherry-text">
                    {s.num}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: 'clamp(28px, 2.6vw + 12px, 44px)', lineHeight: 1.04, letterSpacing: '-0.018em' }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="mt-5 max-w-[480px] text-[16px] leading-[1.65] text-ash">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.artifacts.map((a) => (
                    <li key={a} className="mono-chip">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
