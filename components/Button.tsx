'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed gap-2'

    const variantStyles = {
      primary:
        'bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg',
      secondary:
        'bg-primary-100 text-primary hover:bg-primary-200 active:bg-primary-300',
      outline:
        'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost:
        'text-primary hover:bg-primary-50 active:bg-primary-100',
    }

    const sizeStyles = {
      xs: 'px-3 py-1.5 text-xs rounded',
      sm: 'px-4 py-2 text-sm rounded',
      md: 'px-5 py-2.5 text-base rounded-lg',
      lg: 'px-7 py-3.5 text-lg rounded-lg',
      xl: 'px-9 py-4.5 text-xl rounded-xl',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="w-4 h-4 mr-2 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
