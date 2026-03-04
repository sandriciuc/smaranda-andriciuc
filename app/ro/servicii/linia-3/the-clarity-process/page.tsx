import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import TheClarityProcessRo from './Content'

export const metadata: Metadata = {
  title: 'The Clarity Process | Smaranda Andriciuc',
  description:
    'Un program structurat de 4 sesiuni pentru antreprenori și lideri care vor să acționeze din claritate, nu din presiune.',
}

export default function TheClarityProcessPage() {
  return (
    <main>
      <Navbar lang="ro" />
      <TheClarityProcessRo />
      <Footer lang="ro" />
    </main>
  )
}
