export function ContactCTA() {
  return (
    <section className="bg-blue-700 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Contact us today for a free consultation. Our experienced team is here to help you with your legal needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="tel:+1234567890"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Call Now
            </a>
            <a href="#contact" className="text-sm font-semibold leading-6 text-white">
              Schedule Consultation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 