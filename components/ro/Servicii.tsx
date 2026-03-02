'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

/* ─── Linia 1: programele FAB Essence ───────────────────────────── */
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

/* ─── Linia 2: Operations & Systems ─────────────────────────────── */
const opsServices = [
  'Project follow-up systems — o singură imagine, fără ghiceli',
  'Design procese operaționale — mapare și reconstruire mai clară',
  'Instrumente de vizibilitate financiară — structuri de cost, prețuri, analiza marjei',
  'Fundații ERP & suport integrare',
  'Business plan — financiar & strategic',
]

/* ─── Component ─────────────────────────────────────────────────── */
export default function Servicii() {
  const [openLine, setOpenLine] = useState<number | null>(0)

  const handleCta = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const lines = [
    {
      number: '01',
      title: 'Arhitect de Business & Strateg Financiar',
      sub: 'Pentru antreprenoare care vor să știe, nu să spere.',
      color: 'bg-cream',
    },
    {
      number: '02',
      title: 'Operations & Systems Consultant | Business Architect',
      sub: 'Pentru companii care vor să funcționeze mai clar.',
      color: 'bg-cream-d',
    },
    {
      number: '03',
      title: 'Personal Leadership & Entrepreneurial Mindset Coaching',
      sub: 'Pentru oameni care vor să conducă cu mai multă claritate.',
      color: 'bg-green-l',
    },
  ]

  return (
    <section id="servicii" className="bg-cream-d py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <AnimatedSection className="mb-14">
          <p className="label-style text-brass mb-3">LINIILE MELE DE ACTIVITATE</p>
          <BrassLine className="mb-6" />
          <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,42px)] leading-tight mb-4">
            Trei arii de expertiză.
          </h2>
          <p className="font-sans text-grey text-[15px]">
            O abordare: claritate pe date reale.
          </p>
        </AnimatedSection>

        {/* Business lines accordion */}
        <div className="space-y-4">
          {lines.map((line, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.08}>
              <div className="rounded-2xl overflow-hidden border border-green/10">
                {/* Line header — always visible */}
                <button
                  onClick={() => setOpenLine(openLine === idx ? null : idx)}
                  className={`w-full flex items-center justify-between gap-4 px-8 py-6 text-left transition-colors ${
                    openLine === idx ? 'bg-green-d' : line.color + ' hover:bg-green-l'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`font-mono text-[11px] font-medium flex-shrink-0 ${openLine === idx ? 'text-brass-l' : 'text-brass'}`}>
                      {line.number}
                    </span>
                    <div>
                      <h3 className={`font-cormorant text-[clamp(18px,2vw,24px)] leading-tight ${openLine === idx ? 'text-cream' : 'text-ink'}`}>
                        {line.title}
                      </h3>
                      <p className={`font-sans text-[13px] mt-1 ${openLine === idx ? 'text-cream/60' : 'text-grey'}`}>
                        {line.sub}
                      </p>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: openLine === idx ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-2xl font-light flex-shrink-0 ${openLine === idx ? 'text-amber' : 'text-brass'}`}
                  >
                    +
                  </motion.span>
                </button>

                {/* Line content */}
                <AnimatePresence>
                  {openLine === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      {/* ── LINIA 1 ─────────────────────────────────── */}
                      {idx === 0 && (
                        <div className="bg-cream-l px-8 py-10">
                          {/* Pentru cine */}
                          <div className="max-w-2xl mb-10">
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
                                className="bg-cream rounded-2xl p-7 border border-green/8 flex flex-col group hover:border-amber/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
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
                                    {/* PREȚ DE COMPLETAT */}
                                    <p className="font-mono text-lgrey text-[13px]">Preț la cerere</p>
                                  </div>
                                )}
                                <motion.button
                                  onClick={handleCta}
                                  className="w-full bg-amber text-white font-sans font-medium py-2.5 rounded-full text-[13px]"
                                  whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                                  whileTap={{ scale: 0.97 }}
                                >
                                  {prog.cta}
                                </motion.button>
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
                      )}

                      {/* ── LINIA 2 ─────────────────────────────────── */}
                      {idx === 1 && (
                        <div className="bg-cream-l px-8 py-10">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-4">
                                Majoritatea businessurilor mici și medii nu au o problemă de informație.
                                Au o problemă de <strong className="text-ink font-medium">vizibilitate</strong>.
                              </p>
                              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-6">
                                Datele există — risipite în spreadsheet-uri, inbox-uri și capetele oamenilor.
                                Construiesc sisteme operaționale care oferă leadershiplui vizibilitate reală
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
                                {/* PREȚ DE COMPLETAT */}
                                <p className="font-mono text-lgrey text-[13px] mb-4">Preț personalizat · Contact pentru o conversație de diagnostic</p>
                                <motion.button
                                  onClick={handleCta}
                                  className="w-full bg-amber text-white font-sans font-medium py-3 rounded-full text-[14px]"
                                  whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                                  whileTap={{ scale: 0.97 }}
                                >
                                  Solicită o conversație
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── LINIA 3 ─────────────────────────────────── */}
                      {idx === 2 && (
                        <div className="bg-cream-l px-8 py-10">
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

                          {/* PROGRAME DE COMPLETAT — Personal Leadership & Entrepreneurial Mindset Coaching */}
                          <div className="bg-green-l rounded-2xl p-6 border border-green/20 mb-6">
                            <p className="label-style text-brass text-[10px] mb-2">ÎN CURÂND</p>
                            <p className="font-sans text-grey text-[13px] leading-[1.7]">
                              Programele specifice pentru această linie de activitate sunt în pregătire.
                              Contactează-mă pentru o conversație de explorare.
                            </p>
                          </div>

                          <motion.button
                            onClick={handleCta}
                            className="bg-amber text-white font-sans font-medium px-8 py-3 rounded-full text-[14px]"
                            whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Hai să discutăm
                          </motion.button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
