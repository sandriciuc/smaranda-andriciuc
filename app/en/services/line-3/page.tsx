import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import LineThree from './Content'

export const metadata: Metadata = {
  title: 'Personal Leadership & Entrepreneurial Mindset Coaching | Smaranda Andriciuc',
  description:
    'Coaching for entrepreneurs and leaders who want to understand how they think, decide and relate to risk, change and growth.',
}

export default function LineThreePage() {
  return (
    <main>
      <Navbar lang="en" />
      <LineThree />
      <Footer lang="en" />
    </main>
  )
}
