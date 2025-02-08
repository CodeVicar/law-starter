import Image from 'next/image'

export function TeamSection() {
  const team = [
    {
      name: 'John Smith',
      role: 'Managing Partner',
      imageUrl: '/images/team/john-smith.jpg',
      bio: 'Over 20 years of experience in corporate law and litigation.',
      specialties: ['Corporate Law', 'Business Litigation', 'Mergers & Acquisitions'],
      education: 'J.D., Harvard Law School',
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Partner',
      imageUrl: '/images/team/sarah-johnson.jpg',
      bio: 'Specializes in family law and estate planning.',
      specialties: ['Family Law', 'Estate Planning', 'Mediation'],
      education: 'J.D., Yale Law School',
    },
    {
      name: 'Michael Chen',
      role: 'Partner',
      imageUrl: '/images/team/michael-chen.jpg',
      bio: 'Expert in real estate law and commercial transactions.',
      specialties: ['Real Estate Law', 'Commercial Law', 'Property Rights'],
      education: 'J.D., Stanford Law School',
    },
  ]

  return (
    <div className="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 transition-colors duration-200">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Legal Experts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our team of experienced attorneys brings together decades of expertise across various practice areas.
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.name} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  width={400}
                  height={400}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{person.name}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{person.role}</p>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{person.bio}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{person.education}</p>
                  <h4 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">Specialties</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {person.specialties.map((specialty) => (
                      <li
                        key={specialty}
                        className="rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs text-blue-600 dark:text-blue-400 transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                      >
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 