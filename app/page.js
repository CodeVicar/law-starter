import { HeroSection } from '@/components/home/HeroSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { FeaturedServices } from '@/components/home/FeaturedServices'
import { Testimonials } from '@/components/shared/Testimonials'
import { CaseStudies } from '@/components/success/CaseStudies'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <HeroSection />
      <WhyChooseUs />
      <FeaturedServices />
      <Testimonials />
      <CaseStudies />
      <ContactCTA />
    </main>
  )
}
