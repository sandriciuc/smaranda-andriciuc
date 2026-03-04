import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import TheClarityProcessEn from './Content'

export const metadata: Metadata = {
  title: 'The Clarity Process | Smaranda Andriciuc',
  description:
    'A structured 4-session programme for entrepreneurs and leaders who want to act from clarity, not from pressure.',
}

export default function TheClarityProcessPage() {
  return (
    <main>
      <Navbar lang="en" />
      <TheClarityProcessEn />
      <Footer lang="en" />
    </main>
  )
}
