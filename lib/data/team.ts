import { TeamMember } from '../types'

/**
 * Studio of seven, real positioning. The previous site only credits "Adeel"
 * (Tech PM) and small team — placeholder names below are kept anonymous-ish
 * (single-letter surname) until headshots / bios are ready. Swap in real
 * names + Sanity-managed bios when content is finalised.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'adeel',
    name: 'Adeel',
    role: 'Founding engineer · Technical PM',
    image: '',
    bio: 'Spends most days in code review and on-call. 12+ years across HIPAA-compliant healthtech, fintech, and marketplaces. Holds the architectural pen on every engagement.',
  },
  {
    id: 'systems',
    name: 'Systems & DevOps',
    role: 'Infrastructure · Reliability',
    image: '',
    bio: 'Runs the deploys, the dashboards, and the on-call rotation. The reason your 3 a.m. alerts go to us before they reach you.',
  },
  {
    id: 'design',
    name: 'Design',
    role: 'Product · Interface',
    image: '',
    bio: 'Translates founder intent into wireframes, then into shipped product. Specialist in finding the smallest interface that still tells the truth.',
  },
  {
    id: 'frontend',
    name: 'Frontend',
    role: 'React · Next.js',
    image: '',
    bio: 'Composability obsessive. Reads the React RFCs so you don\'t have to.',
  },
  {
    id: 'backend',
    name: 'Backend',
    role: 'Rails · NestJS · Postgres',
    image: '',
    bio: 'Boring databases, boring schemas, boring migrations. Keeps the data correct so the rest of us can be interesting.',
  },
  {
    id: 'mobile',
    name: 'Mobile',
    role: 'React Native · iOS · Android',
    image: '',
    bio: 'Ships parity across iOS and Android, then makes the iOS one feel a bit nicer because — be honest — it should.',
  },
  {
    id: 'qa',
    name: 'QA & Release',
    role: 'Test · Release · Customer',
    image: '',
    bio: 'Not a QA in the classical sense — closer to "the person who reads every changelog and pings the user before bugs do."',
  },
]
