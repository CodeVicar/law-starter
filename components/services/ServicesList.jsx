import Link from 'next/link'

export function ServicesList() {
  const services = [
    {
      id: 'corporate',
      title: 'Corporate Law',
      description: 'Expert guidance for businesses of all sizes, from startups to corporations.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      features: [
        'Business Formation & Structure',
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Contract Drafting & Review',
      ],
    },
    {
      id: 'family',
      title: 'Family Law',
      description: 'Compassionate representation for all family legal matters. We handle divorce, custody, support, and other family-related legal issues with sensitivity and expertise.',
      features: [
        'Divorce Proceedings',
        'Child Custody & Support',
        'Spousal Support',
        'Family Mediation',
      ],
    },
    {
      id: 'real-estate',
      title: 'Real Estate Law',
      description: 'Comprehensive legal services for all real estate transactions. We handle residential and commercial property matters with attention to detail.',
      features: [
        'Property Transactions',
        'Commercial Leasing',
        'Title Reviews',
        'Real Estate Litigation',
      ],
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Legal Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We offer a wide range of legal services to meet your needs, delivered with expertise and dedication.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>

                <div className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 rounded-full bg-blue-50 dark:bg-blue-900/30 p-1">
                        <svg
                          className="h-4 w-4 text-blue-600 dark:text-blue-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                  >
                    Learn more
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 