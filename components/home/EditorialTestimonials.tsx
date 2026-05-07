import Image from 'next/image'
import { testimonials } from '@/lib/data/testimonials'

export default function EditorialTestimonials() {
  const [first, second] = testimonials
  return (
    <section className="relative bg-bone/40 border-y border-ink/10">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
        <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 lg:mb-24">
          <p className="col-span-12 lg:col-span-3 eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-ink/30" />
            What founders say
          </p>
          <h2
            className="col-span-12 lg:col-span-9"
            style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
          >
            We don&apos;t collect testimonials —
            <br />
            <span className="italic text-ink/55 font-display">these came in unprompted.</span>
          </h2>
        </header>

        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">
          {/* Big featured quote */}
          {first && (
            <figure className="col-span-12 lg:col-span-8">
              <blockquote
                className="font-display text-ink relative pl-6 sm:pl-10"
                style={{ fontSize: 'clamp(26px, 2.6vw + 12px, 44px)', lineHeight: 1.18, letterSpacing: '-0.012em' }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 font-display text-cherry leading-none"
                  style={{ fontSize: 'clamp(60px, 6vw + 12px, 100px)' }}
                >
                  &ldquo;
                </span>
                {first.content}
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2 pl-6 sm:pl-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cherry">
                  / {first.author}
                </span>
                <span className="text-[14px] text-ash italic font-display">
                  {first.role}
                  {first.company ? `, ${first.company}` : ''}
                </span>
              </figcaption>
            </figure>
          )}

          {/* secondary quote + photo */}
          <div className="col-span-12 lg:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-ink/12">
              <Image
                src="/images/people/whiteboarding.jpg"
                alt="Two people collaborating at a whiteboard, generating ideas"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/85">
                Fig. 02 — Mindwell pre-engagement workshop
              </div>
            </div>

            {second && (
              <figure className="mt-10">
                <blockquote
                  className="font-display text-ink/90"
                  style={{ fontSize: 'clamp(18px, 1.4vw + 8px, 22px)', lineHeight: 1.45 }}
                >
                  &ldquo;{second.content}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cherry-text">
                    / {second.author}
                  </span>
                  <span className="text-[13px] text-ash italic font-display">
                    {second.role}
                  </span>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
