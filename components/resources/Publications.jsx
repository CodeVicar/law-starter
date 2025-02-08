'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Publications() {
  const resources = [
    {
      title: "Legal Guide for Startups",
      type: "Guide",
      description: "Comprehensive guide covering legal essentials for new businesses, from formation to compliance.",
      downloadUrl: "/resources/startup-guide.pdf",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006.944 2C5.85 2 4.8 2.276 3.857 2.776C3.308 3.044 2.83 3.385 2.427 3.786c-.716.716-1.356 1.614-1.787 2.654A8.967 8.967 0 000 11.042C0 15.465 3.577 19.042 8 19.042c2.756 0 5.225-1.393 6.674-3.515l.673.673A.5.5 0 0016 15.543V11.042H11.5a.5.5 0 00-.354.854l.674.673A6.967 6.967 0 018 17.042a7.967 7.967 0 01-8-8c0-2.756 1.393-5.225 3.515-6.674l-.673-.673A.5.5 0 003.7 1.042h4.5a.5.5 0 00.354-.854l-.674-.673A6.967 6.967 0 0112 6.042z" />
        </svg>
      ),
    },
    {
      title: "Family Law Handbook",
      type: "Guide",
      description: "Essential information about family law proceedings, custody arrangements, and dispute resolution.",
      downloadUrl: "/resources/family-law-handbook.pdf",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      title: "Real Estate Transaction Checklist",
      type: "Checklist",
      description: "Step-by-step guide for navigating real estate transactions successfully.",
      downloadUrl: "/resources/real-estate-checklist.pdf",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Legal Resources & Publications
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access our comprehensive collection of legal guides, handbooks, and resources designed to help you understand your legal rights and obligations.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 h-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-blue-600">{resource.type}</p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {resource.description}
                </p>
                <Link
                  href={resource.downloadUrl}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
                >
                  Download PDF
                  <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 