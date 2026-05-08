import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { contactInfo } from '@/lib/data/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Email MindCherry to start a project. Pakistan-based studio, working with founders worldwide. The first reply comes from a senior engineer within a working day.',
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative">
        {/* ── Editorial top + form ─────────────────────────────── */}
        <section className="relative">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 lg:pt-28 pb-24 lg:pb-32">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono tracking-[0.2em] uppercase text-ash">
              <span className="inline-flex items-center gap-2">
                <span className="live-dot" aria-hidden />
                Reply &lt; 1 working day
              </span>
              <span aria-hidden className="hidden sm:inline-block w-6 h-px bg-ink/25" />
              <span>No SDR funnel · senior engineer first</span>
            </div>

            <div className="mt-12 grid grid-cols-12 gap-y-16 lg:gap-x-14">
              {/* Left: editorial */}
              <div className="col-span-12 lg:col-span-7">
                <h1
                  style={{ fontSize: 'clamp(56px, 9.5vw + 18px, 168px)', lineHeight: 0.96, letterSpacing: '-0.028em' }}
                >
                  Tell us what
                  <br />
                  you&apos;re{' '}
                  <span
                    style={{
                      color: 'var(--color-cherry)',
                      fontStyle: 'italic',
                      fontFamily: 'var(--font-display)',
                      fontVariationSettings: "'opsz' 144",
                    }}
                  >
                    building.
                  </span>
                </h1>

                <p className="mt-10 max-w-[560px] text-[18px] leading-[1.55] text-ash">
                  Two paragraphs is plenty. We&apos;ll reply with whether — and how
                  — we can help, plus a 30-minute call if it looks like a fit.
                </p>

                {/* Reach details */}
                <dl className="mt-16 pt-10 border-t border-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 max-w-[560px]">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                      Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="font-display text-[22px] sm:text-[24px] tracking-tight text-ink hover:text-cherry-text transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                      Phone (PKT)
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="font-display text-[22px] sm:text-[24px] tracking-tight text-ink hover:text-cherry-text transition-colors"
                      >
                        +92 349 029 0356
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                      Studio
                    </dt>
                    <dd className="mt-2 font-display text-[18px] leading-[1.4] text-ink">
                      {contactInfo.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                      Hours
                    </dt>
                    <dd className="mt-2 font-display text-[18px] leading-[1.4] text-ink">
                      Mon — Fri · 09:00 → 18:00 PKT
                      <span className="block text-[13px] text-ash mt-1">
                        Overlap with EU mornings &amp; US afternoons.
                      </span>
                    </dd>
                  </div>
                </dl>

                {/* Editorial inset */}
                <figure className="mt-16 max-w-[520px]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-ink/12 bg-bone">
                    <Image
                      src="/images/contact/desk-phone.jpg"
                      alt="A flat-lay of a black spiral notepad, smartphone, and pencil on a light wooden desk"
                      fill
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-ink/15 via-transparent to-transparent" />
                  </div>
                  <figcaption className="mt-3 pl-1 flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                      Fig. 01
                    </span>
                    <span className="text-[12px] italic text-ash font-display">
                      where the first reply usually gets written
                    </span>
                  </figcaption>
                </figure>
              </div>

              {/* Right: form on its own column */}
              <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <div className="border border-ink/10 bg-paper-deep/30 p-8 lg:p-10 rounded-[2px]">
                  <p className="eyebrow flex items-center gap-3 mb-6">
                    <span className="h-px w-10 bg-ink/30" />
                    The brief
                  </p>
                  <h2
                    className="mb-10"
                    style={{ fontSize: 'clamp(28px, 2vw + 12px, 36px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                  >
                    Four short fields,
                    <br />
                    <span className="italic text-ink/55 font-display">no qualifying questions.</span>
                  </h2>
                  <ContactForm />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── How we reply ─────────────────────────────────── */}
        <section className="relative bg-ink text-paper border-y border-ink/40">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
            <header className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16">
              <p className="col-span-12 lg:col-span-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
                <span className="h-px w-10 bg-paper/30" />
                What happens next
              </p>
              <h2
                className="col-span-12 lg:col-span-9 text-paper"
                style={{ fontSize: 'var(--text-5xl)', lineHeight: 0.98, letterSpacing: '-0.024em' }}
              >
                Three things, in order,
                <br />
                <span className="italic text-paper/55 font-display">no other surprises.</span>
              </h2>
            </header>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-y-10 lg:gap-x-14">
              {[
                {
                  num: '01',
                  title: 'Personal reply, &lt; 1 working day',
                  body:
                    'A senior engineer writes back. Real questions, no canned form letter. If we can\'t help, we\'ll tell you who can.',
                },
                {
                  num: '02',
                  title: '30-minute call',
                  body:
                    'No deck, no demo. We listen, ask three or four sharp questions, and tell you whether the engagement is the right shape.',
                },
                {
                  num: '03',
                  title: 'A two-page proposal',
                  body:
                    'Scope, timeline, who from our side, what we\'d need from yours, and a fixed price for the first slice. Sent within a week.',
                },
              ].map((step) => (
                <li key={step.num}>
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-cherry">
                    Step · {step.num}
                  </span>
                  <h3
                    className="mt-3 font-display text-paper"
                    style={{ fontSize: 'clamp(28px, 2.4vw + 12px, 40px)', lineHeight: 1.04, letterSpacing: '-0.018em' }}
                    dangerouslySetInnerHTML={{ __html: step.title }}
                  />
                  <p className="mt-4 text-paper/75 text-[15px] leading-[1.65] max-w-[360px]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-16 max-w-[640px] text-paper/65 text-[14px] leading-[1.65]">
              Prefer to skip ahead?{' '}
              <a
                href={contactInfo.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-cherry underline decoration-cherry decoration-[1.5px] underline-offset-[5px]"
              >
                Book the 30-minute call directly →
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
