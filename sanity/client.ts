import { createClient, type SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-10-01'

export const isSanityConfigured = Boolean(projectId)

// Don't throw at import time — the marketing site should still render
// (with empty blog state) before the project is wired up. Pages that need
// Sanity check `isSanityConfigured` first.
let _client: SanityClient | null = null

export function getClient(): SanityClient {
  if (!_client) {
    if (!projectId) {
      throw new Error(
        'Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local. ' +
          'See sanity-studio/README.md for setup steps.',
      )
    }
    _client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
      perspective: 'published',
    })
  }
  return _client
}

// Lazy proxy so legacy `import { client }` still works without throwing on import.
export const client = new Proxy({} as SanityClient, {
  get(_target, prop) {
    return Reflect.get(getClient(), prop)
  },
})

export function urlFor(source: unknown) {
  return imageUrlBuilder(getClient()).image(source as never)
}
