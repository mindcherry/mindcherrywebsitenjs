'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl'
}

const SectionWrapper = React.forwardRef<HTMLDivElement, SectionWrapperProps>(
  ({ children, className, id, maxWidth = '7xl' }, ref) => {
    const maxWidthStyles = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '7xl': 'max-w-7xl',
    }

    return (
      <section ref={ref} id={id} className="w-full">
        <div
          className={cn(
            'mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full',
            maxWidthStyles[maxWidth],
            className
          )}
        >
          {children}
        </div>
      </section>
    )
  }
)

SectionWrapper.displayName = 'SectionWrapper'

export default SectionWrapper
