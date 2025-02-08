import { PracticeAreasHero } from '@/components/practice-areas/PracticeAreasHero'

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