import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Privacy Policy | Smaranda Andriciuc',
  description:
    'Privacy Policy of Andriciuc, Smaranda-Maria — compliant with GDPR (EU Regulation 2016/679) and Belgian law (Law of 30 July 2018).',
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar lang="en" />
      <Content />
      <Footer lang="en" />
      <WhatsAppButton lang="en" />
    </main>
  )
}
