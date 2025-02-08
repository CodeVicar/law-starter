import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { FAQ } from '@/components/shared/FAQ'

export default function Contact() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
    </main>
  )
} 