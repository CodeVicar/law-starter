import { Publications } from '@/components/resources/Publications'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function Resources() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <ResourcesHero />
      <Publications />
      <FAQ />
      <ContactCTA />
    </main>
  )
} 