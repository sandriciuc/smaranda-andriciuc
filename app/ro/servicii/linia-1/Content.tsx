'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/* ─── Sub-components ─────────────────────────────────────────── */

function Badge({ text, variant }: { text: string; variant: 'free' | 'entry' | 'group' | 'star' | 'premium' }) {
  const cls = {
    free:    'bg-green text-cream',
    entry:   'bg-cream-d text-grey border border-[#d4cfc8]',
    group:   'bg-brass text-cream',
    star:    'bg-amber text-white',
    premium: 'bg-ink text-cream',
  }[variant]
  return (
    <span className={`absolute -top-px left-10 text-[9px] tracking-[0.25em] uppercase font-semibold font-sans px-3.5 py-[5px] rounded-b-sm ${cls}`}>
      {text}
    </span>
  )
}

function Includes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="text-green font-semibold text-[12px] flex-shrink-0 mt-0.5">✓</span>
          <span className="font-sans text-ink text-[13px] leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Testimonial({ text }: { text: string }) {
  return (
    <blockquote className="bg-cream border-l-[3px] border-cream-d pl-5 py-3 mb-8 italic text-grey font-sans text-[13px] leading-[1.7] font-light">
      „{text}"
    </blockquote>
  )
}

function CtaBtn({ href, variant, children }: { href: string; variant?: string; children: React.ReactNode }) {
  const base = 'inline-block px-8 py-3.5 text-[11px] tracking-[1.5px] uppercase font-medium font-sans transition-all duration-200 rounded-sm'
  const variants: Record<string, string> = {
    outline: 'border border-green text-green hover:bg-green hover:text-cream',
    green:   'bg-green text-cream hover:bg-green-d',
    amber:   'bg-amber text-white hover:brightness-90',
    dark:    'bg-ink text-cream hover:bg-[#333]',
  }
  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant || 'green']}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}

/* ─── Tier Card ──────────────────────────────────────────────── */

interface TierCardProps {
  badge: { text: string; variant: 'free' | 'entry' | 'group' | 'star' | 'premium' }
  id: string
  title: string
  subtitle: string
  priceMain: React.ReactNode
  priceNote: string
  priceGreen?: boolean
  desc: string
  includes: string[]
  testimonial?: string
  ctaText: string
  ctaVariant?: string
}

function TierCard({ badge, id, title, subtitle, priceMain, priceNote, priceGreen, desc, includes, testimonial, ctaText, ctaVariant }: TierCardProps) {
  return (
    <div className="relative bg-white border border-cream-d py-11 px-10">
      <Badge text={badge.text} variant={badge.variant} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-7 pt-4">
        <div className="flex-1">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">{id}</p>
          <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">{title}</h3>
          <p className="font-sans text-[12px] text-lgrey tracking-[0.12em] uppercase">{subtitle}</p>
        </div>
        <div className="md:text-right flex-shrink-0">
          <p className={`font-cormorant text-[36px] font-medium leading-none ${priceGreen ? 'text-green' : 'text-ink'}`}>
            {priceMain}
          </p>
          <p className="font-sans text-[11px] text-lgrey mt-1 font-light">{priceNote}</p>
        </div>
      </div>
      <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-7 max-w-[640px]">{desc}</p>
      <Includes items={includes} />
      {testimonial && <Testimonial text={testimonial} />}
      <CtaBtn href="/ro#contact" variant={ctaVariant}>{ctaText}</CtaBtn>
    </div>
  )
}

/* ─── Static data ────────────────────────────────────────────── */

const flowSteps = [
  { id: '1A', name: 'Cercul Clarității', sub: 'Unde ești acum?' },
  { id: '1B', name: 'Money Map', sub: 'Prima structură financiară' },
  { id: '3A / 3B', name: 'Lab sau 1:1', sub: 'Construiești planul de business' },
  { id: '4A / 4B', name: 'Implementare', sub: 'Execuți cu suport' },
]

