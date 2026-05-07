import { Service } from '../types'

export const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software & MVP Development',
    description:
      'We sit with founders to brainstorm, design, and ship product tailored to a specific business thesis — without losing sight of time-to-market. Most of our work begins as a v1 and grows with the company.',
    features: [
      'Founding-engineer mindset',
      'Production-ready in weeks, not quarters',
      'TypeScript, Next.js, Rails, Django, Laravel',
      'Postgres, MongoDB, MySQL, Redis',
      'Stripe, Twilio, OpenAI, AWS, GCP',
    ],
  },
  {
    id: 'architecture-design',
    title: 'Architecture & Design',
    description:
      'Senior architects and engineering managers who help you shape an upcoming project — covering its technical and execution dimensions before a single feature is built.',
    features: [
      'System & data-model design',
      'Cloud and DevOps blueprints',
      'Performance & scaling reviews',
      'Security and compliance reviews',
      'Hiring plan & team scaffolding',
    ],
  },
  {
    id: 'consultancy',
    title: 'Software Consultancy',
    description:
      'A consulting team of seasoned architects and developers with 15+ years of combined experience working with startups, SMBs, and enterprises — embedded with your team for a focused engagement.',
    features: [
      'Technical due diligence',
      'Code & architecture audits',
      'Migration strategy (Wordpress → Next.js, monolith → services)',
      'Fractional CTO engagements',
      'Vendor / contractor evaluations',
    ],
  },
]
