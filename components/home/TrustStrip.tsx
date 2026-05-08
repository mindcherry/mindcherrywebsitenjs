import { techStack } from '@/lib/data/principles'

export default function TrustStrip() {
  const allItems = techStack.flatMap((g) => g.items)

  return (
    <section
      aria-label="Trusted technical surface"
      className="border-y border-ink/10 bg-paper-deep/40"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-7 flex flex-col md:flex-row items-start md:items-center gap-y-5 md:gap-x-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash whitespace-nowrap shrink-0">
          The toolkit&nbsp;&nbsp;/
        </p>

        <div className="overflow-hidden marquee w-full">
          <ul className="marquee-track items-center text-[14px] text-ink/75">
            {[...allItems, ...allItems].map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="flex items-center gap-4 whitespace-nowrap"
              >
                <span className="font-display text-[17px] tracking-tight">{item}</span>
                <span aria-hidden className="text-cherry/60 select-none">·</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
