import { PracticeAreasHero } from '@/components/practice-areas/PracticeAreasHero'
import { DetailedPracticeAreas } from '@/components/practice-areas/DetailedPracticeAreas'
import { ExpertiseHighlight } from '@/components/practice-areas/ExpertiseHighlight'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function PracticeAreas() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <PracticeAreasHero />
      <DetailedPracticeAreas />
      <ExpertiseHighlight />
      <ContactCTA />
    </main>
  )
} 