import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import HeroEn from '@/components/en/Hero'
import AboutMe from '@/components/en/AboutMe'
import Services from '@/components/en/Services'
import Testimonials from '@/components/en/Testimonials'
import ContactEn from '@/components/en/Contact'

export const metadata: Metadata = {
  title: 'Smaranda Andriciuc — Business Arhitect & Strateg Financiar · Coach | Belgium',
  description:
    'Business Arhitect & Strateg Financiar and Leadership Coach. Operational systems, financial clarity and entrepreneurial mindset. Based in Belgium.',
  alternates: {
    canonical: 'https://smarandaandriciuc.com/en',
    languages: {
      'ro-RO': '/ro',
      'en-BE': '/en',
    },
  },
  openGraph: {
    title: 'Smaranda Andriciuc — Clarity for people. Systems for business.',
    description:
      'Business Arhitect & Strateg Financiar and Coach. Three lines of work, one approach: clarity grounded in real data.',
    locale: 'en_BE',
  },
}

export default function EnPage() {
  return (
    <main>
      <Navbar lang="en" />
      <HeroEn />
      <AboutMe />
      <Services />
      <Testimonials />
      <ContactEn />
      <Footer lang="en" />
      <WhatsAppButton lang="en" />
    </main>
  )
}
