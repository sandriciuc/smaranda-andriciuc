'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const opsServices = [
  'Project follow-up systems — o singură imagine, fără ghiceli',
  'Design procese operaționale — mapare și reconstruire mai clară',
  'Instrumente de vizibilitate financiară — structuri de cost, prețuri, analiza marjei',
  'Fundații ERP & suport integrare',
  'Business plan — financiar & strategic',
]

const otherLines = [
  {
    number: '01',
    title: 'Arhitect de Business & Strateg Financiar',
    href: '/ro/servicii/linia-1',
  },
  {
    number: '03',
    title: 'Personal Leadership & Entrepreneurial Mindset Coaching',
    href: '/ro/servicii/linia-3',
  },
]

export default function LiniaDoua() {
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
        <p className="font-mono text-[11px] uppercase tracking-widest text-brass mb-4">LINIA 02</p>
        <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,58px)] leading-[1.1] mb-4">
          Operations & Systems<br /><em>Consultant | Business Architect</em>
        </h1>
        <p className="font-sans text-grey text-[16px] max-w-xl leading-relaxed">
          Pentru companii care vor să funcționeze mai clar.
        </p>
      </div>

      {/* Content */}
      <div className="bg-cream-l">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-4">
                Majoritatea businessurilor mici și medii nu au o problemă de informație.
                Au o problemă de <strong className="text-ink font-medium">vizibilitate</strong>.
              </p>
              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-6">
                Datele există — risipite în spreadsheet-uri, inbox-uri și capetele oamenilor.
                Construiesc sisteme operaționale care oferă leadership-ului vizibilitate reală
                asupra a ceea ce se întâmplă efectiv.
              </p>
              <ul className="space-y-2 mb-8">
                {opsServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green mt-0.5 flex-shrink-0 text-[13px]">✓</span>
                    <span className="font-sans text-[13px] text-grey leading-snug">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div className="bg-cream rounded-2xl p-6 border border-green/8 mb-6">
                <p className="label-style text-brass text-[10px] mb-3">BUSINESS MENTORING & CONSULTANȚĂ</p>
                <p className="font-cormorant text-ink text-[20px] leading-snug mb-3">
                  Pentru cei care vor un plan, nu o promisiune.
                </p>
                <p className="font-sans text-grey text-[13px] leading-[1.7]">
                  Analizez businessul sau ideea ta, construim un studiu de fezabilitate financiară
                  și mapăm împreună exact unde mergi. La final ai un plan clar, realist — adaptat situației tale.
                  Nu o promisiune. O direcție.
                </p>
              </div>
              <div>
                <p className="font-mono text-lgrey text-[13px] mb-4">
                  Preț personalizat · Contact pentru o conversație de diagnostic
                </p>
                <a href="/ro#contact">
                  <motion.div
                    className="w-full bg-amber text-white font-sans font-medium py-3 rounded-full text-[14px] text-center cursor-pointer"
                    whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Solicită o conversație
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
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
