'use client'
import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 dark:bg-black px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-200">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Get in touch with our legal team. We're here to help you with your legal needs and provide expert guidance.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 