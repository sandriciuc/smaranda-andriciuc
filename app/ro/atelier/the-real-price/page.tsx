import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import AtelierContent from './Content'

export const metadata: Metadata = {
  title: 'Calculează-ți Prețul Corect — Atelier cu Smaranda Andriciuc',
  description: 'Atelier online de 2 ore. Afli prețul corect al serviciilor tale — calculat, nu ghicit. Maximum 8 participante.',
}

export default function AtelierPage() {
  return (
    <>
      <Navbar lang="ro" />
      <main className="pt-[72px]">
        <AtelierContent />
      </main>
      <Footer lang="ro" />
    </>
  )
}
