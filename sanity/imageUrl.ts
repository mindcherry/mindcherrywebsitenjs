import { urlFor } from './client'

export function getSanityImageUrl(image: any, width?: number, height?: number): string {
  if (!image) return ''

  let url = urlFor(image).url()

  if (width && height) {
    url = urlFor(image).width(width).height(height).url()
  } else if (width) {
    url = urlFor(image).width(width).url()
  } else if (height) {
    url = urlFor(image).height(height).url()
  }

  // Add quality optimization
  url = url + '?auto=format&fit=max&q=80'

  return url
}

export function getOptimizedImageUrl(
  image: any,
  options?: {
    width?: number
    height?: number
    quality?: number
    fit?: 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
  }
): string {
  if (!image) return ''

  let url = urlFor(image)

  if (options?.width) {
    url = url.width(options.width)
  }

  if (options?.height) {
    url = url.height(options.height)
  }

  if (options?.fit) {
    url = url.fit(options.fit)
  }

  const finalUrl = url.url()
  const quality = options?.quality || 80

  return `${finalUrl}?auto=format&fit=max&q=${quality}`
}
