import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import LiniaUna from './Content'

export const metadata: Metadata = {
  title: 'Business & Financial Strategy Consultancy & Mentoring | Smaranda Andriciuc',
  description:
    'Programe financiare pentru antreprenoare: Workshop trimestrial, Grup 6 luni, Business Plan 1 la 1, Pachet Premium.',
}

export default function LiniaUnaPage() {
  return (
    <main>
      <Navbar lang="ro" />
      <LiniaUna />
      <Footer lang="ro" />
    </main>
  )
}
