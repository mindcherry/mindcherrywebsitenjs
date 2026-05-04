'use client'

import React from 'react'
import Link from 'next/link'
import Button from './Button'

export default function Hero({
  title,
  subtitle,
  description,
  cta1Text = 'Get Started',
  cta1Link = '/contact',
  cta2Text = 'Learn More',
  cta2Link = '/about',
  backgroundImage,
  showCTA = true,
}: {
  title: string
  subtitle?: string
  description?: string
  cta1Text?: string
  cta1Link?: string
  cta2Text?: string
  cta2Link?: string
  backgroundImage?: string
  showCTA?: boolean
}) {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(234, 24, 69, 0.1) 0%, rgba(255, 255, 255, 0) 50%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {
              backgroundImage:
                'linear-gradient(135deg, #EA1845 0%, #EA1845 50%, #15161B 100%)',
            }
      }
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <div className="mb-4 inline-block">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {subtitle}
            </span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
          {title}
        </h1>

        {description && (
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed animate-slideInRight">
            {description}
          </p>
        )}

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Link href={cta1Link}>
              <Button size="lg" variant="primary">
                {cta1Text}
              </Button>
            </Link>
            <Link href={cta2Link}>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                {cta2Text}
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}
