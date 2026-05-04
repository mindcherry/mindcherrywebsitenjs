import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import Card from '@/components/Card'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { services } from '@/lib/data/services'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata(
  'Services - MindCherry Digital Solutions',
  'Explore our comprehensive range of services including web development, mobile apps, UI/UX design, cloud solutions, and AI-powered systems.',
  undefined,
  '/services'
)

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive digital solutions tailored to your business needs. From concept to deployment, we deliver excellence."
        showCTA={false}
      />

      {/* Services Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="p-8 hover">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-dark-primary dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              {service.features && (
                <>
                  <h4 className="font-semibold text-dark-primary dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary font-bold mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="bg-light-bg dark:bg-gray-900 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We follow a proven methodology to ensure project success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Discovery',
              description: 'We understand your business goals, target audience, and project requirements.',
            },
            {
              step: '02',
              title: 'Planning',
              description: 'We create a detailed project roadmap with timelines, milestones, and deliverables.',
            },
            {
              step: '03',
              title: 'Development',
              description: 'Our team builds your solution using best practices and cutting-edge technologies.',
            },
            {
              step: '04',
              title: 'Launch',
              description: 'We deploy your project, provide support, and ensure everything runs smoothly.',
            },
          ].map((process, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
              <h3 className="text-lg font-bold text-dark-primary dark:text-white mb-3">
                {process.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {process.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary dark:text-white mb-8 text-center">
            Why Choose MindCherry?
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Expert Team',
                description: 'Our team consists of certified professionals with 10+ years of combined experience in software development and design.',
              },
              {
                title: 'Quality Assurance',
                description: 'We maintain the highest quality standards with comprehensive testing and code review processes.',
              },
              {
                title: 'Transparent Communication',
                description: 'Regular updates, clear documentation, and open communication throughout the project lifecycle.',
              },
              {
                title: 'Post-Launch Support',
                description: 'We provide ongoing support and maintenance to ensure your solution continues to deliver value.',
              },
              {
                title: 'Competitive Pricing',
                description: 'We offer flexible pricing models and transparent quotes with no hidden costs.',
              },
              {
                title: 'Proven Track Record',
                description: '50+ successful projects delivered for clients across various industries and sectors.',
              },
            ].map((reason, i) => (
              <Card key={i} className="p-6 md:p-8 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <span className="text-primary font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-primary dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and how we can help you achieve your goals."
        buttonText="Get a Quote"
        buttonLink="/contact"
        variant="primary"
      />

      <Footer />
    </>
  )
}
