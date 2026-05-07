'use client'

import { useState } from 'react'
import Link from 'next/link'
import { services } from '@/lib/data/services'

export default function ServicesTrio() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="services" className="relative bg-paper-deep/30 border-y border-ink/10">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20">
          <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-ink/30" />
            What we offer
          </p>
          <h2
            className="col-span-12 lg:col-span-9"
            style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
          >
            Three engagements,
            <br />
            <span className="italic text-ink/55 font-display">honestly named.</span>
          </h2>
        </header>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {services.map((s, idx) => {
            const num = String(idx + 1).padStart(2, '0')
            const isOpen = openId === s.id

            return (
              <li key={s.id} className="group">
                <button
                  type="button"
                  className="w-full text-left py-10 sm:py-12 grid grid-cols-12 gap-y-6 lg:gap-x-12 items-baseline cursor-pointer"
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  aria-controls={`service-detail-${s.id}`}
                >
                  <div className="col-span-3 sm:col-span-2 flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-widest text-ash">{num}</span>
                    <span
                      aria-hidden
                      className={`inline-block h-1.5 w-1.5 rounded-full bg-cherry transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
                    />
                  </div>

                  <h3
                    className="col-span-9 sm:col-span-7 transition-colors"
                    style={{
                      fontSize: 'clamp(28px, 3vw + 12px, 50px)',
                      lineHeight: 1.02,
                      letterSpacing: '-0.022em',
                      color: isOpen ? 'var(--color-cherry)' : 'var(--color-ink)',
                    }}
                  >
                    {s.title}
                  </h3>

                  <div className="col-span-12 sm:col-span-3 flex sm:justify-end items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
                      {isOpen ? 'Close' : 'Read'}
                    </span>
                    <span
                      aria-hidden
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition-transform duration-500 ${isOpen ? 'rotate-45 bg-cherry text-paper border-cherry' : 'group-hover:border-ink/50'}`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </button>

                <div
                  id={`service-detail-${s.id}`}
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-12 gap-y-6 lg:gap-x-12 pb-12">
                      <p className="col-span-12 sm:col-span-7 sm:col-start-3 text-[17px] leading-[1.6] text-ash max-w-[640px]">
                        {s.description}
                      </p>
                      {s.features && (
                        <ul className="col-span-12 sm:col-span-3 sm:col-start-10 space-y-2">
                          {s.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-baseline gap-3 text-[13px] text-ink/80"
                            >
                              <span aria-hidden className="font-mono text-[10px] text-cherry-text">+</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 flex items-center gap-4">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[14px] text-ink hover:text-cherry transition-colors"
          >
            Full services brief
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
