import Link from 'next/link'

export function FeaturedServices() {
  const services = [
    {
      title: 'Corporate Law',
      description: 'Expert guidance for businesses of all sizes, from startups to corporations.',
      href: '/services#corporate',
    },
    {
      title: 'Family Law',
      description: 'Compassionate representation for divorce, custody, and family matters.',
      href: '/services#family',
    },
    {
      title: 'Real Estate Law',
      description: 'Comprehensive legal services for all real estate transactions.',
      href: '/services#real-estate',
    },
  ]

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Legal Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of legal services to meet your needs, delivered with expertise and dedication.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-white p-8 shadow-lg rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600 flex-grow">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-6 text-blue-600 hover:text-blue-500 inline-flex items-center text-sm font-semibold"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 