import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import LiniaDoua from './Content'

export const metadata: Metadata = {
  title: 'Operations & Systems Consultant | Smaranda Andriciuc',
  description:
    'Sisteme operaționale, vizibilitate financiară și structuri clare pentru companii care vor să funcționeze cu mai multă precizie.',
}

export default function LiniaDuaPage() {
  return (
    <main>
      <Navbar lang="ro" />
      <LiniaDoua />
      <Footer lang="ro" />
    </main>
  )
}
