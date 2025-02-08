import { BlogHero } from '@/components/blog/BlogHero'
import { BlogList } from '@/components/blog/BlogList'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function Blog() {
  return (
    <main className="bg-white">
      <BlogHero />
      <BlogList />
      <ContactCTA />
    </main>
  )
} 