import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Smaranda Andriciuc — Claritate Financiară & Coaching Tranziție',
  description:
    'Aduc claritate financiară și structură de decizie pentru femei inteligente care construiesc un business. Pe date, nu pe speranță.',
  keywords: [
    'coaching financiar',
    'tranziție antreprenoriat',
    'claritate financiară',
    'business plan femei',
    'coaching Romania',
    'operational consulting Belgium',
    'business mentoring',
  ],
  openGraph: {
    title: 'Smaranda Andriciuc — Claritate financiară. Decizii reale.',
    description:
      'Nu motivație. Instrumente financiare concrete pentru femei care vor să știe, nu să spere.',
    locale: 'ro_RO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
