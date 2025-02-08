import { AttorneysHero } from '@/components/attorneys/AttorneysHero'
import { DetailedProfiles } from '@/components/attorneys/DetailedProfiles'
import { Expertise } from '@/components/shared/Expertise'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function Attorneys() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <AttorneysHero />
      <DetailedProfiles />
      <Expertise />
      <ContactCTA />
    </main>
  )
} 