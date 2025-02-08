'use client'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={ref} className="relative isolate overflow-hidden min-h-[80vh] flex items-center">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/images/about-hero.jpg"
          alt="Law office interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Our Firm
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              With over 25 years of excellence in legal practice, we've built our reputation on trust, expertise, and unwavering commitment to our clients.
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row">
              <div className="flex items-center gap-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/80 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">Established 1995</h2>
                  <p className="mt-1 text-sm text-gray-300">25+ Years of Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/80 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">1000+ Clients</h2>
                  <p className="mt-1 text-sm text-gray-300">Trusted by Many</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 