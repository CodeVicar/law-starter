import { ResourcesHero } from '@/components/resources/ResourcesHero'
import { Publications } from '@/components/resources/Publications'
import { FAQ } from '@/components/shared/FAQ'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function Resources() {
  return (
    <main className="bg-white">
      <ResourcesHero />
      <Publications />
      <FAQ />
      <ContactCTA />
    </main>
  )
} 