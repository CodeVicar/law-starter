'use client'
import { motion } from 'framer-motion'

export function ContactInfo() {
  const contactMethods = [
    {
      name: 'Office Location',
      description: '123 Law Street, Suite 100, New York, NY 10001',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      name: 'Phone',
      description: '(123) 456-7890',
      href: 'tel:+11234567890',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      description: 'info@justicelaw.com',
      href: 'mailto:info@justicelaw.com',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      name: 'Office Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Have questions? We're here to help. Contact us through any of the following methods.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                <span className="text-white">{method.icon}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                {method.name}
              </h3>
              {method.href ? (
                <a
                  href={method.href}
                  className="mt-2 block text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {method.description}
                </a>
              ) : (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {method.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 