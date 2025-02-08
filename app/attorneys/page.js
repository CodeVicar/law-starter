import { AttorneysHero } from '@/components/attorneys/AttorneysHero'
import { DetailedProfiles } from '@/components/attorneys/DetailedProfiles'

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