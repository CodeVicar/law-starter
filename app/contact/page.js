import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { FAQ } from '@/components/shared/FAQ'
import { ContactCTA } from '@/components/shared/ContactCTA'
import { Map } from '@/components/contact/Map'

export default function Contact() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <ContactCTA />
      <Map />
    </main>
  )
} 