import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
  other: {
    'facebook-domain-verification': 'mkuetyypgvlqv8qtbitu56z5gi2gqq',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html lang="ro" className={`${cormorant.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-STXYCN5NB4"
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-STXYCN5NB4');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1594215188347899');
          fbq('track', 'PageView');
        `}
      </Script>

      <body>{children}</body>
    </html>
  )
}
