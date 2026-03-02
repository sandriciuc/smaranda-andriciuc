import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import HeroRo from '@/components/ro/Hero'
import PentruCine from '@/components/ro/PentruCine'
import Servicii from '@/components/ro/Servicii'
import DespreMine from '@/components/ro/DespreMine'
import Proces from '@/components/ro/Proces'
import Testimoniale from '@/components/ro/Testimoniale'
import FAQ from '@/components/ro/FAQ'
import Contact from '@/components/ro/Contact'

export const metadata: Metadata = {
  title: 'Smaranda Andriciuc — Claritate Financiară & Coaching Tranziție | Piața Română',
  description:
    'Claritate financiară și structură de decizie pentru antreprenoare din România. Pe date, nu pe speranță. Coaching financiar, business plan, tranziție profesională.',
  alternates: {
    canonical: 'https://smarandaandriciuc.com/ro',
    languages: {
      'ro-RO': '/ro',
      'en-BE': '/en',
    },
  },
  openGraph: {
    title: 'Smaranda Andriciuc — Claritate financiară. Decizii reale.',
    description:
      'Nu motivație. Instrumente financiare concrete pentru femei care vor să știe, nu să spere.',
    locale: 'ro_RO',
  },
}

export default function RoPage() {
  return (
    <main>
      <Navbar lang="ro" />
      <HeroRo />
      <PentruCine />
      <Servicii />
      <DespreMine />
      <Proces />
      <Testimoniale />
      <FAQ />
      <Contact />
      <Footer lang="ro" />
      <WhatsAppButton />
    </main>
  )
}
