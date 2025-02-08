'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function DetailedProfiles() {
  const attorneys = [
    {
      name: 'John Smith',
      role: 'Managing Partner',
      imageUrl: '/images/team/john-smith.jpg',
      bio: 'Over 20 years of experience in corporate law and litigation. Specializes in complex business transactions and dispute resolution.',
      education: [
        'J.D., Harvard Law School',
        'B.A., Yale University',
      ],
      barAdmissions: [
        'New York State Bar',
        'U.S. District Court, Southern District of New York',
      ],
      practiceAreas: [
        'Corporate Law',
        'Business Litigation',
        'Mergers & Acquisitions',
      ],
      awards: [
        'Best Lawyers in America, 2020-2023',
        'Super Lawyers, New York Metro, 2018-2023',
      ],
    },
    // Add more attorneys...
  ]

  return (
    <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {attorneys.map((attorney, index) => (
            <motion.article
              key={attorney.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-full">
                <div className="relative w-full">
                  <Image
                    src={attorney.imageUrl}
                    alt={attorney.name}
                    width={800}
                    height={400}
                    className="aspect-[2/1] w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="max-w-xl mt-8">
                  <div className="group relative">
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
                      {attorney.name}
                    </h3>
                    <p className="mt-2 text-lg text-blue-600 dark:text-blue-400">
                      {attorney.role}
                    </p>
                  </div>
                  <div className="mt-5 text-base leading-6 text-gray-600 dark:text-gray-300">
                    <p>{attorney.bio}</p>
                  </div>
                  <div className="mt-8 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Education</h4>
                      <ul className="mt-2 space-y-1">
                        {attorney.education.map((degree) => (
                          <li key={degree} className="text-sm text-gray-600 dark:text-gray-300">
                            {degree}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Bar Admissions</h4>
                      <ul className="mt-2 space-y-1">
                        {attorney.barAdmissions.map((admission) => (
                          <li key={admission} className="text-sm text-gray-600 dark:text-gray-300">
                            {admission}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Practice Areas</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {attorney.practiceAreas.map((area) => (
                          <span
                            key={area}
                            className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs text-blue-600 dark:text-blue-400"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Awards & Recognition</h4>
                      <ul className="mt-2 space-y-1">
                        {attorney.awards.map((award) => (
                          <li key={award} className="text-sm text-gray-600 dark:text-gray-300">
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
} 