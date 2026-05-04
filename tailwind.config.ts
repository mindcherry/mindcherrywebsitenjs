import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // MindCherry brand colors
        primary: {
          DEFAULT: 'var(--color-primary, #EA1845)',
          50: 'var(--color-primary-50, #fdf2f6)',
          100: 'var(--color-primary-100, #fbe8ed)',
          500: 'var(--color-primary-500, #EA1845)',
          600: 'var(--color-primary-600, #d81640)',
          700: 'var(--color-primary-700, #c60c38)',
        },
        dark: {
          primary: 'var(--color-dark-primary, #15161B)',
          secondary: 'var(--color-dark-secondary, #4E4E4E)',
          bg: 'var(--color-dark-bg, #0A0A0A)',
        },
        light: {
          bg: 'var(--color-light-bg, #E1E4EB)',
          text: 'var(--color-light-text, #15161B)',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-family, "Monrope", "Segoe UI", "Helvetica Neue", sans-serif)',
        ],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        base: ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        lg: ['18px', { lineHeight: '28px', letterSpacing: '0.1px' }],
        xl: ['20px', { lineHeight: '28px', letterSpacing: '0px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        '3xl': ['32px', { lineHeight: '40px', letterSpacing: '-0.5px' }],
        '4xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.5px' }],
        '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-1px' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '96px',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideDown: 'slideDown 0.6s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
