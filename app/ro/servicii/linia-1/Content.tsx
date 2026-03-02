'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const programs = [
  {
    label: 'INTRARE · TRIMESTRIAL',
    badge: null,
    title: 'Un subiect. Două ore. Un instrument.',
    description:
      '2 ore de deep-dive pe un singur subiect: prețuri, cash flow sau planificarea tranziției. Pleci cu un instrument financiar concret pe care îl poți folosi imediat — nu teorie, nu inspirație. Un instrument aplicat pe situația ta chiar în sesiune.',
    includes: [
      'Un instrument financiar specific, aplicat pe situația ta',
      'Exercițiu practic în timpul sesiunii',
      'Mini-template de luat acasă',
    ],
    price: '50€',
    priceLabel: 'Prima investiție · 2 ore',
    cta: 'Vreau la workshop',
    quote: null,
  },
  {
    label: 'IMPLEMENTARE · 6 LUNI',
    badge: null,
    title: 'Nu motivație — structură.',
    description:
      'O sesiune structurată pe lună. Instrumente financiare, template-uri, metodologie ghidată și un grup de femei care fac aceeași muncă. Construiești un sistem financiar funcțional în 6 luni, împreună.',
    includes: [
      '6 sesiuni lunare ghidate (2h fiecare)',
      'Instrumente financiare și template-uri de lucru',
      'Feedback pe cifrele tale în cadrul grupului',
      'Accountability structurat între sesiuni',
      'Comunitate de femei în aceeași etapă',
    ],
    price: null,
    priceLabel: null,
    cta: 'Vreau în grup',
    quote:
      'Am un sistem financiar funcțional. Știu costurile, marjele, break-even-ul. Verific cifrele lunar — nu le evit. Am control.',
  },
  {
    label: 'DECIZIE · 1 LA 1',
    badge: '★ CEL MAI ALES',
    title: 'Planul tău. Cifrele tale.',
    description:
      'Construim împreună planul financiar pe situația ta reală. Scenarii, proiecții și răspunsul la întrebarea: «Când pot face tranziția în siguranță?» Aproximativ 10 ore de lucru personalizat. Pleci cu un document, nu cu un sentiment.',
    includes: [
      '~10 ore de lucru personalizat',
      'Business plan financiar complet',
      '3 scenarii: rămân la job / plec în 6 luni / plec în 12 luni',
      'Strategie de preț validată pe date',
      'Document final — planul tău, cu cifrele tale',
    ],
    price: null,
    priceLabel: null,
    cta: 'Vreau planul meu',
    quote:
      'Am permisiunea rațională să decid. Nu mai ghicesc. Am un document care îmi arată ce e real, ce e riscant și ce trebuie să se întâmple.',
  },
  {
    label: 'TRANSFORMARE COMPLETĂ · PREMIUM',
    badge: null,
    title: 'Business Plan + 3 luni de implementare ghidată.',
    description:
      'Business plan-ul complet plus 3 luni de follow-up lunar. Revizuim cifrele, ajustăm strategia, menținem direcția. Diferența dintre a ști ce să faci și a face efectiv.',
    includes: [
      'Tot ce include Business Plan 1 la 1',
      '3 luni follow-up (1 sesiune/lună)',
      'Revizuirea planului pe baza rezultatelor reale',
      'Ajustări de strategie în timp real',
      'Suport între sesiuni pentru decizii urgente',
    ],
    price: null,
    priceLabel: null,
    cta: 'Vreau transformarea',
    quote:
      'Nu sunt doar informată — m-am transformat în cum mă raportez la business. Verific cifrele, ajustez, decid fără panică.',
  },
]

const otherLines = [
  {
    number: '02',
    title: 'Operations & Systems Consultant | Business Architect',
    href: '/ro/servicii/linia-2',
  },
  {
    number: '03',
    title: 'Personal Leadership & Entrepreneurial Mindset Coaching',
    href: '/ro/servicii/linia-3',
  },
]

export default function LiniaUna() {
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
        <p className="font-mono text-[11px] uppercase tracking-widest text-brass mb-4">LINIA 01</p>
        <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,58px)] leading-[1.1] mb-4">
          Arhitect de Business<br /><em>& Strateg Financiar</em>
        </h1>
        <p className="font-sans text-grey text-[16px] max-w-xl leading-relaxed">
          Pentru antreprenoare care vor să știe, nu să spere.
        </p>
      </div>

      {/* Intro */}
      <div className="bg-cream-l">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl mb-12">
            <p className="font-cormorant text-ink text-[22px] italic mb-3">Ești Laura.</p>
            <p className="font-sans text-grey text-[14px] leading-[1.75] mb-3">
              Ai un job stabil. Poate unul bun. Dar ceva nu mai funcționează.
              Undeva în mintea ta există o idee — un business, o schimbare,
              o versiune a muncii care să fie cu adevărat a ta.
            </p>
            <p className="font-sans text-grey text-[14px] leading-[1.75]">
              Întrebarea nu este dacă ai curajul.
              Întrebarea este dacă cifrele au sens.
            </p>
          </div>

          {/* Programs grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-cream rounded-2xl p-7 border border-green/8 flex flex-col hover:border-amber/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="label-style text-brass text-[10px]">{prog.label}</p>
                  {prog.badge && (
                    <span className="text-[10px] font-sans font-semibold bg-amber/10 text-amber px-2 py-0.5 rounded-full">
                      {prog.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-cormorant text-ink text-[clamp(20px,1.8vw,25px)] leading-tight mb-3">
                  {prog.title}
                </h4>
                <p className="font-sans text-grey text-[13px] leading-[1.7] mb-5">{prog.description}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {prog.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green mt-0.5 flex-shrink-0 text-[12px]">✓</span>
                      <span className="font-sans text-[12px] text-grey leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                {prog.quote && (
                  <blockquote className="font-cormorant italic text-green text-[15px] leading-relaxed border-l-2 border-brass pl-3 mb-5">
                    „{prog.quote}"
                  </blockquote>
                )}
                {prog.price ? (
                  <div className="mb-4">
                    <p className="font-mono text-amber text-[24px] font-medium">{prog.price}</p>
                    {prog.priceLabel && (
                      <p className="label-style text-lgrey text-[10px] mt-1">{prog.priceLabel}</p>
                    )}
                  </div>
                ) : (
                  <div className="mb-4">
                    <p className="font-mono text-lgrey text-[13px]">Preț la cerere</p>
                  </div>
                )}
                <a href="/ro#contact">
                  <motion.div
                    className="w-full bg-amber text-white font-sans font-medium py-2.5 rounded-full text-[13px] text-center cursor-pointer"
                    whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {prog.cta}
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Guidance */}
          <div className="bg-green-l rounded-2xl p-7 border border-green/20">
            <p className="font-cormorant text-green-d text-[20px] mb-3">Nu știi de unde să începi?</p>
            <p className="font-sans text-grey text-[13px] leading-[1.75]">
              <strong className="text-ink font-medium">Workshopul trimestrial</strong> este intrarea cu cel mai mic angajament —
              vino o dată, lucrează pe o problemă reală și vezi dacă această abordare ți se potrivește.
              <br /><br />
              <strong className="text-ink font-medium">Programul de grup</strong> — pentru cele care sunt deja în mișcare și au nevoie de structură.
              <br />
              <strong className="text-ink font-medium">Business Plan 1 la 1</strong> — pentru cele care au o decizie majoră în față.
              <br />
              <strong className="text-ink font-medium">Pachetul Premium</strong> — pentru cele care vor să meargă până la capăt.
            </p>
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
