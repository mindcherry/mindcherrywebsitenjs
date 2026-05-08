import Link from 'next/link'

export default function EditorialIntro() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-28 lg:py-40">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-3">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-10 bg-ink/30" />
              On purpose
            </p>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <p
              className="font-display text-ink"
              style={{ fontSize: 'clamp(28px, 3.4vw + 12px, 56px)', lineHeight: 1.08, letterSpacing: '-0.022em' }}
            >
              We are a small studio, and we like it that way. Every brief is
              taken by{' '}
              <span className="italic text-cherry font-display">a senior</span>{' '}
              who&apos;ll still be on Slack with you when the product is six
              months old. We pick our work, we limit our headcount, and we
              defend the boring decisions{' '}
              <span className="italic text-ink/65 font-display">that quietly compound.</span>
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[14px] text-ink hover:text-cherry transition-colors"
              >
                Read the studio brief
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ash">
                Est. 2018 · Lahore — currently 7 humans
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
