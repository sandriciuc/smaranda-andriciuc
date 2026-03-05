'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const otherLines = [
  { number: '01', title: 'Business & Financial Strategy Consultancy & Mentoring', href: '/ro/servicii/linia-1' },
  { number: '03', title: 'Leadership Coaching for Entrepreneurs & Leaders', href: '/ro/servicii/linia-3' },
]

export default function LiniaDoua() {
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
            Operations & Systems Consultant · Linia 02
          </p>
          <h1 className="font-cormorant font-light text-[clamp(38px,5vw,54px)] leading-[1.15] text-green mb-3.5">
            Businessul tău crește.<br />
            Sistemele lui <em className="italic text-brass">au rămas în urmă.</em>
          </h1>
          <p className="font-sans text-[15px] text-grey italic">
            Pentru antreprenori și manageri care vor să aibă controlul înapoi.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-brass my-11" />

        {/* Problem context */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Ești prins în operațional zilnic și nu mai ai timp să vezi tabloul de ansamblu. Rezolvi probleme în fiecare zi — dar nu ajungi niciodată la cauza lor. Ești mereu în urgență, rareori în analiză.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu știi în orice moment unde ești cu adevărat — cu costurile, cu proiectele, cu prioritățile. Datele există, dar nu sunt organizate în ceva care să-ți spună ceva util.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu e o problemă de oameni. E o problemă de sisteme.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-2 border-brass px-7 py-[18px] my-9 font-cormorant text-[23px] italic text-green leading-[1.5] bg-cream-d">
          „Datele există în businessul tău. Trebuie doar să înceapă să-ți vorbească."
        </blockquote>

        {/* Ce fac */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">Ce fac</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Analizez cum funcționează cu adevărat businessul tău — fluxurile de lucru, structura de costuri, urmărirea proiectelor — și construiesc instrumentele care lipsesc: clare, simple, pe care echipa ta le poate folosi din prima zi.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu predau metodologii. Construiesc sisteme concrete, adaptate la cum funcționează businessul tău în realitate — nu la cum ar trebui să funcționeze în teorie.
          </p>
        </div>

        {/* Anchor block */}
        <div className="bg-green px-9 py-8 my-11">
          <p className="font-sans text-[15px] text-cream/90 leading-[1.9] font-light">
            Lucrez la intersecția dintre inginerie, finanțe și operațiuni. Știu cum arată un business care a crescut mai repede decât sistemele lui — pentru că am lucrat în ele.{' '}
            <em className="text-brass-l italic">Și știu cum se simte să fii omul care trebuie să țină totul împreună când imaginea de ansamblu nu e clară.</em>
          </p>
        </div>

        {/* Cu cine lucrez */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">Cu cine lucrez</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Cu antreprenori și manageri de IMM-uri care au depășit faza de start-up, dar nu au încă structurile unui business matur. Afacerea merge — dar funcționează pe improvizație, nu pe sistem.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Dacă te recunoști în asta, probabil că e momentul potrivit pentru o conversație.
          </p>
        </div>

        {/* Cum funcționează */}
        <div className="mb-0 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">Cum funcționează</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Nu vând pachete fixe. Fiecare colaborare începe cu o discuție de diagnostic — îmi explici situația, eu îți spun ce văd și dacă pot ajuta. Dacă există potrivire, primești o propunere clară: ce construim, în cât timp, ce implică din partea echipei tale.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            <strong className="font-medium text-green">Prețul este personalizat</strong> — în funcție de dimensiunea businessului, complexitatea problemei și timpul implicat.
          </p>
        </div>

        {/* CTA block */}
        <div className="border-t border-brass pt-11 mt-14">
          <p className="font-cormorant font-light text-[clamp(22px,3vw,28px)] text-green leading-[1.5] mb-7">
            30 de minute de conversație.<br />Fără angajament. Fără propunere dacă nu există potrivire.
          </p>
          <p className="font-sans text-[13px] text-grey italic mb-7">
            Îți spun direct ce văd — inclusiv dacă nu sunt persoana potrivită pentru ce ai nevoie.
          </p>
          <motion.a
            href="/ro#contact"
            className="inline-block px-9 py-[15px] bg-amber text-cream font-sans text-[11px] tracking-[2.5px] uppercase transition-colors duration-200 hover:bg-green"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicită o conversație
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
