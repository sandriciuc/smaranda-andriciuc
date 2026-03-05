import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import LineTwo from './Content'

export const metadata: Metadata = {
  title: 'Operations & Systems Consultancy | Business Architecture | Smaranda Andriciuc',
  description:
    'Operational systems, financial visibility tools and clear structures for companies that want to operate with more precision.',
}

export default function LineTwoPage() {
  return (
    <main>
      <Navbar lang="en" />
      <LineTwo />
      <Footer lang="en" />
    </main>
  )
}
