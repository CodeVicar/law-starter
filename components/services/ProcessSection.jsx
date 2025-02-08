export function ProcessSection() {
  const steps = [
    {
      name: 'Initial Consultation',
      description: 'We begin with a thorough consultation to understand your legal needs and objectives.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
    },
    {
      name: 'Case Evaluation',
      description: 'Our experts analyze your case and develop a comprehensive legal strategy.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      name: 'Legal Representation',
      description: 'We provide dedicated representation throughout your legal proceedings.',
    },
    {
      name: 'Resolution',
      description: 'We work diligently to achieve the best possible outcome for your case.',
    },
  ]

  return (
    <div className="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 transition-colors duration-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How We Work With You
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our structured approach ensures that every case receives the attention and expertise it deserves.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.name}
                className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500 text-white">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 pl-16">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 