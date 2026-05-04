'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import Card from '@/components/Card'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { caseStudies } from '@/lib/data/caseStudies'

export default function Portfolio() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  const industries = Array.from(
    new Set(caseStudies.map((study) => study.industry))
  )

  const filteredStudies = useMemo(() => {
    if (!selectedIndustry) return caseStudies
    return caseStudies.filter((study) => study.industry === selectedIndustry)
  }, [selectedIndustry])

  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Our Portfolio"
        subtitle="Case Studies"
        description="Explore our recent projects and see how we've helped businesses transform through innovative digital solutions."
        showCTA={false}
      />

      {/* Portfolio Section */}
      <SectionWrapper>
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Button
              variant={selectedIndustry === null ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedIndustry(null)}
            >
              All Projects
            </Button>
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden hover">
              <div className="h-64 bg-gradient-to-br from-primary via-primary-600 to-primary-700 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/10" />
                <div className="text-6xl font-bold text-white opacity-20 z-0">
                  {study.logo?.charAt(0) || study.title.charAt(0)}
                </div>
              </div>

              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                  {study.industry}
                </div>

                <h3 className="text-2xl font-bold text-dark-primary dark:text-white mb-3">
                  {study.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {study.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-primary dark:text-white mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-dark-primary dark:text-white mb-3">
                    Key Results:
                  </h4>
                  <ul className="space-y-2">
                    {study.results.slice(0, 3).map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary font-bold flex-shrink-0 mt-1">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found for the selected industry.
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-primary text-white rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '1000+', label: 'Happy Clients' },
            { number: '10+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Rate' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Inspire Me With Your Next Project"
        description="Have an amazing project in mind? Let's collaborate and create something exceptional together."
        buttonText="Start Your Project"
        buttonLink="/contact"
        variant="primary"
      />

      <Footer />
    </>
  )
}
