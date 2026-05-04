import { isValidEmail } from './utils'

export interface ValidationError {
  field: string
  message: string
}

export function validateContactForm(data: {
  name?: string
  email?: string
  message?: string
}): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.name || data.name.trim() === '') {
    errors.push({ field: 'name', message: 'Name is required' })
  } else if (data.name.length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' })
  } else if (data.name.length > 100) {
    errors.push({ field: 'name', message: 'Name must not exceed 100 characters' })
  }

  if (!data.email || data.email.trim() === '') {
    errors.push({ field: 'email', message: 'Email is required' })
  } else if (!isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' })
  }

  if (!data.message || data.message.trim() === '') {
    errors.push({ field: 'message', message: 'Message is required' })
  } else if (data.message.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' })
  } else if (data.message.length > 5000) {
    errors.push({ field: 'message', message: 'Message must not exceed 5000 characters' })
  }

  return errors
}

export function getErrorMessage(
  field: string,
  errors: ValidationError[]
): string | undefined {
  return errors.find((e) => e.field === field)?.message
}
