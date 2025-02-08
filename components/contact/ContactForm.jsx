'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const practiceAreas = [
    'Corporate Law',
    'Family Law',
    'Real Estate Law',
    'Civil Litigation',
    'Criminal Defense',
    'Estate Planning',
    'Other',
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto lg:text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Get in Touch
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Schedule Your Consultation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9-+().\s]*$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Practice Area
                </label>
                <div className="mt-2">
                  <select
                    id="practiceArea"
                    {...register('practiceArea', { required: 'Please select a practice area' })}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a practice area</option>
                    {practiceAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {errors.practiceArea && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.practiceArea.message}</p>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'Please enter your message' })}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>
          </form>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 rounded-md bg-green-50 dark:bg-green-900 p-4"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Thank you! We'll be in touch soon.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
} 