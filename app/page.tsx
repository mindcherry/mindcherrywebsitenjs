import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import Card from '@/components/Card'
import Button from '@/components/Button'
import BlogCard from '@/components/BlogCard'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import { services } from '@/lib/data/services'
import { caseStudies } from '@/lib/data/caseStudies'
import { testimonials } from '@/lib/data/testimonials'
import { getLatestPosts } from '@/sanity/queries'

export default async function Home() {
  const latestBlogPosts = await getLatestPosts(3)

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Build Your Digital Future"
        subtitle="Welcome to MindCherry"
        description="Cutting-edge software solutions and digital innovation for ambitious businesses. From concept to deployment, we deliver excellence."
        cta1Text="Start Your Project"
        cta1Link="/contact"
        cta2Text="Explore Our Work"
        cta2Link="/portfolio"
      />

      {/* Services Section */}
      <SectionWrapper>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-primary dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            We offer comprehensive digital solutions tailored to your business needs. From web development to AI-powered systems, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.slice(0, 6).map((service) => (
            <Card key={service.id} className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark-primary dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              {service.features && (
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 w-full">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="text-primary flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline">
              View All Services
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="bg-light-bg dark:bg-gray-900 rounded-2xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-primary dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Explore our latest case studies and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 w-full">
          {caseStudies.slice(0, 3).map((study) => (
            <Card key={study.id} className="overflow-hidden">
              <div className="h-48 bg-gradient-brand flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {study.logo?.charAt(0) || study.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark-primary dark:text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {study.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/portfolio">
            <Button size="lg" variant="primary">
              View All Projects
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-primary dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Trusted by leading companies worldwide. Here's what they have to say about working with us.
          </p>
        </div>

        <Testimonials testimonials={testimonials.slice(0, 3)} maxCols={3} />
      </SectionWrapper>

      {/* Blog Section */}
      <SectionWrapper className="bg-light-bg dark:bg-gray-900 rounded-2xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-primary dark:text-white mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Stay updated with the latest trends, tips, and insights from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 w-full">
          {latestBlogPosts.map((post) => (
            <BlogCard key={post._id} {...post} />
          ))}
        </div>

        {latestBlogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Blog posts coming soon. Check back later!
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              View All Articles
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's work together to bring your ideas to life. Contact our team for a free consultation and project estimate."
        buttonText="Schedule a Call"
        buttonLink="/contact"
        variant="primary"
      />

      <Footer />
    </>
  )
}
