import type { Metadata } from 'next'
import { Geist_Mono, Montserrat } from 'next/font/google'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const monrope = Montserrat({
  variable: '--font-family',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'MindCherry - Modern Software House',
  description: 'Premium software development, web design, and digital solutions for innovative businesses.',
  keywords: ['software development', 'web design', 'digital agency', 'software house'],
  authors: [{ name: 'MindCherry' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindcherry.com',
    title: 'MindCherry - Modern Software House',
    description: 'Premium software development and digital solutions',
    siteName: 'MindCherry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindCherry - Modern Software House',
    description: 'Premium software development and digital solutions',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistMono.variable} ${monrope.variable} scroll-smooth`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#EA1845" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-dark-primary dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}

