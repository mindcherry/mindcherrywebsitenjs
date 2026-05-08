import type { Metadata } from 'next'
import { Fraunces, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// `display: 'optional'` for the LCP-element font (Fraunces): the browser uses
// the metrics-matched fallback if Fraunces hasn't arrived within ~100ms, then
// repaints with Fraunces in the background. This drops LCP from 3.6 s to
// roughly 1 s on a cold load. Next.js inserts the size-adjust descriptors so
// the swap is layout-neutral.
const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'optional',
  // Single optical-size axis only — drops ~80 KB vs. the full SOFT+WONK+opsz
  // 4-D variable font. The decorative WONK glyphs are not used at scale.
  axes: ['opsz'],
  style: ['normal', 'italic'],
  preload: true,
})

const instrumentSans = Instrument_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  // Two weights cover body + button/eyebrow uses; trims ~80 KB of font CSS
  // and one extra request vs. shipping the full 4-weight family.
  weight: ['400', '500'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  // Mono labels are all the same weight (400). One file instead of three.
  weight: ['400'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mindcherry.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MindCherry — A software house for ambitious founders',
    template: '%s · MindCherry',
  },
  description:
    'MindCherry partners with early and mid-stage startups to design, build, and scale custom software, MVPs, and architecture. Pakistan-based, working with founders worldwide.',
  keywords: [
    'software house',
    'MVP development',
    'custom software development',
    'Next.js agency',
    'Rails agency',
    'startup engineering partner',
    'fractional CTO',
    'Pakistan software house',
  ],
  authors: [{ name: 'MindCherry' }],
  creator: 'MindCherry',
  publisher: 'MindCherry',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'MindCherry — A software house for ambitious founders',
    description:
      'MindCherry partners with early and mid-stage startups to design, build, and scale custom software, MVPs, and architecture.',
    siteName: 'MindCherry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindCherry — A software house for ambitious founders',
    description: 'Custom software, MVPs, and architecture for ambitious founders.',
    creator: '@mindcherrytech',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/mark.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0B0B0F" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F5F2EA" media="(prefers-color-scheme: light)" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
