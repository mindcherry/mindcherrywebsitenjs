import { NextRequest, NextResponse } from 'next/server'
import { getPosts } from '@/sanity/queries'

export async function GET(request: NextRequest) {
  try {
    const posts = await getPosts()

    return NextResponse.json(
      {
        success: true,
        posts,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch blog posts',
        posts: [],
      },
      { status: 500 }
    )
  }
}
