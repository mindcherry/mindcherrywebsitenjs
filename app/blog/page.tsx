'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import BlogCard from '@/components/BlogCard'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import { generateMetadata } from '@/lib/seo'
import { BlogPost } from '@/lib/types'
import { useEffect } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        const data = await response.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts

    const lowerSearch = searchTerm.toLowerCase()
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerSearch) ||
        post.excerpt.toLowerCase().includes(lowerSearch)
    )
  }, [posts, searchTerm])

  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Our Blog"
        subtitle="Resources & Insights"
        description="Stay updated with the latest trends, tips, and insights from our team of experts."
        showCTA={false}
      />

      {/* Blog Section */}
      <SectionWrapper>
        {/* Search */}
        <div className="mb-12 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-dark-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              {searchTerm
                ? 'No articles found matching your search.'
                : 'No blog posts available yet. Check back soon!'}
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Subscribe to Our Newsletter"
        description="Get the latest insights and updates delivered to your inbox. No spam, just valuable content."
        buttonText="Subscribe"
        buttonLink="/contact?type=newsletter"
        variant="primary"
      />

      <Footer />
    </>
  )
}
