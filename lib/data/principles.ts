export interface Principle {
  id: string
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    id: 'scalability',
    title: 'Ease of scalability',
    body: 'Architectures that grow without rewrites — picking the boring, well-understood primitives over the trendy ones.',
  },
  {
    id: 'instant-impact',
    title: 'Instant impact',
    body: 'Pull-request-on-day-two, not week-three. We onboard fast and ship something usable inside the first sprint.',
  },
  {
    id: 'expertise',
    title: 'Expertise & experience',
    body: '15+ years of combined senior engineering across early-stage startups, SMBs, and enterprises.',
  },
  {
    id: 'time-zone',
    title: 'Time-zone aligned',
    body: 'Pakistan-based, working comfortable mornings with EU clients and afternoons with US clients. Real overlap, not async-only.',
  },
  {
    id: 'flexibility',
    title: 'Full flexibility',
    body: 'Fixed-scope when you need predictability, time-and-materials when you need exploration. Switch freely.',
  },
  {
    id: 'support',
    title: 'Proactive support',
    body: 'We watch the on-call dashboards we built. You hear about issues from us before you hear about them from your users.',
  },
]

export const techStack = [
  { group: 'Languages', items: ['TypeScript', 'Node.js', 'Ruby', 'Python', 'PHP'] },
  { group: 'Frameworks', items: ['Next.js', 'NestJS', 'Ruby on Rails', 'Django', 'Laravel'] },
  { group: 'Frontend', items: ['React', 'Tailwind', 'Mantine', 'Chakra UI'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
] as const
