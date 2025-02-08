import Link from 'next/link'

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
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
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Publications', href: '/resources' },
      { name: 'FAQs', href: '/resources#faqs' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <span className="text-2xl font-bold text-white">Justice Law</span>
            </Link>
            <p className="text-base text-gray-400">
              Providing expert legal services with integrity and dedication since 1995.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Navigation
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-300">
                    123 Law Street<br />
                    New York, NY 10001
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="text-base text-gray-300 hover:text-white">
                      (123) 456-7890
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@justicelaw.com" className="text-base text-gray-300 hover:text-white">
                      info@justicelaw.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Justice Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 