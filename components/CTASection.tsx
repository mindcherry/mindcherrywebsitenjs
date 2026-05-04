'use client'

import Link from 'next/link'
import Button from './Button'
import SectionWrapper from './SectionWrapper'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  variant?: 'primary' | 'secondary'
}

export default function CTASection({
  title,
  description,
  buttonText = 'Get Started',
  buttonLink = '/contact',
  variant = 'primary',
}: CTASectionProps) {
  const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-dark-primary'
  const textColor = 'text-white'

  return (
    <SectionWrapper className={`${bgColor} ${textColor} rounded-2xl my-12`}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg text-white/90 mb-10 leading-relaxed">{description}</p>
        <div className="flex justify-center">
          <Link href={buttonLink}>
            <Button
              size="lg"
              variant={variant === 'primary' ? 'ghost' : 'primary'}
              className={cn(
                variant === 'primary'
                  ? 'text-white border-white hover:bg-white hover:text-primary'
                  : '',
                'px-8'
              )}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
