'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function BlogList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const posts = [
    {
      title: 'Understanding Corporate Law Changes in 2024',
      excerpt: 'Key updates to corporate law that businesses need to know...',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'Corporate Law',
      slug: 'corporate-law-changes-2024',
      readTime: '5 min read',
    },
    {
      title: 'Estate Planning Essentials',
      excerpt: 'A comprehensive guide to protecting your assets and legacy...',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Estate Planning',
      slug: 'estate-planning-essentials',
      readTime: '7 min read',
    },
    // Add more blog posts...
  ]

  const categories = ['all', 'Corporate Law', 'Family Law', 'Estate Planning', 'Real Estate Law']

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="space-y-16">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 