export interface Author {
  _id: string
  name: string
  image?: {
    asset: {
      url: string
    }
  }
  bio?: string
}

export interface Category {
  _id: string
  title: string
  slug: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  mainImage?: {
    asset: {
      url: string
    }
    alt?: string
  }
  body: any
  author?: Author
  categories?: Category[]
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  logo?: string
  technologies: string[]
  industry: string
  results: string[]
  link?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  features?: string[]
  price?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface Testimonial {
  id: string
  content: string
  author: string
  role: string
  company: string
  image?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  serviceInterest?: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
  data?: ContactFormData
}
