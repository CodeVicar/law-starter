'use client'
import { motion } from 'framer-motion'

export function ExpertiseHighlight() {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Successful Cases', value: '1000+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Legal Professionals', value: '20+' },
  ]

  return (
    <section className="bg-blue-600 dark:bg-blue-700 py-16 sm:py-24 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted Legal Excellence
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Our track record speaks for itself. We've helped thousands of clients achieve successful outcomes in their legal matters.
          </p>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-y-3">
              <dt className="text-sm leading-6 text-blue-100">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
} 