'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    title: 'Diagnostic',
    tagline: 'Ce îți stă în cale cu adevărat',
    desc: 'Nu începem cu soluții. Începem cu ce se întâmplă de fapt — ce pattern se repetă, unde și de ce te blochezi, ce decizie ții în suspans și de ce. Prima sesiune e de diagnoză precisă, nu de brainstorming.',
  },
  {
    num: '02',
    title: 'Lucrul',
    tagline: 'Sesiune cu sesiune, pe situațiile reale',
    desc: 'Fiecare sesiune pornește de la o situație concretă din business sau din viața ta de lider. Nu de la teorie. Intrăm în ce trăiești acum — decizii, blocaje, relații, presiune — și ieșim cu un pas clar.',
  },
  {
    num: '03',
    title: 'Direcție',
    tagline: 'Nu doar claritate, ci capacitatea de a decide singur',
    desc: 'La finalul procesului nu ieși cu un plan extern. Ieși cu un mod mai clar de a gândi, de a decide și de a acționa — unul care rămâne cu tine după ce sesiunile se termină.',
  },
]

const profiles = [
  {
    label: 'Antreprenorul',
    desc: 'Ai luat o decizie majoră — sau trebuie să o iei — și simți că ceva intern te ține pe loc. Sau ești în creștere și simți că modul în care operezi tu a devenit un plafon pentru business.',
  },
  {
    label: 'Liderul',
    desc: 'Conduci o echipă și ai observat că felul în care tu gândești și decizi îi afectează și pe ei. Vrei să conduci din putere proprie, nu din reacție la ce se întâmplă în jur.',
  },
]

