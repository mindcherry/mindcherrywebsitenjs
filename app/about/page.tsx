import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import Card from '@/components/Card'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import { teamMembers } from '@/lib/data/team'
import { testimonials } from '@/lib/data/testimonials'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata(
  'About MindCherry - Our Story & Team',
  'Meet the team behind MindCherry. We are passionate about creating innovative digital solutions and transforming businesses through technology.',
  undefined,
  '/about'
)

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="About MindCherry"
        subtitle="Our Story"
        description="We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology and creative solutions."
        showCTA={false}
      />

      {/* Our Story */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary dark:text-white mb-6">
            Our Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg leading-relaxed">
            Founded in 2018, MindCherry started with a simple vision: to create exceptional digital solutions that help businesses thrive in the digital age. What began as a small team of developers has grown into a full-service digital agency with expertise across web development, mobile apps, UI/UX design, and cloud infrastructure.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg leading-relaxed">
            Over the past years, we've had the privilege of working with startups, scale-ups, and enterprises across various industries. Each project has taught us something new, and each client has helped us refine our craft.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Today, we're proud to be recognized as a leading digital partner for innovative companies looking to build world-class products.
          </p>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper className="bg-light-bg dark:bg-gray-900 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary dark:text-white mb-4">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Excellence',
              description: 'We pursue excellence in everything we do, from code quality to design aesthetics. No compromises.',
            },
            {
              icon: '💡',
              title: 'Innovation',
              description: 'Staying ahead of the curve with latest technologies and creative solutions to complex problems.',
            },
            {
              icon: '🤝',
              title: 'Partnership',
              description: 'We view our clients as partners. Your success is our success, and we invest in your growth.',
            },
            {
              icon: '🚀',
              title: 'Agility',
              description: 'We adapt quickly to changing requirements and market dynamics without losing quality.',
            },
            {
              icon: '🌟',
              title: 'Integrity',
              description: 'Transparency, honesty, and ethical practices guide everything we do.',
            },
            {
              icon: '👥',
              title: 'Team Work',
              description: 'We believe in the power of collaboration and building strong, diverse teams.',
            },
          ].map((value, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-dark-primary dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper id="team">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Talented individuals united by a passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center">
                <div className="text-6xl font-bold text-white opacity-20">
                  {member.name.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark-primary dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-light-bg dark:bg-gray-900 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary dark:text-white mb-4">
            Client Testimonials
          </h2>
        </div>

        <Testimonials testimonials={testimonials.slice(0, 3)} maxCols={3} />
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Let's Work Together"
        description="Ready to turn your ideas into reality? Get in touch with our team to discuss your project."
        buttonText="Start a Project"
        buttonLink="/contact"
        variant="primary"
      />

      <Footer />
    </>
  )
}
