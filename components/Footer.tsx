import Link from 'next/link'
import Wordmark from './Wordmark'
import { contactInfo, socialLinks } from '@/lib/data/contact'

const cols = {
  Studio: [
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/blog' },
    { label: 'Careers', href: '/contact' },
  ],
  Work: [
    { label: 'Selected work', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/#process' },
  ],
  Reach: [
    { label: 'hello@mindcherry.com', href: `mailto:${contactInfo.email}` },
    { label: 'Schedule a call', href: contactInfo.calendlyLink },
    { label: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  ],
} as const

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="relative mt-32 bg-ink text-paper overflow-hidden">
      {/* big wordmark backdrop */}
      <div
        className="absolute inset-x-0 -bottom-6 sm:-bottom-12 lg:-bottom-20 px-4 select-none pointer-events-none"
        aria-hidden
      >
        <span
          className="block text-center font-display text-paper/[0.08] leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(96px, 24vw, 360px)',
            letterSpacing: '-0.04em',
            fontVariationSettings: "'opsz' 144",
          }}
        >
          Mindcherry.
        </span>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
          <div className="md:col-span-5">
            <Wordmark tone="mono" height={36} className="text-paper" />
            <p className="mt-6 max-w-md text-paper/65 text-[15px] leading-relaxed">
              MindCherry is a software house for ambitious founders. We sit with
              early and mid-stage teams to design, build, and grow custom
              software, MVPs, and the architecture they live on.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-paper/15 text-paper/70 hover:text-paper hover:border-paper/45 transition-colors"
                  aria-label={s.label}
                  title={s.label}
                >
                  <span className="text-[12px] font-mono uppercase tracking-wide">
                    {s.label.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {(Object.keys(cols) as (keyof typeof cols)[]).map((title) => (
            <div key={title} className="md:col-span-2">
              {/* h3 (not h4) to avoid skipping a heading level — page h2s flow into h3 column titles. */}
              <h3 className="eyebrow text-paper/55 mb-5">{title}</h3>
              <ul className="space-y-3">
                {cols[title].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-paper/85 hover:text-paper transition-colors text-[14px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            {/* Renamed from "Studio" to "Address" to disambiguate from the
                /studio Sanity-Studio route also linked elsewhere on the page. */}
            <h3 className="eyebrow text-paper/55 mb-5">Address</h3>
            <p className="text-[14px] text-paper/85 leading-relaxed">
              {contactInfo.address}
              <br />
              <span className="text-paper/55 mt-2 block">PKT (UTC+5) · overlapping EU mornings &amp; US afternoons.</span>
            </p>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-paper/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-paper/55 text-[12px] font-mono tracking-wide uppercase">
            © {currentYear} MindCherry · all rights reserved
          </p>
          <div className="flex gap-6 text-paper/55 text-[12px] font-mono tracking-wide uppercase">
            <Link href="/privacy" className="hover:text-paper transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-paper transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
