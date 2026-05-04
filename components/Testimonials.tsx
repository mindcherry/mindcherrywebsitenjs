'use client'

import Image from 'next/image'
import Card from './Card'
import { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
  maxCols?: 2 | 3
}

export default function Testimonials({ testimonials, maxCols = 3 }: TestimonialsProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[maxCols]} gap-6 w-full`}>
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="p-6 sm:p-8 flex flex-col h-full">
          {/* Rating Stars */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-5 h-5 text-primary fill-current flex-shrink-0"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
            "{testimonial.content}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {testimonial.image && (
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-dark-primary dark:text-white">
                {testimonial.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
