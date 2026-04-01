import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ClarityCircleContent from './Content'

export const metadata: Metadata = {
  title: 'The Clarity Circle · Smaranda Andriciuc',
  description: 'Un spațiu lunar gratuit pentru femei care construiesc serios. Un grup mic, o situație reală, o perspectivă nouă.',
}

export default function ClarityCirclePage() {
  return (
    <>
      <Navbar lang="ro" />
      <main className="pt-[72px]">
        <ClarityCircleContent />
      </main>
      <Footer lang="ro" />
    </>
  )
}
