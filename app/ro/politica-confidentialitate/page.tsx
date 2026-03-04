import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate | Smaranda Andriciuc',
  description:
    'Politica de confidențialitate a SC Eurohale Proiect SRL — conformă cu GDPR (Regulamentul UE 2016/679) și legislația română în vigoare.',
  robots: { index: false },
}

export default function PoliticaConfidentialitatePage() {
  return (
    <main>
      <Navbar lang="ro" />
      <Content />
      <Footer lang="ro" />
      <WhatsAppButton lang="ro" />
    </main>
  )
}
