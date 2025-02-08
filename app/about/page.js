import { AboutHero } from '@/components/about/AboutHero'
import { TeamSection } from '@/components/about/TeamSection'
import { Values } from '@/components/about/Values'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function About() {
  return (
    <main>
      <AboutHero />
      <Values />
      <TeamSection />
      <ContactCTA />
    </main>
  )
} 