const decisionCards = [
  {
    borderColor: 'border-t-green',
    label: 'Dacă ești încă în stadiul de a înțelege întrebarea',
    name: 'Cercul Clarității',
    desc: 'Vino o dată. Fără angajament. Lucrează pe dacă o tranziție are sens pentru tine — înainte de a construi ceva.',
  },
  {
    borderColor: 'border-t-green',
    label: 'Dacă vrei să începi să construiești singură',
    name: 'Money Map',
    desc: 'Gratuit, autogestionat, 6 săptămâni. Primul pas potrivit dacă înveți prin practică și vrei un instrument — nu o conversație.',
  },
  {
    borderColor: 'border-t-brass',
    label: 'Dacă ai o problemă specifică de rezolvat',
    name: 'Workshop',
    desc: '250 lei. Vino pentru o sesiune, lucrează pe o temă reală — prețuri, costuri sau break-even. Vezi dacă abordarea ți se potrivește.',
  },
  {
    borderColor: 'border-t-brass',
    label: 'Dacă ești deja în mișcare și ai nevoie de structură',
    name: 'Business Plan Lab',
    desc: 'Șase luni, format de grup. Nu ești la zero — dar nu ai încă un plan financiar funcțional.',
  },
  {
    borderColor: 'border-t-green',
    label: 'Dacă ai o decizie majoră în față',
    name: 'Business Plan 1:1',
    desc: 'Planul tău. Cifrele tale. Răspunsul la: «Când pot face tranziția în siguranță?» — cu dovezi, nu cu speranță.',
  },
  {
    borderColor: 'border-t-amber',
    label: 'Dacă ai un plan și trebuie să-l execuți',
    name: 'Nivelul 4',
    desc: 'Cercul de Implementare (grup) sau Partener Strategic 1:1 — disponibil după finalizarea Nivelului 3.',
  },
]

const otherLines = [
  { number: '02', title: 'Operations & Systems Consultancy | Business Architecture', href: '/ro/servicii/linia-2' },
  { number: '03', title: 'Leadership Coaching for Entrepreneurs & Leaders', href: '/ro/servicii/linia-3' },
]

/* ─── Main component ─────────────────────────────────────────── */

