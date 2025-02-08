'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Practice Areas', href: '/practice-areas' },
      { name: 'Attorneys', href: '/attorneys' },
      { name: 'Blog', href: '/blog' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' },
    ],
    practiceAreas: [
      { name: 'Corporate Law', href: '/practice-areas#corporate' },
      { name: 'Family Law', href: '/practice-areas#family' },
      { name: 'Real Estate', href: '/practice-areas#real-estate' },
      { name: 'Estate Planning', href: '/practice-areas#estate' },
      { name: 'Civil Litigation', href: '/practice-areas#litigation' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
    ],
  }

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3"
        >
          {/* Brand and Contact */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Justice Law
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Expert legal services with a commitment to excellence and client success.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mt-3 space-y-3 text-sm text-gray-300">
                <li>123 Law Street, Suite 100</li>
                <li>New York, NY 10001</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@justicelaw.com</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Practice Areas</h3>
            <ul className="mt-6 space-y-4">
              {navigation.practiceAreas.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Links */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Justice Law Firm. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 