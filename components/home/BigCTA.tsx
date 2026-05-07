import Link from 'next/link'
import Image from 'next/image'
import { contactInfo } from '@/lib/data/contact'

export default function BigCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ink/30" />
              The next move
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'var(--text-7xl)', lineHeight: 0.92, letterSpacing: '-0.028em' }}
            >
              Have something
              <br />
              <span className="italic text-cherry font-display">you want built?</span>
            </h2>
            <p className="mt-8 max-w-[560px] text-[17px] sm:text-[18px] leading-[1.55] text-ash">
              We answer every email personally, usually inside a working day. No
              SDR funnel, no sales scripts — just a 30-minute call with the
              person who&apos;d run your engagement.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={contactInfo.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper text-[14px] font-medium hover:bg-cherry transition-colors duration-500"
              >
                Schedule a 30-minute call
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
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=New project enquiry`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] text-ink/80 hover:text-ink transition-colors underline-offset-[6px] hover:underline decoration-cherry decoration-[1.5px]"
              >
                {contactInfo.email}
              </a>
            </div>

            <dl className="mt-14 pt-8 border-t border-ink/10 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">Reply window</dt>
                <dd className="mt-2 font-display text-[22px] text-ink leading-tight">&lt; 1 working day</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">Engagement length</dt>
                <dd className="mt-2 font-display text-[22px] text-ink leading-tight">8 weeks → ongoing</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">Time zone</dt>
                <dd className="mt-2 font-display text-[22px] text-ink leading-tight">UTC +5 (Lahore)</dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ink/12 bg-bone">
              <Image
                src="/images/people/founder.jpg"
                alt="Hands writing notes in a book under the warm glow of a desk lamp"
                fill
                sizes="(max-width: 1024px) 90vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-paper">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase opacity-75">
                    Fig. 03
                  </p>
                  <p className="mt-1 font-display italic text-[17px]">
                    after-hours, planning week 1
                  </p>
                </div>
                <span className="live-dot" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
