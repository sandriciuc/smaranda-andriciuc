import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import HeroEn from '@/components/en/Hero'
import Services from '@/components/en/Services'
import AboutMe from '@/components/en/AboutMe'
import Process from '@/components/en/Process'
import ContactEn from '@/components/en/Contact'

export const metadata: Metadata = {
  title: 'Smaranda Andriciuc — Operations Consulting & Business Mentoring | Belgium',
  description:
    'Operational systems and business mentoring for companies and entrepreneurs in Belgium and Europe. Engineering background. Financial depth. Practical results.',
  alternates: {
    canonical: 'https://smarandaandriciuc.com/en',
    languages: {
      'ro-RO': '/ro',
      'en-BE': '/en',
    },
  },
  openGraph: {
    title: 'Smaranda Andriciuc — Systems for business. Clarity for people.',
    description:
      'Operational consulting and business mentoring. Engineering background. Financial depth. Practical results.',
    locale: 'en_BE',
  },
}

export default function EnPage() {
  return (
    <main>
      <Navbar lang="en" />
      <HeroEn />
      <Services />
      <AboutMe />
      <Process />
      <ContactEn />
      <Footer lang="en" />
      <WhatsAppButton />
    </main>
  )
}
