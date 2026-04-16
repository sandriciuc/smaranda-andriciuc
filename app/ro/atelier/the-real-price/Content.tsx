'use client'

import React from 'react'
import Link from 'next/link'
import { fbqInitiateCheckout } from '@/lib/fbq'

const STRIPE = 'https://book.stripe.com/28EfZaevR9Ta8Z6er02Ry01'

export default function AtelierContent() {
  return (
    <div>

      {/* Hero */}
      <div className="bg-green px-6 py-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: '#B89A6E' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-brass" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass-l">Atelier · 22 Mai 2026 · 10:00–12:00</span>
          </div>
          <h1 className="font-cormorant text-[clamp(42px,6vw,68px)] font-light text-cream leading-[1.05] mb-6">
            Calculează-ți<br /><em className="italic text-brass-l">Prețul Corect</em>
          </h1>
          <p className="font-sans text-[17px] text-cream/75 font-light max-w-xl leading-[1.7] mb-10">
            Muncești mult, vinzi, livrezi — și la final de lună tot nu ești sigură dacă ai câștigat sau ai lucrat în pierdere.{' '}
            <strong className="text-cream font-normal">În 2 ore afli de ce și ce schimbi.</strong>
          </p>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {['2 ore', 'Online', 'Maximum 8 participante', '22 Mai 2026 · 10:00–12:00'].map((pill) => (
              <span key={pill} className="flex items-center gap-2 px-4 py-2 rounded-full border border-brass/30 bg-cream/5 text-cream/80 font-sans text-[12px] font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0" />
                {pill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href={STRIPE} target="_blank" rel="noopener noreferrer" onClick={() => fbqInitiateCheckout(250, 'RON', 'The Real Price')} className="inline-block px-9 py-4 bg-brass text-white font-sans text-[12px] tracking-[1.5px] uppercase rounded-sm transition-all hover:bg-amber">
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
                { k: 'Data', v: '22 Mai 2026 · 10:00–12:00' },
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
              <a href={STRIPE} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 px-9 py-4 bg-brass text-white font-sans text-[12px] tracking-[1.5px] uppercase rounded-sm transition-all hover:bg-amber">
                Rezervă locul tău
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-green px-6 py-20 text-center relative overflow-hidden">
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
          <a href={STRIPE} target="_blank" rel="noopener noreferrer" onClick={() => fbqInitiateCheckout(250, 'RON', 'The Real Price')} className="inline-block px-12 py-[18px] bg-brass text-white font-sans text-[12px] tracking-[2px] uppercase rounded-sm transition-all hover:bg-amber mb-4">
            Rezerv locul meu — 250 lei
          </a>
          <p className="font-sans text-[12px] text-cream/40 font-light leading-[1.6]">
            Plată securizată prin Stripe · Locul este confirmat după plată<br />
            Ai întrebări?{' '}
            <a href="mailto:smaranda.andriciuc@gmail.com" className="text-cream/50 underline underline-offset-2">
              smaranda.andriciuc@gmail.com
            </a>
          </p>
          <div className="mt-10">
            <Link href="/ro/servicii/linia-1" className="font-sans text-[12px] text-cream/30 hover:text-cream/60 transition-colors underline underline-offset-2">
              ← Înapoi la Business & Financial Strategy
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
