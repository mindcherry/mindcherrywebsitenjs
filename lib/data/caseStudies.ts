import { CaseStudy } from '../types'

export const caseStudies: CaseStudy[] = [
  {
    id: 'arcadia',
    title: 'Arcadia',
    description:
      'An online real-estate classifieds portal that gives both buyers and sellers — individuals and agencies — a clean, fast way to manage and inquire about listings. Built around a property graph that scales to millions of listings without breaking search.',
    shortDescription: 'Real-estate classifieds platform for individuals and agencies',
    image: '/images/work/arcadia.jpg',
    logo: 'Arcadia',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Elasticsearch', 'AWS'],
    industry: 'PropTech',
    results: [
      'Faceted search across 500k+ active listings',
      'Sub-second p95 search latency',
      'Native agency dashboards for inquiry management',
      'Built-in lead routing & saved-search alerts',
    ],
  },
  {
    id: 'mindwell',
    title: 'Mindwell',
    description:
      'A telehealth platform that re-imagines how therapists and patients interact, schedule, and follow up. The product replaces three legacy tools — calendar, EHR, and chat — with a single intuitive surface, while remaining HIPAA-compliant from day one.',
    shortDescription: 'HIPAA-compliant telehealth platform for therapists and patients',
    image: '/images/work/mindwell.jpg',
    logo: 'Mindwell',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'WebRTC', 'Twilio'],
    industry: 'HealthTech',
    results: [
      'HIPAA-compliant audio + video sessions',
      'Cut booking-to-session time from 3 days to 4 hours',
      'Therapist availability sync with Google & iCloud',
      'Encrypted messaging with audit trails',
    ],
  },
]
