'use client'

import { useState, FormEvent } from 'react'
import { validateContactForm } from '@/lib/validation'

const ENGAGEMENT_OPTIONS = [
  'Custom Software & MVP Development',
  'Architecture & Design',
  'Software Consultancy',
  'Not sure yet',
] as const

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    if (errors[name]) {
      setErrors((p) => {
        const next = { ...p }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus({ type: null, message: '' })
    const validationErrors = validateContactForm(formData)
    if (validationErrors.length > 0) {
      setErrors(
        validationErrors.reduce(
          (acc, err) => ({ ...acc, [err.field]: err.message }),
          {} as Record<string, string>,
        ),
      )
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Sent. The first reply comes from a senior engineer, usually within a working day.',
        })
        setFormData({ name: '', email: '', service: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send. Please email hello@mindcherry.com directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass =
    'w-full bg-transparent border-b border-ink/15 py-3 text-[16px] text-ink placeholder-ink/35 focus:border-cherry focus:outline-none transition-colors'

  return (
    <form onSubmit={handleSubmit} noValidate>
      <fieldset className="space-y-9">
        <legend className="sr-only">Project enquiry form</legend>

        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ash mb-2"
          >
            01 / Your name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adeel Khan"
            className={fieldClass}
            autoComplete="name"
          />
          {errors.name && (
            <p role="alert" className="mt-2 text-[12px] font-mono uppercase tracking-[0.16em] text-cherry-text">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ash mb-2"
          >
            02 / Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="adeel@yourcompany.com"
            className={fieldClass}
            autoComplete="email"
          />
          {errors.email && (
            <p role="alert" className="mt-2 text-[12px] font-mono uppercase tracking-[0.16em] text-cherry-text">
              {errors.email}
            </p>
          )}
        </div>

        {/* Engagement type */}
        <div>
          <label
            htmlFor="contact-service"
            className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ash mb-2"
          >
            03 / Engagement (optional)
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${fieldClass} appearance-none cursor-pointer pr-8`}
          >
            <option value="">— pick a shape —</option>
            {ENGAGEMENT_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ash mb-2"
          >
            04 / Two paragraphs about the project
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="What you're building, what you've tried, and what you'd like our help with."
            className={`${fieldClass} resize-none leading-[1.55]`}
          />
          {errors.message && (
            <p role="alert" className="mt-2 text-[12px] font-mono uppercase tracking-[0.16em] text-cherry-text">
              {errors.message}
            </p>
          )}
        </div>

        {/* Status */}
        {submitStatus.type === 'success' && (
          <p
            role="status"
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-cherry-text border-l-2 border-cherry-text pl-4"
          >
            {submitStatus.message}
          </p>
        )}
        {submitStatus.type === 'error' && (
          <p
            role="alert"
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink border-l-2 border-ink pl-4"
          >
            {submitStatus.message}
          </p>
        )}

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper text-[14px] font-medium hover:bg-cherry disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-500"
          >
            {isSubmitting ? 'Sending…' : 'Send the brief'}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:translate-x-0.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11L11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <p className="mt-4 text-[12px] text-ash">
            Or email{' '}
            <a
              href="mailto:hello@mindcherry.com"
              className="underline decoration-cherry decoration-[1.5px] underline-offset-[5px] hover:text-ink"
            >
              hello@mindcherry.com
            </a>{' '}
            directly. Same humans either way.
          </p>
        </div>
      </fieldset>
    </form>
  )
}
