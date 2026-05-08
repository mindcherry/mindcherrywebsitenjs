'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { getSanityImageUrl } from '@/sanity/imageUrl'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className="my-12 -mx-2 sm:-mx-6 lg:-mx-12">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-ink/10">
          <Image
            src={getSanityImageUrl(value)}
            alt={value.alt || ''}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 760px"
          />
        </div>
        {value.caption && (
          <figcaption className="mt-3 text-[12px] italic text-ash font-display">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    codeBlock: ({ value }: any) => (
      <pre className="my-8 overflow-x-auto rounded-[2px] bg-ink text-paper p-5 text-[13px] leading-[1.55] font-mono">
        {value.language && (
          <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-paper/55">
            {value.language}
          </div>
        )}
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2
        className="font-display mt-16 mb-5 first:mt-0"
        style={{ fontSize: 'clamp(28px, 2.4vw + 12px, 40px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="font-display mt-12 mb-4"
        style={{ fontSize: 'clamp(22px, 1.6vw + 10px, 28px)', lineHeight: 1.15, letterSpacing: '-0.018em' }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-10 mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="my-5 text-[18px] leading-[1.75] text-ink/85">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-10 pl-6 border-l-2 border-cherry font-display italic text-ink/85"
        style={{ fontSize: 'clamp(20px, 1.4vw + 10px, 26px)', lineHeight: 1.45 }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 space-y-2 pl-5 text-[18px] leading-[1.7] text-ink/85 list-disc marker:text-cherry">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 space-y-2 pl-5 text-[18px] leading-[1.7] text-ink/85 list-decimal marker:text-cherry-text marker:font-mono">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-medium text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-paper-deep border border-ink/10 text-[15px] text-cherry-text font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target={value.blank ? '_blank' : undefined}
        rel={value.blank ? 'noopener noreferrer' : undefined}
        className="text-ink underline decoration-cherry decoration-[1.5px] underline-offset-[5px] hover:text-cherry-text transition-colors"
      >
        {children}
      </a>
    ),
  },
}

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
