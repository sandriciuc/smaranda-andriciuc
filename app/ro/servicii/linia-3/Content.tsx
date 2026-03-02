'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const otherLines = [
  {
    number: '01',
    title: 'Arhitect de Business & Strateg Financiar',
    href: '/ro/servicii/linia-1',
  },
  {
    number: '02',
    title: 'Operations & Systems Consultant | Business Architect',
    href: '/ro/servicii/linia-2',
  },
]

export default function LiniaTrei() {
  return (
    <div className="min-h-screen bg-cream-d">
      {/* Page header */}
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-12">
        <Link
          href="/ro"
          className="inline-flex items-center gap-2 font-mono text-[12px] text-brass hover:text-amber transition-colors mb-8"
        >
          ← Înapoi la pagina principală
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-widest text-brass mb-4">LINIA 03</p>
        <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,58px)] leading-[1.1] mb-4">
          Personal Leadership &<br /><em>Entrepreneurial Mindset Coaching</em>
        </h1>
        <p className="font-sans text-grey text-[16px] max-w-xl leading-relaxed">
          Pentru oameni care vor să conducă cu mai multă claritate.
        </p>
      </div>

      {/* Content */}
      <div className="bg-cream-l">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl mb-8">
            <p className="font-sans text-grey text-[14px] leading-[1.75] mb-4">
              Claritatea financiară și sistemele bine construite nu sunt de ajuns dacă
              persoana care le conduce nu operează din putere proprie.
            </p>
            <p className="font-sans text-grey text-[14px] leading-[1.75] mb-4">
              Lucrez cu antreprenori și lideri care vor să înțeleagă cum gândesc,
              cum decid și cum se raportează la risc, schimbare și creștere.
            </p>
            <p className="font-cormorant italic text-green text-[20px] leading-relaxed">
              „Nu îți promit că poți.
              Îți arăt că poți — cu cifrele tale și cu claritatea ta."
            </p>
          </div>

          <div className="bg-green-l rounded-2xl p-6 border border-green/20 mb-8 max-w-2xl">
            <p className="label-style text-brass text-[10px] mb-2">ÎN CURÂND</p>
            <p className="font-sans text-grey text-[13px] leading-[1.7]">
              Programele specifice pentru această linie de activitate sunt în pregătire.
              Contactează-mă pentru o conversație de explorare.
            </p>
          </div>

          <a href="/ro#contact">
            <motion.div
              className="inline-block bg-amber text-white font-sans font-medium px-8 py-3 rounded-full text-[14px] cursor-pointer"
              whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              Hai să discutăm
            </motion.div>
          </a>
        </div>
      </div>

      {/* Other lines navigation */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: '#B89A6E' }}>
          ALTE LINII DE ACTIVITATE
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLines.map((line) => (
            <Link key={line.href} href={line.href} className="group block">
              <div className="flex items-center justify-between gap-4 px-6 py-5 rounded-xl border border-green/10 bg-cream group-hover:bg-green-d transition-all duration-300">
                <div>
                  <span className="font-mono text-brass text-[10px]">{line.number}</span>
                  <p className="font-cormorant text-ink group-hover:text-cream text-[18px] leading-tight mt-1 transition-colors">
                    {line.title}
                  </p>
                </div>
                <span className="text-brass group-hover:text-amber transition-all group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