export default function LiniaUna() {
  return (
    <div className="min-h-screen">

      {/* ── Page Header ── */}
      <div className="bg-cream-d">
        <div className="max-w-6xl mx-auto px-6 pt-36 pb-14">
          <Link
            href="/ro"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors mb-8"
          >
            ← Înapoi la pagina principală
          </Link>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-brass mb-5">LINIA 01</p>
          <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,52px)] leading-[1.12] mb-6">
            Business & Financial Strategy <em className="italic text-green">Consultancy & Mentoring</em>
          </h1>
          <p className="font-sans text-[16px] text-grey font-light leading-[1.7] max-w-[620px] border-l-[3px] border-brass pl-5 italic">
            Pentru antreprenoare care vor să știe, nu să spere.
          </p>
        </div>
      </div>

      {/* ── Intro Block ── */}
      <div className="bg-green">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="font-sans text-[15px] text-cream/80 leading-[1.8] font-light max-w-[700px]">
            Ai un job stabil. Poate unul bun. Dar ceva nu mai funcționează. Există o idee — un business, o schimbare, o versiune a muncii care să fie cu adevărat a ta.
            <br /><br />
            Întrebarea nu este dacă ai curajul.{' '}
            <strong className="text-brass-l font-medium">Întrebarea este dacă cifrele au sens.</strong>
            <br /><br />
            Această linie de activitate este construită ca o progresie: începi de unde ești, construiești în ritmul tău și treci la nivelul următor doar când ai fundația pusă. Fără scurtături. Fără pași omiși. Un sistem financiar real, construit pe cifrele tale reale.
          </p>
        </div>
      </div>

      {/* ── Tiers ── */}
      <div className="bg-cream-d">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section label */}
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-lgrey font-medium pt-12 mb-10">
            Intrare · Acces Gratuit
          </p>

          {/* 1A + 1B — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 1A Clarity Circle */}
            <div className="relative bg-white border border-cream-d py-11 px-10">
              <Badge text="Gratuit" variant="free" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7 pt-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">1A · Lunar</p>
                  <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">Clarity Circle</h3>
                  <p className="font-sans text-[12px] text-lgrey tracking-[0.12em] uppercase">Diagnostic & Maturitate Decizională</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="font-cormorant text-[36px] font-medium leading-none text-green">Gratuit</p>
                  <p className="font-sans text-[11px] text-lgrey mt-1 font-light">Întâlniri lunare de grup</p>
                </div>
              </div>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-7">
                Un spațiu lunar de grup pentru a clarifica unde ești, ce vrei cu adevărat și dacă o tranziție spre business are sens pentru tine acum. Nu terapie. Nu motivație. Un exercițiu diagnostic structurat cu alte persoane în aceeași etapă.
              </p>
              <Includes items={[
                'Sesiune lunară de grup — structurată, nu liberă',
                'Cadru diagnostic decizional',
                'Claritate asupra punctului real de plecare',
                'Primul contact cu metodologia',
              ]} />
              <CtaBtn href="/ro#contact" variant="outline">Vreau la workshop</CtaBtn>
            </div>

            {/* 1B Money Map */}
            <div className="relative bg-white border border-cream-d py-11 px-10">
              <Badge text="Gratuit" variant="free" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7 pt-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">1B · 6 Săptămâni</p>
                  <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">Money Map</h3>
                  <p className="font-sans text-[12px] text-lgrey tracking-[0.12em] uppercase">Auto-Structurare Inițială</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="font-cormorant text-[36px] font-medium leading-none text-green">Gratuit</p>
                  <p className="font-sans text-[11px] text-lgrey mt-1 font-light">Ghidat + instrucțiuni periodice</p>
                </div>
              </div>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-7">
                Un instrument Excel pe care îl construiești singură — cu instrucțiuni ghidate livrate în 6 săptămâni. Pleci cu o hartă financiară funcțională a situației tale actuale. Nu un rezumat. Un instrument pe care îl poți folosi independent, din prima zi.
              </p>
              <Includes items={[
                'Template Excel Money Map — structura ta, cifrele tale',
                '6 săptămâni de instrucțiuni ghidate',
                'Autogestionat, fără sesiuni live obligatorii',
                'Fundația pentru tot ce urmează',
              ]} />
              <CtaBtn href="/ro#contact" variant="outline">Vreau la workshop</CtaBtn>
            </div>
          </div>

          {/* 2 — Workshops */}
          <div className="mb-6">
            <TierCard
              badge={{ text: 'Intrare', variant: 'entry' }}
              id="2 · De 4× pe an"
              title="Workshopuri"
              subtitle="Teme Aplicate — Prețuri, Costuri, Break-even"
              priceMain={<>250 <span className="text-[16px] font-light">lei</span></>}
              priceNote="Per sesiune · 2 ore"
              desc="Patru workshopuri pe an, fiecare concentrat pe o singură temă aplicată: strategie de prețuri, structura costurilor, calculul break-even-ului. Vii o dată, lucrezi pe o problemă reală și pleci cu un instrument financiar concret aplicat pe situația ta în sesiune — nu teorie, nu inspirație."
              includes={[
                'Un instrument financiar specific, aplicat pe situația ta',
                'Exercițiu practic în timpul sesiunii',
                'Mini-template de luat acasă',
                'Cel mai mic angajament de intrare în metodă',
              ]}
              ctaText="Vreau la workshop"
              ctaVariant="green"
            />
          </div>

          {/* 3A + 3B — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TierCard
              badge={{ text: 'Program de Grup', variant: 'group' }}
              id="3A · 6 Luni"
              title="Business Plan Lab"
              subtitle="Construcție Structurată în Grup"
              priceMain={<>2.250 <span className="text-[16px] font-light">lei</span></>}
              priceNote="/ 6 luni · format de grup"
              desc="O sesiune ghidată pe lună. Instrumente financiare, template-uri de lucru, metodologie structurată și un grup de femei care fac aceeași muncă. Construiești un plan financiar de business funcțional în 6 luni — împreună, pas cu pas, fără să omiți părțile dificile."
              includes={[
                '6 sesiuni lunare ghidate (2h fiecare)',
                'Instrumente financiare și template-uri de lucru',
                'Feedback pe cifrele tale în cadrul grupului',
                'Accountability structurat între sesiuni',
                'Comunitate de femei în aceeași etapă',
              ]}
              testimonial="Am un sistem financiar funcțional. Știu costurile, marjele, break-even-ul. Verific cifrele lunar — nu le mai evit. Am control."
              ctaText="Vreau în grup"
              ctaVariant="green"
            />
            <TierCard
              badge={{ text: '★ Cel mai ales', variant: 'star' }}
              id="3B · Personalizat"
              title="Business Plan 1:1"
              subtitle="Fundament Strategic Personalizat"
              priceMain={<>3.600 <span className="text-[16px] font-light">lei</span></>}
              priceNote="~10 ore lucru personalizat"
              desc="Construim împreună planul financiar pe situația ta reală. Scenarii, proiecții și răspunsul la întrebarea: «Când pot face tranziția în siguranță?» Aproximativ 10 ore de lucru personalizat. Pleci cu un document, nu cu un sentiment."
              includes={[
                '~10 ore de lucru personalizat',
                'Plan financiar de business complet',
                '3 scenarii: rămân la job / plec în 6 luni / plec în 12 luni',
                'Strategie de preț validată pe date',
                'Document final — planul tău, cu cifrele tale',
              ]}
              testimonial="Am permisiunea rațională să decid. Nu mai ghicesc. Am un document care îmi arată ce e real, ce e riscant și ce trebuie să se întâmple."
              ctaText="Vreau planul meu"
              ctaVariant="amber"
            />
          </div>

          {/* Access Rule */}
          <div className="bg-cream border-l-[3px] border-amber px-6 py-5 mb-6">
            <p className="font-sans text-[13px] text-grey font-light leading-[1.6]">
              <strong className="text-ink font-medium">Accesul la Nivelul 4 necesită finalizarea Nivelului 3.</strong>{' '}
              Programele de implementare și parteneriat strategic sunt disponibile doar celor care au construit un plan de business funcțional — prin Lab sau prin procesul 1:1. Nu este un mecanism de filtrare. Așa rămâne munca fundamentată.
            </p>
          </div>

          {/* 4A + 4B — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            <TierCard
              badge={{ text: 'Grup · Continuu', variant: 'group' }}
              id="4A · Lunar"
              title="Cercul de Implementare Strategică"
              subtitle="Implementare & Recalibrare Continuă"
              priceMain={<>450 <span className="text-[16px] font-light">lei</span></>}
              priceNote="/ lună · format de grup"
              desc="Ai planul. Acum urmează partea mai dificilă: să-l execuți în condiții reale, cu obstacole reale, în timp real. Sesiuni lunare de grup pentru a revizui cifrele, ajusta strategia, menține direcția. Diferența dintre a ști ce să faci și a face efectiv."
              includes={[
                'Sesiune lunară de grup — revizuire, ajustare, recalibrare',
                'Revizuirea planului pe baza rezultatelor reale',
                'Ajustări de strategie în timp real în cadrul grupului',
                'Structură de accountability între sesiuni',
                'Acces la colege care implementează și ele',
              ]}
              testimonial="Verific cifrele, ajustez, decid fără panică."
              ctaText="Vreau în grup"
              ctaVariant="green"
            />
            <TierCard
              badge={{ text: 'Premium', variant: 'premium' }}
              id="4B · Termen Lung"
              title="Partener Strategic 1:1"
              subtitle="Parteneriat Strategic Individual pe Termen Lung"
              priceMain={<>900+ <span className="text-[16px] font-light">lei</span></>}
              priceNote="/ lună · preț la cerere"
              desc="Un parteneriat individual pe termen lung pentru cele care vor suport strategic continuu — nu doar un plan, ci un partener de gândire care îți cunoaște cifrele, contextul și deciziile. Revizuim rezultatele, ajustăm direcția și luăm decizii împreună când contează cel mai mult."
              includes={[
                'Sesiuni lunare de strategie 1:1',
                'Acces continuu pentru decizii urgente între sesiuni',
                'Revizuirea continuă a planului pe baza rezultatelor reale',
                'Ajustări de strategie în timp real',
                'Continuitate deplină — îți cunosc business-ul, cifrele, contextul',
              ]}
              testimonial="Nu sunt doar informată — m-am transformat în modul în care mă raportez la business."
              ctaText="Vreau transformarea"
              ctaVariant="dark"
            />
          </div>

        </div>
      </div>

      {/* ── Flow Section ── */}
      <div className="bg-green">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="font-cormorant text-[32px] text-cream leading-tight mb-2">
            Fluxul <em className="italic text-brass-l">logic</em>
          </h2>
          <p className="font-sans text-[13px] text-cream/60 font-light tracking-[0.05em] mb-9">
            Fiecare nivel construiește pe cel anterior. Mergi în ritmul tău.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap items-stretch md:items-start gap-0">
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="bg-cream/7 border border-cream/15 px-6 py-5 flex-1 min-w-[140px]" style={{ background: 'rgba(245,242,238,0.07)' }}>
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-brass font-semibold mb-1.5">{step.id}</p>
                  <p className="font-cormorant text-[18px] text-cream leading-[1.2]">{step.name}</p>
                  <p className="font-sans text-[11px] text-cream/50 mt-1 font-light">{step.sub}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="text-brass text-[18px] opacity-60 flex items-center justify-center px-2 py-4 md:py-0 rotate-90 md:rotate-0">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Decision Guide ── */}
      <div className="bg-cream-d">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h3 className="font-cormorant text-[28px] text-ink leading-tight mb-2">Nu știi de unde să începi?</h3>
          <p className="font-sans text-[13px] text-lgrey font-light mb-8">
            Iată răspunsul onest bazat pe unde ești cu adevărat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {decisionCards.map((card, i) => (
              <div key={i} className={`bg-cream border-t-[3px] ${card.borderColor} p-6`}>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-lgrey font-medium mb-2">{card.label}</p>
                <p className="font-cormorant text-[18px] text-ink mb-2.5">{card.name}</p>
                <p className="font-sans text-[12px] text-grey leading-[1.6] font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Other Lines Navigation ── */}
      <div className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-16">
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
