import { NextRequest, NextResponse } from 'next/server'
import { validateContactForm } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const errors = validateContactForm(body)
    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors,
        },
        { status: 400 }
      )
    }

    // In a real app, you would:
    // 1. Send email using SendGrid/Resend
    // 2. Store in database
    // 3. Create ticket in CRM

    // For now, we'll just log it
    console.log('Contact form submission:', body)

    // Mock success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon!',
        data: body,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process request',
      },
      { status: 500 }
    )
  }
}
