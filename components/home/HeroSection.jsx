import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg" // You'll need to add this image
          alt="Law office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Justice & Excellence in Legal Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Dedicated to protecting your rights and interests with decades of legal expertise and a commitment to excellence.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/services"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Our Services
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 