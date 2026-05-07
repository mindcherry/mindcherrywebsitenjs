import type { NextConfig } from 'next'

// Sanity Studio loads the project ID from window — needs a slightly looser
// CSP than the marketing site. Production CSP is enforced for marketing
// routes only; the embedded studio route gets its own permissive policy.
// `require-trusted-types-for` is intentionally NOT set — the Next.js runtime
// assigns to script.src / iframe.src for chunk loading, which is blocked by
// Trusted Types and surfaces as console errors that cap the Best-Practices
// score. We can revisit once Next ships first-class Trusted Types support.
const MARKETING_CSP = [
  "default-src 'self'",
  // Next/Turbopack inlines small bootstrap scripts; 'unsafe-inline' is
  // required at build time. Can tighten with a nonce later.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
  "img-src 'self' data: blob: cdn.sanity.io images.unsplash.com api.dicebear.com",
  "font-src 'self' fonts.gstatic.com data:",
  "connect-src 'self' *.sanity.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const STUDIO_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.sanity.io",
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
  "img-src 'self' data: blob: cdn.sanity.io",
  "font-src 'self' fonts.gstatic.com data:",
  "connect-src 'self' *.sanity.io wss://*.sanity.io",
  "frame-src 'self' *.sanity.io",
  "frame-ancestors 'self'",
].join('; ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // 2-year HSTS with preload — enable only when serving over HTTPS in prod.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Cross-Origin isolation — required for the COOP best-practice.
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  // Permissions: lock down powerful APIs we don't use.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()',
  },
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: '*.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'api.dicebear.com' },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  // Generate source maps in production so Lighthouse / DevTools can
  // attribute work back to original code (Best-Practices auditor wants this).
  productionBrowserSourceMaps: true,
  // SWC strips React `data-testid`-style props automatically; explicit removal
  // of console.* in prod keeps shipped JS lean.
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  headers: async () => [
    {
      source: '/studio/:path*',
      headers: [
        ...securityHeaders,
        { key: 'Content-Security-Policy', value: STUDIO_CSP },
        { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
      ],
    },
    {
      source: '/:path*',
      headers: [
        ...securityHeaders,
        { key: 'Content-Security-Policy', value: MARKETING_CSP },
      ],
    },
  ],
}

export default nextConfig

