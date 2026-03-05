import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import HeroRo from '@/components/ro/Hero'
import DespreMine from '@/components/ro/DespreMine'
import Servicii from '@/components/ro/Servicii'
import Testimoniale from '@/components/ro/Testimoniale'
import Contact from '@/components/ro/Contact'

export const metadata: Metadata = {
  title: 'Smaranda Andriciuc — Business Arhitect & Strateg Financiar · Coach',
  description:
    'Business Arhitect & Strateg Financiar și Leadership Coach. Claritate financiară, sisteme operaționale și leadership autentic. Pe date, nu pe speranță.',
  alternates: {
    canonical: 'https://smarandaandriciuc.com/ro',
    languages: {
      'ro-RO': '/ro',
      'en-BE': '/en',
    },
  },
  openGraph: {
    title: 'Smaranda Andriciuc — Claritate pentru oameni. Structură pentru business-uri.',
    description:
      'Business Arhitect & Strateg Financiar și Coach. Trei linii de activitate, o singură abordare: claritate pe date reale.',
    locale: 'ro_RO',
  },
}

export default function RoPage() {
  return (
    <main>
      <Navbar lang="ro" />
      <HeroRo />
      <DespreMine />
      <Servicii />
      <Testimoniale />
      <Contact />
      <Footer lang="ro" />
      <WhatsAppButton lang="ro" />
    </main>
  )
}
