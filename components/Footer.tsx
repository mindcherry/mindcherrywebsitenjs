'use client'

import Link from 'next/link'
import Button from './Button'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
]

const services = [
  { label: 'Web Development', href: '/services#web' },
  { label: 'Mobile Apps', href: '/services#mobile' },
  { label: 'UI/UX Design', href: '/services#design' },
  { label: 'Cloud Solutions', href: '/services#cloud' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Team', href: '/about#team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const social = [
  { label: 'Twitter', url: 'https://twitter.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'Instagram', url: 'https://instagram.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-primary text-white">
      {/* CTA Section */}
      <div className="bg-primary py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to start your project?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's work together to bring your ideas to life. Contact us today for a free consultation.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white hover:text-primary px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="text-2xl font-bold text-white hover:text-primary transition-colors block mb-4">
                MindCherry
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">
                Premium software development and digital solutions for modern businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Follow Us</h3>
              <div className="flex gap-4">
                {social.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center text-white text-sm font-semibold"
                    title={link.label}
                  >
                    {link.label.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} MindCherry. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
