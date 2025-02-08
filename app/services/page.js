import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesList } from '@/components/services/ServicesList'
import { ProcessSection } from '@/components/services/ProcessSection'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ContactCTA />
    </main>
  )
} 