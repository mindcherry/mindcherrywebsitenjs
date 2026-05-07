import { principles } from '@/lib/data/principles'

export default function PrincipleMarquee() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 mb-14">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12">
          <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-ink/30" />
            What we believe
          </p>
          <h2
            className="col-span-12 lg:col-span-9"
            style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
          >
            Six commitments,
            <br />
            <span className="italic text-ink/55 font-display">printed on the studio wall.</span>
          </h2>
        </div>
      </div>

      {/* belt — two staggered marquees, mixed type sizes */}
      <div className="marquee py-2 select-none">
        <ul className="marquee-track items-center text-ink">
          {[...principles, ...principles].map((p, i) => (
            <li key={`${p.id}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(48px, 6vw + 12px, 112px)',
                  letterSpacing: '-0.028em',
                  lineHeight: 0.95,
                }}
              >
                {p.title}
              </span>
              <span aria-hidden className="text-cherry text-3xl">●</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="marquee py-2 mt-3 select-none opacity-65">
        <ul className="marquee-track marquee-track-rev items-center text-ink/65">
          {[...principles, ...principles].map((p, i) => (
            <li key={`${p.id}-r-${i}`} className="flex items-center gap-12 whitespace-nowrap">
              <span
                className="font-display italic"
                style={{
                  fontSize: 'clamp(28px, 3vw + 8px, 56px)',
                  letterSpacing: '-0.018em',
                  lineHeight: 0.95,
                }}
              >
                {p.body}
              </span>
              <span aria-hidden className="text-cherry">/</span>
            </li>
          ))}
        </ul>
      </div>

      {/* fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-paper to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-paper to-transparent z-10"
      />
    </section>
  )
}
