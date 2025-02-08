import { BlogList } from '@/components/blog/BlogList'
import { ContactCTA } from '@/components/shared/ContactCTA'

export default function Blog() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <BlogHero />
      <BlogList />
      <ContactCTA />
    </main>
  )
} 