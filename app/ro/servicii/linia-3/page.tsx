import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import LiniaTrei from './Content'

export const metadata: Metadata = {
  title: 'Leadership Coaching for Entrepreneurs & Leaders | Smaranda Andriciuc',
  description:
    'Coaching pentru antreprenori și lideri care vor să înțeleagă cum gândesc, cum decid și cum se raportează la risc și creștere.',
}

export default function LiniaTreiPage() {
  return (
    <main>
      <Navbar lang="ro" />
      <LiniaTrei />
      <Footer lang="ro" />
    </main>
  )
}
