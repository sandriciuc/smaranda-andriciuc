'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LeadModal from '@/components/ro/LeadModal'

const CALENDAR_RO = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ry9vssDsBo7WjTR72KjN3x-9a14mY9NJfHcd3H9PeoAD0vX0t_mUmnJdrCKwHZ5q5H1vbfeTU'

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

function CtaBtn({ href, variant, onClick, children }: { href?: string; variant?: string; onClick?: () => void; children: React.ReactNode }) {
  const base = 'inline-block px-8 py-3.5 text-[11px] tracking-[1.5px] uppercase font-medium font-sans transition-all duration-200 rounded-sm cursor-pointer'
  const styles: Record<string, string> = {
    outline: 'border border-green text-green hover:bg-green hover:text-cream',
    green:   'bg-green text-cream hover:bg-green-d',
    amber:   'bg-amber text-white hover:brightness-90',
    dark:    'bg-ink text-cream hover:bg-[#333]',
  }
  const isExternal = href?.startsWith('http')
  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={`${base} ${styles[variant || 'green']}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.button>
    )
  }
  return (
    <motion.a
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`${base} ${styles[variant || 'green']}`}
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
  ctaHref?: string
  ctaVariant?: string
  ctaNote?: string
}

function TierCard({ badge, id, title, subtitle, priceMain, priceNote, priceGreen, desc, includes, testimonial, ctaText, ctaHref, ctaVariant, ctaNote }: TierCardProps) {
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
      <CtaBtn href={ctaHref || '/ro#contact'} variant={ctaVariant}>{ctaText}</CtaBtn>
      {ctaNote && <p className="font-sans text-[12px] text-lgrey mt-3 font-light">{ctaNote}</p>}
    </div>
  )
}

/* ─── Static data ────────────────────────────────────────────── */

const flowSteps = [
  { id: '1', name: 'The Clarity Circle / The Money Map', sub: 'Intrare gratuită — înțelegi unde ești' },
  { id: '2', name: 'The Real Price', sub: 'Prețul corect, calculat' },
  { id: '3', name: 'The Financial Lab / Decision', sub: 'Construiești planul de business' },
  { id: '4', name: 'The Implementation Circle / The Advisory', sub: 'Execuți cu suport' },
]

const decisionCards = [
  {
    borderColor: 'border-t-green',
    label: 'Dacă ești încă în stadiul de a înțelege întrebarea',
    name: 'The Clarity Circle',
    desc: 'Vino o dată. Fără angajament. Un grup mic, o situație reală, o perspectivă nouă.',
  },
  {
    borderColor: 'border-t-green',
    label: 'Dacă vrei să începi să construiești singură',
    name: 'The Money Map',
    desc: 'Gratuit, autogestionat, 6 săptămâni. Primul pas potrivit dacă înveți prin practică și vrei un instrument — nu o conversație.',
  },
  {
    borderColor: 'border-t-brass',
    label: 'Dacă ai o problemă specifică de rezolvat',
    name: 'Atelier',
    desc: '250 lei. Vino pentru o sesiune, lucrează pe o temă reală. Vezi dacă abordarea ți se potrivește.',
  },
  {
    borderColor: 'border-t-brass',
    label: 'Dacă ești deja în mișcare și ai nevoie de structură',
    name: 'The Financial Lab',
    desc: 'Șase luni, grup de maximum 6 femei. Nu ești la zero — dar nu ai încă un plan financiar funcțional.',
  },
  {
    borderColor: 'border-t-green',
    label: 'Dacă ai o decizie majoră în față',
    name: 'The Financial Decision',
    desc: 'Planul tău. Cifrele tale. Răspunsul la: «Când pot face tranziția în siguranță?» — cu dovezi, nu cu speranță.',
  },
  {
    borderColor: 'border-t-amber',
    label: 'Dacă ai un plan și trebuie să-l execuți',
    name: 'Implementation & Advisory',
    desc: 'The Implementation Circle (grup) sau The Adisory — disponibil după finalizarea unui The Financiat Lab sau Decision.',
  },
]

const otherLines = [
  { number: '02', title: 'Operations & Systems Consultancy | Business Architecture', href: '/ro/servicii/linia-2' },
  { number: '03', title: 'Leadership Coaching for Entrepreneurs & Leaders', href: '/ro/servicii/linia-3' },
]

/* ─── Main component ─────────────────────────────────────────── */

export default function LiniaUna() {
  const [modalProgram, setModalProgram] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <LeadModal
        isOpen={modalProgram !== null}
        onClose={() => setModalProgram(null)}
        program={modalProgram || ''}
      />

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
            Business & Financial Strategy<br /><em className="italic text-green">Consultancy & Mentoring</em>
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
          
          </p>

          {/* 1A + 1B — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 1A The Clarity Circle */}
            <div className="relative bg-white border border-cream-d py-11 px-10">
              <Badge text="Fără cost" variant="free" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7 pt-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">1A · Lunar</p>
                  <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">The Clarity Circle</h3>
                  <p className="font-sans text-[13px] text-lgrey font-light italic">Un spațiu lunar pentru femei care construiesc serios.</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="font-cormorant text-[36px] font-medium leading-none text-green">Fără cost</p>
                  <p className="font-sans text-[11px] text-lgrey mt-1 font-light">Lunar</p>
                </div>
              </div>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-4">
                O dată pe lună, un grup mic de femei aduc fiecare câte o situație reală — o decizie blocată, o întrebare fără răspuns, un moment de îndoială. Lucrăm împreună: feedback direct, perspective diferite, gândire colectivă.
              </p>
              <p className="font-sans text-[14px] text-ink font-medium mb-4">
                Nu terapie. Nu motivație. Nu prezentări.
              </p>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-6">
                Un spațiu în care nu ești singura care trece prin asta — și unde primești reacții reale, nu încurajări vagi.
              </p>
              <div className="mb-5">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brass font-semibold mb-3">Ce se întâmplă concret</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-green font-semibold text-[12px] flex-shrink-0 mt-0.5">✓</span>
                    <span className="font-sans text-ink text-[13px] leading-snug">Îți aduci situația. Grupul ascultă. Primești feedback direct — de la mine și de la celelalte femei din cerc.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-green font-semibold text-[12px] flex-shrink-0 mt-0.5">✓</span>
                    <span className="font-sans text-ink text-[13px] leading-snug">Pleci cu o perspectivă pe care nu o aveai când ai intrat.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-cream-d px-5 py-4 mb-7 space-y-2">
                <p className="font-sans text-[12px] text-lgrey font-light leading-relaxed">
                  <strong className="text-ink font-medium">Nu e:</strong> Un curs. Coaching individual. O comunitate de networking.
                </p>
                <p className="font-sans text-[12px] text-grey font-light leading-relaxed">
                  <strong className="text-ink font-medium">E de fapt:</strong> Apartenența la un grup de femei serioase care gândesc clar și se susțin reciproc — fără dramă, fără performanță.
                </p>
              </div>
              <CtaBtn variant="outline" onClick={() => setModalProgram('The Clarity Circle')}>Încep aici</CtaBtn>
            </div>

            {/* 1B The Money Map */}
            <div className="relative bg-white border border-cream-d py-11 px-10">
              <Badge text="Fără cost" variant="free" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7 pt-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">1B · 6 Săptămâni</p>
                  <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">The Money Map</h3>
                  <p className="font-sans text-[13px] text-lgrey font-light italic">Un instrument. Cifrele tale. Control din prima zi.</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="font-cormorant text-[36px] font-medium leading-none text-green">Fără cost</p>
                  <p className="font-sans text-[11px] text-lgrey mt-1 font-light">Fără sesiuni live obligatorii</p>
                </div>
              </div>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-7">
                Primești template-ul Excel complet de la început — îl poți deschide, completa și folosi imediat, fără să aștepți nimic. Sau îl integrezi în viața ta pe parcursul a 6 săptămâni, cu instrucțiuni ghidate livrate pas cu pas. La final nu ai un rezumat. Ai o hartă financiară funcțională a situației tale reale — pe care o poți folosi independent, oricând.
              </p>
              <Includes items={[
                'Template Excel Money Map — structura ta, cifrele tale, de la prima zi',
                '6 săptămâni de instrucțiuni ghidate livrate periodic',
                'Auto-gestionat — fără sesiuni live obligatorii, fără calendar impus',
                'Fundația clară pentru orice decizie financiară urmează',
              ]} />
              <CtaBtn variant="outline" onClick={() => setModalProgram('The Money Map')}>Încep cu The Money Map</CtaBtn>
            </div>
          </div>

          {/* 2 — The Real Price */}
          <div className="mb-6">
            <TierCard
              badge={{ text: 'Intrare', variant: 'entry' }}
              id="2 · Atelier · De 4× pe an · 2 ore"
              title="The Real Price"
              subtitle="Un subiect. 90 de minute. Un număr pe care îl știi cu certitudine."
              priceMain={<>250 <span className="text-[16px] font-light">lei</span></>}
              priceNote="Per sesiune · Atelier de 2 ore"
              desc="Prețul corect nu e ce simți că poți cere. E costuri directe + costuri indirecte + marjă + timp — calculat, nu ghicit. În 2 ore lucrezi exact asta, aplicat pe situația ta, în sesiune. Pleci cu un instrument funcțional pe care îl poți folosi a doua zi. Nu teorie. Nu inspirație."
              includes={[
                'Calculul prețului minim sustenabil — pe serviciile tale, cu cifrele tale',
                'Instrument financiar aplicat în sesiune, nu acasă singură',
                'Mini-template de luat cu tine',
                'Primul pas concret în metodă — fără angajament mare',
              ]}
              ctaText="Vreau la The Real Price"
              ctaVariant="green"
            />

            {/* ── Atelier Landing ── */}

            {/* Hero */}
            <div className="bg-green px-6 py-16 relative overflow-hidden mt-0">
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: '#B89A6E' }} />
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-px bg-brass" />
                  <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass-l">Atelier · Mai 2027</span>
                </div>
                <h2 className="font-cormorant text-[clamp(42px,6vw,68px)] font-light text-cream leading-[1.05] mb-6">
                  Calculează-ți<br /><em className="italic text-brass-l">Prețul Corect</em>
                </h2>
                <p className="font-sans text-[17px] text-cream/75 font-light max-w-xl leading-[1.7] mb-10">
                  Muncești mult, vinzi, livrezi — și la final de lună tot nu ești sigură dacă ai câștigat sau ai lucrat în pierdere.{' '}
                  <strong className="text-cream font-normal">În 2 ore afli de ce și ce schimbi.</strong>
                </p>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {['2 ore', 'Online', 'Maximum 8 participante', 'Mai 2027 · dată exactă prin email'].map((pill) => (
                    <span key={pill} className="flex items-center gap-2 px-4 py-2 rounded-full border border-brass/30 bg-cream/5 text-cream/80 font-sans text-[12px] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0" />
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-5">
                  <a href="#atelier-inscrie-te" className="inline-block px-9 py-4 bg-brass text-white font-sans text-[12px] tracking-[1.5px] uppercase rounded-sm transition-all hover:bg-amber">
                    Vreau un loc — 250 lei
                  </a>
                  <span className="font-sans text-[13px] text-cream/50 font-light">
                    Plată prin Stripe · <strong className="text-cream/80 font-normal">Condiții flexibile</strong> la cerere
                  </span>
                </div>
              </div>
            </div>

            {/* Urgency bar */}
            <div className="bg-[#F5EFE6] border-t border-b border-brass/25 px-6 py-3.5 flex items-center justify-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
              <p className="font-sans text-[13px] text-grey text-center">
                Maximum <strong className="text-amber font-medium">8 locuri</strong> — atelier mic, lucru aplicat pe situația ta reală. Când locurile sunt ocupate, lista se închide.
              </p>
              <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
            </div>

            {/* Problema */}
            <div className="bg-white px-6 py-16">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-px bg-brass" />
                  <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass">De ce ești aici</span>
                </div>
                <h2 className="font-cormorant text-[clamp(28px,4vw,42px)] font-light text-green leading-[1.15] mb-8">
                  Recunoști vreuna<br />din situațiile <em className="italic text-brass">astea?</em>
                </h2>
                <ul className="divide-y divide-green/10 border-t border-green/10">
                  {[
                    { bold: 'Ai un preț „care pare ok"', rest: '— dar nu știi dacă acoperă toate costurile reale, inclusiv timpul tău.' },
                    { bold: 'Ai servicii și produse handmade în același business', rest: '— și nu știi cum să calculezi corect fiecare în parte.' },
                    { bold: 'Ți-e frică să crești prețul', rest: '— că pierzi clienții actuali, că e prea mult, că alții cer mai puțin.' },
                    { bold: 'Calculezi „în cap"', rest: '— sau după ce simți tu că e corect, nu după un sistem care îți arată realitatea.' },
                    { bold: 'La final de lună ești obosită', rest: ', ai vândut, dar nu înțelegi de ce nu rămâne nimic în cont.' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start py-5 font-sans text-[15px] text-grey leading-[1.6]">
                      <div className="w-4 h-px bg-brass flex-shrink-0 mt-3" />
                      <span><strong className="text-ink font-medium">{item.bold}</strong> {item.rest}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-2 border-brass pl-7 py-4 mt-10 font-cormorant text-[22px] italic text-green font-light leading-[1.45]">
                  „Blocajul tău nu e lipsă de valoare.<br />E lipsa unui calcul corect."
                </blockquote>
              </div>
            </div>

            {/* Ce primești */}
            <div className="bg-cream px-6 py-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-px bg-brass" />
                  <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass">Ce se întâmplă în 2 ore</span>
                </div>
                <h2 className="font-cormorant text-[clamp(28px,4vw,42px)] font-light text-green leading-[1.15] mb-8">
                  Nu teorie. Nu motivație.<br /><em className="italic text-brass">2 ore de lucru aplicat.</em>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { n: '01', title: 'Calculul prețului minim sustenabil', desc: 'Aplicat pe serviciile și produsele tale, cu cifrele tale reale — nu cu medii de industrie sau exemple generice.' },
                    { n: '02', title: 'Instrumentul Excel complet', desc: 'Detaliat, simplu de folosit și editabil oricând. Îl deschizi a doua zi și știi exact ce să faci cu el.' },
                    { n: '03', title: 'Claritate despre unde greșeai', desc: 'Nu o listă de sfaturi. O înțelegere concretă a de ce prețul tău actual nu reflectă munca depusă.' },
                    { n: '04', title: 'Răspuns la întrebarea „cu cât?"', desc: 'Nu o estimare vagă. Un număr calculat, pe care îl știi cu certitudine și pe care îl poți justifica oricând.' },
                  ].map((card) => (
                    <div key={card.n} className="bg-white border border-green/10 rounded-sm p-8 hover:shadow-md transition-shadow">
                      <div className="font-cormorant text-[36px] font-light text-brass leading-none mb-3">{card.n}</div>
                      <div className="font-sans text-[15px] font-medium text-ink mb-2 leading-snug">{card.title}</div>
                      <div className="font-sans text-[13.5px] text-grey font-light leading-[1.6]">{card.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimoniale */}
            <div className="bg-green px-6 py-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-px bg-brass-l" />
                  <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass-l">Ce spun participantele</span>
                </div>
                <h2 className="font-cormorant text-[clamp(28px,4vw,42px)] font-light text-cream leading-[1.15] mb-10">
                  De la atelierul<br /><em className="italic text-brass-l">din decembrie 2025</em>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { text: '„Workshopul a fost structurat, logic și ușor de pus în practică. Am înțeles unde greșeam, cum pot calcula corect costurile și ce pot îmbunătăți pentru ca prețurile mele să reflecte realmente munca depusă."', author: 'Georgeta · dec. 2025' },
                    { text: '„Am avut multe aha-uri valoroase. Smaranda chiar știe ce întrebări să îți pună astfel încât să vezi situația din altă perspectivă și să înțelegi că valoarea nu este doar materială."', author: 'Ioana · dec. 2025' },
                    { text: '„Am plecat cu mai multă claritate și cu un instrument practic de lucru. Instrumentul creat de Smaranda pentru calcule corecte de preț este foarte detaliat, simplu de folosit și editabil oricând este cazul."', author: 'Evelynne · dec. 2025' },
                  ].map((t, i) => (
                    <div key={i} className="border border-brass/20 bg-white/5 rounded-sm p-7">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, s) => (
                          <div key={s} className="w-3 h-3 bg-brass flex-shrink-0" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                        ))}
                      </div>
                      <p className="font-sans text-[14px] text-cream/80 italic font-light leading-[1.7] mb-5">{t.text}</p>
                      <div className="font-mono text-[11px] tracking-[1.5px] uppercase text-brass-l">{t.author}</div>
                      <div className="font-sans text-[11px] text-cream/30 mt-1 font-light">Review public Facebook</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pentru cine */}
            <div className="bg-white px-6 py-16">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-px bg-brass" />
                  <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass">Potrivire</span>
                </div>
                <h2 className="font-cormorant text-[clamp(28px,4vw,42px)] font-light text-green leading-[1.15] mb-8">
                  Este atelierul <em className="italic text-brass">pentru tine?</em>
                </h2>
                <div className="divide-y divide-green/10 border-t border-green/10">
                  {[
                    'Ai un business — servicii, produse handmade sau ambele',
                    'Ai un job și construiești ceva în paralel',
                    'Nu ai un sistem clar de calcul al prețului',
                    'Vrei să pleci cu ceva aplicabil imediat, nu cu teorie',
                    'Ești dispusă să lucrezi cu cifrele tale reale în sesiune',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start py-4 font-sans text-[15px] text-grey leading-[1.6]">
                      <div className="w-4 h-px bg-green flex-shrink-0 mt-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detalii practice */}
            <div className="bg-[#F5EFE6] px-6 py-16">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-px bg-brass" />
                  <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass">Detalii practice</span>
                </div>
                <h2 className="font-cormorant text-[clamp(28px,4vw,42px)] font-light text-green leading-[1.15] mb-8">
                  Tot ce trebuie<br /><em className="italic text-brass">să știi.</em>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="divide-y divide-brass/20 border-t border-brass/20">
                    {([
                      { k: 'Format', v: 'Online' },
                      { k: 'Durată', v: '2 ore' },
                      { k: 'Locuri', v: <strong key="loc" className="text-green font-medium">Maximum 8 participante</strong> },
                      { k: 'Data', v: 'Mai 2027 · comunicată prin email' },
                      { k: 'Preț', v: <span key="pret" className="font-cormorant text-[32px] font-medium text-green leading-none">250 lei</span> },
                      { k: 'Plată', v: 'Stripe · condiții flexibile la cerere' },
                    ] as { k: string; v: React.ReactNode }[]).map((row) => (
                      <div key={row.k} className="flex justify-between items-baseline gap-4 py-3.5">
                        <span className="font-mono text-[11px] tracking-[1.5px] uppercase text-grey flex-shrink-0">{row.k}</span>
                        <span className="font-sans text-[15px] text-ink text-right">{row.v}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-sans text-[13px] text-grey italic font-light leading-[1.65] p-5 bg-white border-l-2 border-brass rounded-r-sm">
                      Prețul este fix. Dacă ai nevoie de o altă structură de plată, scrie-mi — găsim o soluție.
                    </p>
                    <a href="#atelier-inscrie-te" className="inline-block mt-5 px-9 py-4 bg-brass text-white font-sans text-[12px] tracking-[1.5px] uppercase rounded-sm transition-all hover:bg-amber">
                      Rezervă locul tău
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div id="atelier-inscrie-te" className="bg-green px-6 py-20 text-center relative overflow-hidden">
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: '#B89A6E' }} />
              <div className="relative z-10 max-w-xl mx-auto">
                <div className="flex items-center justify-center gap-2.5 mb-5">
                  <div className="w-6 h-px bg-brass-l" />
                  <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass-l">Maximum 8 locuri</span>
                  <div className="w-6 h-px bg-brass-l" />
                </div>
                <h2 className="font-cormorant text-[clamp(32px,5vw,52px)] font-light text-cream leading-[1.1] mb-4">
                  Rezervă-ți locul<br /><em className="italic text-brass-l">acum.</em>
                </h2>
                <p className="font-sans text-[15px] text-cream/65 font-light mb-9 leading-[1.65]">
                  2 ore. Un instrument practic. Claritate despre ce schimbi mâine.<br />Pleci cu calculul tău real, nu cu o promisiune vagă.
                </p>
                <a href="https://book.stripe.com/28EfZaevR9Ta8Z6er02Ry01" className="inline-block px-12 py-[18px] bg-brass text-white font-sans text-[12px] tracking-[2px] uppercase rounded-sm transition-all hover:bg-amber mb-4">
                  Rezerv locul meu — 250 lei
                </a>
                <p className="font-sans text-[12px] text-cream/40 font-light leading-[1.6]">
                  Plată securizată prin Stripe · Locul este confirmat după plată<br />
                  Ai întrebări?{' '}
                  <a href="mailto:smaranda.andriciuc@gmail.com" className="text-cream/50 underline underline-offset-2">
                    smaranda.andriciuc@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 3A + 3B — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TierCard
              badge={{ text: 'Program de Grup', variant: 'group' }}
              id="3A · 6 Luni"
              title="The Financial Lab"
              subtitle="Construcție Financiară în Grup. Structurată. Reală. În 6 luni."
              priceMain={<>2.250 <span className="text-[16px] font-light">lei</span></>}
              priceNote="/ 6 luni · format de grup"
              desc="O sesiune ghidată pe lună. Instrumente financiare, template-uri de lucru și un grup de maximum 6 femei care fac aceeași muncă în același timp. Nu urmărești un curs. Construiești — pas cu pas, cu feedback real pe cifrele tale, fără să sari peste părțile dificile. La final ai un sistem financiar funcțional pe care îl înțelegi și îl folosești singură."
              includes={[
                '6 sesiuni lunare ghidate de 1,5 ore — structurate, nu improvizate',
                'Instrumente financiare și template-uri de lucru aplicabile imediat',
                'Feedback direct pe cifrele tale — de la mine și din grup',
                'Accountability structurat între sesiuni — nu dispari și reapari lunar',
                'Un grup de maximum 6 femei în aceeași etapă — fără zgomot, fără audiență, cu prezență reală',
              ]}
              testimonial="Un sistem financiar pe care nu îl mai eviți. Știi costurile, marjele, break-even-ul. Verifici cifrele lunar pentru că acum au sens."
              ctaText="Mă înscriu la The Financial Lab"
              ctaHref={CALENDAR_RO}
              ctaVariant="green"
              ctaNote="Rezervă o conversație de 30 de minute — fără angajament. Analizăm situația ta împreună și vei ști dacă acesta este următorul pas potrivit."
            />
            <TierCard
              badge={{ text: '★ Cel mai ales', variant: 'star' }}
              id="3B · Personalizat"
              title="The Financial Decision"
              subtitle="For women who are done guessing."
              priceMain={<>3.600 <span className="text-[16px] font-light">lei</span></>}
              priceNote="sesiuni adaptate nevoii tale"
              desc="Un proces de lucru de 3 sau 4 sesiuni 1:1 construit în jurul situației tale reale — cifrele tale, business-ul tău, decizia ta. Lucrăm împreună în sesiuni adaptate nevoii tale. Analizăm ce există, construim ce lipsește, calculăm scenariile reale. La final știi exact unde ești, ce e fezabil și când."
              includes={[
                'Un business plan financiar complet pentru 12 luni — construit pe datele tale, nu pe medii de industrie',
                'Un instrument Excel pe care îl folosești și adaptezi singură după ce pleci',
                'Un plan de acțiune săptămânal pentru primele 3 luni — concret, aplicabil de a doua zi',
                'Un document de o pagină cu tot ce contează — pentru momentele când ai nevoie să vezi clar dintr-o privire',
                'Suport real între sesiuni — nu ești singură în proces',
              ]}
              testimonial="Permisiunea rațională de a decide — bazată pe cifre reale, nu pe speranță."
              ctaText="Vreau planul meu"
              ctaHref={CALENDAR_RO}
              ctaVariant="amber"
              ctaNote="Rezervă o conversație de 30 de minute — fără angajament. Analizăm situația ta împreună și vei ști dacă acesta este următorul pas potrivit."
            />
          </div>

          {/* 4A + 4B — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            <TierCard
              badge={{ text: 'Grup · Continuu', variant: 'group' }}
              id="4A · Lunar · Format de grup"
              title="The Implementation Circle"
              subtitle="Ai planul. Acum urmează execuția."
              priceMain={<>450 <span className="text-[16px] font-light">lei</span></>}
              priceNote="/ lună · format de grup"
              desc="Să-l execuți în condiții reale, cu obstacole reale, în timp real. Sesiuni lunare de grup pentru a revizui cifrele, ajusta strategia, menține direcția. Diferența dintre a ști ce să faci și a face efectiv."
              includes={[
                'Sesiune lunară de grup — revizuire, ajustare, recalibrare',
                'Revizuirea planului pe baza rezultatelor reale',
                'Ajustări de strategie în timp real în cadrul grupului',
                'Structură de accountability între sesiuni',
                'Acces la colege care implementează și ele',
              ]}
              testimonial="Verific cifrele, ajustez, decid fără panică."
              ctaText="Vreau la The Implementation Circle"
              ctaHref={CALENDAR_RO}
              ctaVariant="green"
              ctaNote="Disponibil după finalizarea The Financial Decision."
            />
            <TierCard
              badge={{ text: 'Premium', variant: 'premium' }}
              id="4B · Lunar · 1:1 · Termen lung"
              title="The Advisory"
              subtitle="Nu un plan. Un partener care îți cunoaște business-ul."
              priceMain={<>1.200+ <span className="text-[16px] font-light">lei</span></>}
              priceNote="/ lună · preț la cerere"
              desc="Există o diferență între a ști ce să faci și a avea pe cineva care cunoaște cifrele tale, contextul tău, deciziile tale — și e acolo când contează cel mai mult. The Advisory e pentru cele care au depășit faza de clarificare și vor suport strategic continuu, personalizat, fără să o ia de la zero la fiecare sesiune. Revizuim rezultatele. Ajustăm direcția. Luăm decizii împreună când presiunea e reală."
              includes={[
                'Sesiuni lunare de strategie 1:1 — pe cifrele și contextul tău real',
                'Acces continuu pentru decizii urgente între sesiuni',
                'Revizuirea continuă a planului pe baza rezultatelor reale',
                'Ajustări de strategie în timp real',
                'Continuitate deplină — îți cunosc business-ul, cifrele, contextul',
              ]}
              testimonial="Nu sunt doar informată — m-am transformat în modul în care mă raportez la business."
              ctaText="Aplică pentru The Advisory"
              ctaHref={CALENDAR_RO}
              ctaVariant="dark"
              ctaNote="Disponibil după finalizarea The Financial Decision · Prețul se discută în funcție de contextul tău."
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
