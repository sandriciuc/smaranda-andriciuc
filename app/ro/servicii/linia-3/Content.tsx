'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const processSteps = [
  {
    num: '01',
    title: 'Definim focusul',
    desc: 'Stabilim ce vrei să rezolvi în sesiunea de azi, aliniat la obiectivul mai larg pentru care lucrăm.',
  },
  {
    num: '02',
    title: 'Explorăm în adâncime',
    desc: 'Intrăm în situația concretă — ce se întâmplă cu adevărat, ce blochează, ce nu ai văzut încă. Întrebări precise, nu sfaturi generice.',
  },
  {
    num: '03',
    title: 'Ieșim cu un pas concret',
    desc: 'Nu cu un plan de 10 puncte — cu un singur pas clar pe care îl poți face până la sesiunea următoare.',
  },
]

const otherLines = [
  { number: '01', title: 'Arhitect de Business & Strateg Financiar', href: '/ro/servicii/linia-1' },
  { number: '02', title: 'Operations & Systems Consultant | Business Architect', href: '/ro/servicii/linia-2' },
]

export default function LiniaTrei() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ── Main editorial column ── */}
      <div className="max-w-[780px] mx-auto px-10 pt-36 pb-20">

        {/* Back link */}
        <Link
          href="/ro"
          className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors mb-12"
        >
          ← Înapoi la pagina principală
        </Link>

        {/* Header */}
        <div className="mb-0">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">
            Personal Leadership & Entrepreneurial Clarity · Linia 03
          </p>
          <h1 className="font-cormorant font-light text-[clamp(38px,5vw,54px)] leading-[1.15] text-green mb-3.5">
            Știi ce ai de făcut.<br />
            <em className="italic text-brass">Și totuși nu o faci.</em>
          </h1>
          <p className="font-sans text-[15px] text-grey italic">
            Pentru antreprenori și lideri care vor să acționeze din claritate, nu din presiune.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-brass my-11" />

        {/* Problem context */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu îți lipsesc informațiile. Nu îți lipsește competența. Și totuși există decizii pe care le amâni de luni, acțiuni pe care le știi necesare și pe care nu le faci, un gap persistent între ce gândești și ce faci în realitate.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Uneori e o decizie majoră pe care o ții în suspans pentru că mizele par prea mari. Alteori e un pattern care se repetă — te blochezi exact când contează cel mai mult. Sau conduci o echipă și simți că ceva în felul în care operezi tu îi limitează și pe ei.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu e lipsă de voință. E un mod de a gândi și a decide sub presiune care nu mai servește unde vrei să ajungi.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-2 border-brass px-7 py-[18px] my-9 font-cormorant text-[23px] italic text-green leading-[1.5] bg-cream-d">
          „Claritatea externă — cifre, sisteme, structură — nu e suficientă dacă persoana care le conduce operează din frică, nu din putere proprie."
        </blockquote>

        {/* Ce fac */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">Ce fac</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Lucrez cu tine pe modul în care gândești și decizi — nu în abstract, ci aplicat pe situațiile reale din businessul sau cariera ta. Identificăm împreună unde și de ce te blochezi, ce pattern-uri îți sabotează execuția și cum iei decizii mai clare când presiunea e mare.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu e terapie. Nu e motivație. E lucru structurat, cu întrebări precise, aplicat direct pe ce trăiești acum.
          </p>
        </div>

        {/* Anchor block */}
        <div className="bg-green px-9 py-8 my-11">
          <p className="font-sans text-[15px] text-cream/90 leading-[1.9] font-light">
            Am fost și eu omul care știa ce are de făcut și nu o făcea. Am înțeles diferența dintre a avea un plan și a acționa din el.{' '}
            <em className="text-brass-l italic">Lucrez cu oameni competenți care au nevoie nu de mai multe informații — ci de claritate despre ce îi oprește.</em>
          </p>
        </div>

        {/* Pentru cine */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">Pentru cine</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Pentru antreprenori care au luat o decizie mare — sau care trebuie să o ia — și simt că ceva intern îi ține pe loc. Și pentru lideri care vor să conducă din putere proprie, nu din reacție la ce se întâmplă în jurul lor.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Dacă te recunoști, e suficient să începem cu o conversație.
          </p>
        </div>

        {/* Process steps */}
        <div className="mb-12">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">Cum funcționează o sesiune</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink mb-6">
            Fiecare sesiune are o structură clară — nu o conversație deschisă fără direcție.
          </p>
          <div>
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`grid gap-5 py-5 items-start ${i < processSteps.length - 1 ? 'border-b border-black/[0.07]' : ''}`}
                style={{ gridTemplateColumns: '40px 1fr' }}
              >
                <p className="font-cormorant text-[28px] font-light text-brass leading-none pt-0.5">{step.num}</p>
                <div>
                  <span className="font-sans text-[10px] tracking-[2px] uppercase text-green font-medium mb-1 block">{step.title}</span>
                  <p className="font-sans text-[14px] text-lgrey leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Prices */}
        <div className="mb-0">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-7">Servicii & Prețuri</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">

            {/* Single session */}
            <div className="bg-cream-d p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass font-medium mb-3">Sesiune individuală</p>
              <p className="font-cormorant text-[22px] font-light text-green mb-4 leading-[1.25]">O sesiune de coaching</p>
              <p className="font-sans text-[30px] font-medium text-brass leading-none tracking-[-0.5px]">400 lei</p>
              <p className="font-sans text-[12px] text-lgrey italic mt-1 mb-5">per sesiune · 50 minute</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-[18px]">
                Pentru când ai o situație concretă de clarificat — o decizie, un blocaj, un moment de cotitură. O singură sesiune, focusată, cu un pas clar la final.
              </p>
              <ul className="mb-5">
                {['50 minute 1 la 1, online', 'Structură în trei faze: focus, explorare, acțiune', 'Notițe de sesiune trimise după'].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-ink leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-black/[0.06]' : ''}`}>
                    <span className="text-brass text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/ro#contact"
                className="inline-block mt-[22px] px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans bg-green text-cream hover:bg-brass transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Rezervă o sesiune
              </motion.a>
            </div>

            {/* Featured package */}
            <div className="bg-green p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass-l font-medium mb-3">Pachet recomandat</p>
              <p className="font-cormorant text-[22px] font-light text-cream mb-4 leading-[1.25]">4 sesiuni de coaching</p>
              <p className="font-sans text-[30px] font-medium text-brass-l leading-none tracking-[-0.5px]">1.500 lei</p>
              <p className="font-sans text-[12px] text-cream/45 italic mt-1 mb-5">pachet complet · economisești 100 lei</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <p className="font-sans text-[13px] text-cream/70 leading-[1.75] mb-[18px]">
                Pentru lucru continuu pe un obiectiv sau o tranziție. Patru sesiuni cu ritm de 2–3 săptămâni — suficient timp să aplici între sesiuni, suficient contact să nu pierzi direcția.
              </p>
              <ul className="mb-4">
                {['4 sesiuni × 50 minute, online', 'Ritm de 2–3 săptămâni între sesiuni', 'Notițe după fiecare sesiune', 'Posibilitate de plată în două tranșe'].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-cream/82 leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-white/[0.08]' : ''}`}>
                    <span className="text-brass-l text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[12px] text-brass-l italic pt-3 border-t border-white/[0.12] mt-1 mb-0">
                Garanție 100% după prima sesiune — dacă simți că nu e pentru tine, returnez integral suma.
              </p>
              <motion.a
                href="/ro#contact"
                className="inline-block mt-[22px] px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans bg-brass text-white hover:bg-brass-l transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Rezervă pachetul
              </motion.a>
            </div>

            {/* Workshop — spans both columns */}
            <div className="sm:col-span-2 bg-white border border-cream-d grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
              <div>
                <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass font-medium mb-3">Format pentru organizații</p>
                <p className="font-cormorant text-[22px] font-light text-green mb-4 leading-[1.25]">Workshop pentru echipe</p>
                <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-3">
                  Un subiect specific, un grup, un rezultat clar. Pentru organizații care vor să ofere angajaților un spațiu structurat de lucru pe claritate decizională, leadership și acțiune sub presiune.
                </p>
                <motion.a
                  href="/ro#contact"
                  className="inline-block mt-[22px] px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans border border-green text-green bg-transparent hover:bg-green hover:text-cream transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Solicită o conversație
                </motion.a>
              </div>
              <div className="pt-2">
                <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-3">
                  Formatul, durata și prețul sunt personalizate în funcție de obiectivul grupului și numărul de participanți.
                </p>
                <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-3">
                  Contactează-mă pentru o discuție de diagnostic — îți spun dacă și cum pot ajuta.
                </p>
                <p className="font-sans text-[13px] text-brass italic">Fără propunere dacă nu există potrivire reală.</p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA block */}
        <div className="border-t border-brass pt-11 mt-14">
          <p className="font-cormorant font-light text-[clamp(22px,3vw,28px)] text-green leading-[1.5] mb-7">
            Nu ești sigur ce format ți se potrivește?<br />Începe cu o conversație de 30 de minute.
          </p>
          <p className="font-sans text-[13px] text-grey italic mb-7">
            Îmi spui unde ești blocat. Îți spun sincer dacă și cum pot ajuta.
          </p>
          <motion.a
            href="/ro#contact"
            className="inline-block px-9 py-[15px] bg-amber text-cream font-sans text-[11px] tracking-[2.5px] uppercase transition-colors duration-200 hover:bg-green"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicită o conversație gratuită
          </motion.a>
        </div>

      </div>

      {/* ── Other Lines Navigation ── */}
      <div className="border-t border-cream-d">
        <div className="max-w-[780px] mx-auto px-10 py-16">
          <p className="font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: '#B89A6E' }}>
            ALTE LINII DE ACTIVITATE
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherLines.map((line) => (
              <Link key={line.href} href={line.href} className="group block">
                <div className="flex items-center justify-between gap-4 px-6 py-5 border border-cream-d bg-white group-hover:border-green group-hover:bg-cream transition-all duration-200">
                  <div>
                    <p className="font-cormorant text-[28px] text-brass font-light">{line.number}</p>
                    <p className="font-cormorant text-[16px] text-ink group-hover:text-green transition-colors leading-snug mt-1">{line.title}</p>
                  </div>
                  <span className="text-lgrey text-[18px] group-hover:text-green transition-all group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
