import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import LineOne from './Content'

export const metadata: Metadata = {
  title: 'Business Arhitect & Strateg Financiar | Smaranda Andriciuc',
  description:
    'Financial programs for entrepreneurs: Quarterly Workshop, Group Program, Business Plan 1 on 1, Premium Package.',
}

export default function LineOnePage() {
  return (
    <main>
      <Navbar lang="en" />
      <LineOne />
      <Footer lang="en" />
    </main>
  )
}