export default function TheClarityProcessRo() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ── */}
      <div className="bg-green relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full border border-white/[0.06] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full border border-white/[0.05] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full border border-white/[0.04] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-[780px] mx-auto px-10 pt-36 pb-16 relative">
          {/* Back link */}
          <Link
            href="/ro/servicii/linia-3"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-cream/50 hover:text-cream transition-colors mb-12"
          >
            ← Linia 03
          </Link>

          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass-l mb-[18px]">
            Personal Leadership & Entrepreneurial Clarity · Program
          </p>
          <h1 className="font-cormorant font-light text-[clamp(36px,5vw,52px)] leading-[1.15] text-cream mb-4">
            The Clarity Process
          </h1>
          <p className="font-sans text-[15px] text-cream/70 italic max-w-[520px]">
            4 sesiuni. Un proces structurat. Claritate pe care o duci cu tine după ce programul se termină.
          </p>
        </div>
      </div>

      {/* ── Main editorial column ── */}
      <div className="max-w-[780px] mx-auto px-10 pt-14 pb-20">

        {/* Intro */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu e un pachet de sesiuni. E un proces cu o logică internă: fiecare sesiune construiește pe cea anterioară, iar la final ai nu doar claritate — ai un mod diferit de a gândi și de a decide.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Lucrul se face aplicat, pe situațiile reale din viața ta de antreprenor sau lider. Nu în abstract, nu cu modele teoretice.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-brass mb-11" />

        {/* Phases */}
        <div className="mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-8">Cum arată procesul</p>
          <div className="space-y-0">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`grid gap-6 py-8 items-start ${i < phases.length - 1 ? 'border-b border-black/[0.07]' : ''}`}
                style={{ gridTemplateColumns: '48px 1fr' }}
              >
                <p className="font-cormorant text-[36px] font-light text-brass-l leading-none pt-1">{phase.num}</p>
                <div>
                  <p className="font-cormorant text-[22px] font-light text-green mb-1 leading-snug">{phase.title}</p>
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-brass italic mb-3">{phase.tagline}</p>
                  <p className="font-sans text-[14px] text-lgrey leading-[1.75]">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome block */}
        <div className="border-l-4 border-green-d pl-7 py-2 my-11">
          <p className="font-cormorant text-[21px] italic text-green leading-[1.6]">
            La finalul celor 4 sesiuni nu ieși cu un plan pe care eu ți l-am dat. Ieși cu claritate despre cum gândești, ce te blochează și cum decizi — și cu capacitatea de a aplica asta singur, mai departe.
          </p>
        </div>

        {/* Pentru cine */}
        <div className="mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-7">Pentru cine</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
            {profiles.map((p, i) => (
              <div key={i} className="bg-cream-d p-7">
                <p className="font-cormorant text-[20px] font-light text-green mb-3">{p.label}</p>
                <p className="font-sans text-[14px] text-lgrey leading-[1.75]">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[14px] text-grey italic mt-6">
            Dacă te recunoști în unul dintre profiluri, o conversație de 30 de minute e suficientă să vedem dacă are sens să lucrăm împreună.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-0">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-7">Investiție</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">

            {/* Main package — green */}
            <div className="bg-green p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass-l font-medium mb-3">Programul complet</p>
              <p className="font-cormorant text-[22px] font-light text-cream mb-4 leading-[1.25]">The Clarity Process</p>
              <p className="font-sans text-[32px] font-medium text-brass-l leading-none tracking-[-0.5px]">1.500 lei</p>
              <p className="font-sans text-[12px] text-cream/45 italic mt-1 mb-5">4 sesiuni · 50 minute fiecare</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <ul className="mb-5">
                {[
                  '4 sesiuni × 50 minute, online',
                  'Ritm de 2–3 săptămâni între sesiuni',
                  'Notițe trimise după fiecare sesiune',
                  'Posibilitate de plată în două tranșe',
                ].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-cream/82 leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-white/[0.08]' : ''}`}>
                    <span className="text-brass-l text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[12px] text-brass-l italic pt-3 border-t border-white/[0.12] mt-1 mb-5">
                Garanție 100% după prima sesiune — dacă simți că nu e pentru tine, returnez integral suma.
              </p>
              <motion.a
                href="/ro#contact"
                className="inline-block px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans bg-cream text-green hover:bg-brass-l hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Aplică
              </motion.a>
            </div>

            {/* Continuation — white */}
            <div className="bg-white border border-cream-d p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass font-medium mb-3">Continuare</p>
              <p className="font-cormorant text-[22px] font-light text-green mb-4 leading-[1.25]">Sesiune Lunară</p>
              <p className="font-sans text-[32px] font-medium text-brass leading-none tracking-[-0.5px]">400 lei</p>
              <p className="font-sans text-[12px] text-lgrey italic mt-1 mb-5">pe lună · 50 minute</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-5">
                După finalizarea procesului, o sesiune lunară pentru a menține direcția și a lucra pe situațiile noi care apar.
              </p>
              <ul className="mb-5">
                {[
                  '1 sesiune × 50 minute, online',
                  'Disponibilă doar după The Clarity Process',
                  'Fără contract minim',
                ].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-ink leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-black/[0.06]' : ''}`}>
                    <span className="text-brass text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/ro#contact"
                className="inline-block px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans border border-green text-green bg-transparent hover:bg-green hover:text-cream transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Află mai multe
              </motion.a>
            </div>

          </div>
        </div>

        {/* CTA block */}
        <div className="border-t border-brass pt-11 mt-14">
          <p className="font-cormorant font-light text-[clamp(22px,3vw,28px)] text-green leading-[1.5] mb-7">
            Nu ești sigur dacă e pentru tine?<br />Începe cu 30 de minute de conversație.
          </p>
          <p className="font-sans text-[13px] text-grey italic mb-7">
            Îmi spui unde ești. Îți spun sincer dacă The Clarity Process e răspunsul potrivit.
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

      {/* ── Back to Line 03 ── */}
      <div className="border-t border-cream-d">
        <div className="max-w-[780px] mx-auto px-10 py-12">
          <Link
            href="/ro/servicii/linia-3"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors"
          >
            ← Înapoi la Linia 03
          </Link>
        </div>
      </div>

    </div>
  )
}
