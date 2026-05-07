'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Wordmark from './Wordmark'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-500',
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-ink/10'
          : 'bg-transparent border-b border-transparent',
      )}
      style={{ '--color-paper': '#F5F2EA' } as React.CSSProperties}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center h-16 sm:h-[72px]">
          <Link
            href="/"
            aria-label="MindCherry — home"
            className="group flex items-center gap-3 mr-auto"
          >
            <Wordmark height={26} />
            <span className="hidden sm:inline-flex items-center gap-2 pl-3 ml-1 border-l border-ink/15 text-[11px] font-mono uppercase tracking-[0.18em] text-ash">
              <span className="live-dot" aria-hidden />
              Studio · Lahore
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'group relative px-4 py-2 text-[13px] font-medium tracking-tight transition-colors',
                    active ? 'text-ink' : 'text-ink/65 hover:text-ink',
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    aria-hidden
                    className={cn(
                      'absolute left-4 right-4 bottom-1 h-px origin-left transition-transform duration-500',
                      active
                        ? 'bg-cherry scale-x-100'
                        : 'bg-ink/40 scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 ml-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-paper text-[13px] font-medium hover:bg-ink-soft transition-colors"
            >
              Start a project
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 hover:border-ink/40 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                {isOpen ? (
                  <path
                    d="M2 2L12 8M12 2L2 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <>
                    <path d="M0 1H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M0 9H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          <nav className="mx-auto max-w-[1320px] px-5 py-6 grid gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group flex items-baseline justify-between py-3 border-b border-ink/8 last:border-b-0',
                  pathname === link.href ? 'text-ink' : 'text-ink/70',
                )}
              >
                <span className="font-display text-2xl tracking-tight">{link.label}</span>
                <span className="font-mono text-[11px] tracking-widest text-ash">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ink text-paper text-sm font-medium"
            >
              Start a project →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
