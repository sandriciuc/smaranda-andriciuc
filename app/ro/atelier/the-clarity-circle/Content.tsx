'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { fbqLead } from '@/lib/fbq'

export default function ClarityCircleContent() {
  const [form, setForm] = useState({ email: '', name: '', phone: '', businessType: '', challenge: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe-ro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, program: 'The Clarity Circle' }),
      })
      if (res.ok) {
        setStatus('success')
        fbqLead('The Clarity Circle')
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>

      {/* Hero */}
      <div className="bg-green px-6 py-16 relative overflow-hidden" style={{ minHeight: '500px' }}>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: '#B89A6E' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-brass" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-brass-l">Fără cost · O dată pe lună</span>
          </div>
          <h1 className="font-cormorant text-[clamp(52px,6vw,80px)] font-light text-cream leading-[1.05] mb-3">
            The Clarity<br /><em className="italic text-brass-l">Circle</em>
          </h1>
          <p className="font-cormorant text-[clamp(18px,2.2vw,24px)] font-light text-cream/60 italic mb-10 leading-[1.4]">
            Un spațiu lunar pentru femei care construiesc serios.
          </p>
          <div className="w-12 h-[2px] bg-brass mb-9" />
          <p className="font-sans text-[15px] text-cream/75 font-light max-w-lg leading-[1.8] mb-12">
            O dată pe lună, un grup mic de femei aduc fiecare câte o situație reală —{' '}
            <strong className="text-cream font-normal">o decizie blocată, o întrebare fără răspuns, un moment de îndoială.</strong>{' '}
            Lucrăm împreună: feedback direct, perspective diferite, gândire colectivă.
          </p>
          <a href="#inscrie" className="inline-block px-9 py-4 bg-amber text-white font-sans text-[11px] tracking-[1.6px] uppercase rounded-sm transition-all hover:bg-[#D4A055]">
            Vreau un loc în cerc
          </a>
        </div>
      </div>

      {/* Strip */}
      <div className="bg-amber py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: 'marquee 18s linear infinite' }}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {['Fără cost', 'O dată pe lună', 'Grup mic', 'Situații reale', 'Feedback direct', 'Fără angajament'].map((item) => (
                <span key={item} className="font-sans text-[10px] tracking-[2.5px] uppercase text-white font-medium flex items-center gap-4 flex-shrink-0">
                  {item} <span className="opacity-50 text-base">·</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* Ce este */}
      <div className="bg-cream px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-5 h-px bg-amber" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-amber">Ce este</span>
            </div>
            <h2 className="font-cormorant text-[clamp(32px,4vw,48px)] font-light text-ink leading-[1.1] mb-6">
              Un spațiu de gândire<br /><em className="italic text-green">colectivă aplicată.</em>
            </h2>
            <div className="font-sans text-[15px] text-grey font-light leading-[1.85] space-y-4">
              <p>
                The Clarity Circle este un grup lunar de lucru pentru femei care au un business — și care vin cu o situație reală,
                nu cu întrebări teoretice.
              </p>
              <p>
                <strong className="text-ink font-medium">O dată pe lună, o oră și jumătate.</strong>{' '}
                Fiecare participantă aduce ceva concret. Lucrăm împreună. Pleci cu o perspectivă pe care nu o aveai când ai intrat.
              </p>
              <p>
                Nu e motivație. Nu e networking. E gândire colectivă aplicată pe situația ta reală.
              </p>
            </div>
          </div>
          <div>
            <blockquote className="border-l-[3px] border-amber pl-6 mb-10">
              <p className="font-cormorant text-[22px] font-light italic text-ink leading-[1.5]">
                „Apartenența la un grup de femei serioase care gândesc clar și se susțin reciproc — fără dramă, fără performanță."
              </p>
            </blockquote>
            <div className="mb-6">
              <p className="font-mono text-[10px] tracking-[1.4px] uppercase text-green font-medium mb-3">Este:</p>
              {['Un grup mic cu situații reale', 'Feedback onest de la femei în aceeași etapă', 'O oră și un sfert în care se lucrează efectiv', 'Gratuit — fără cost, fără obligații'].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-2.5 font-sans text-[14px] text-grey font-light">
                  <span className="text-green text-[15px] mt-0.5">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[1.4px] uppercase text-grey font-medium mb-3">Nu este:</p>
              {['Un curs', 'Coaching individual', 'O comunitate de networking', 'Terapie de grup'].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-2.5 font-sans text-[14px] text-grey font-light">
                  <span className="opacity-40 line-through italic text-[13px] mt-0.5">–</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ce se întâmplă */}
      <div className="bg-green px-6 py-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10" style={{ background: '#C4873A' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-5 h-px bg-amber" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-amber">Cum funcționează</span>
          </div>
          <h2 className="font-cormorant text-[clamp(32px,4vw,48px)] font-light text-cream leading-[1.1] mb-10">
            Ce se întâmplă<br /><em className="italic text-brass-l">într-o sesiune</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-cream/10">
            {[
              { n: '01', label: 'Check-in', body: 'Fiecare participantă spune unde se află și ce aduce în sesiune.' },
              { n: '02', label: 'Situații în lucru', body: 'Situațiile intră în lucru — analizăm, punem întrebări, oferim perspectivă.' },
              { n: '03', label: 'Feedback colectiv', body: 'Nu sfaturi. Întrebări bune și observații directe din parte unui grup care înțelege contextul.' },
              { n: '04', label: 'Un pas clar', body: 'Pleci cu ceva concret — o decizie clarificată, o întrebare rezolvată, o direcție.' },
            ].map((card) => (
              <div key={card.n} className="bg-green-d p-10 relative">
                <div className="absolute top-7 right-8 font-cormorant text-[60px] font-light text-amber/15 leading-none">{card.n}</div>
                <p className="font-mono text-[9px] tracking-[2px] uppercase text-amber mb-4">{card.label}</p>
                <p className="font-sans text-[14px] text-cream/65 font-light leading-[1.75]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pentru cine */}
      <div className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-5 h-px bg-amber" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-amber">Potrivire</span>
          </div>
          <h2 className="font-cormorant text-[clamp(32px,4vw,48px)] font-light text-ink leading-[1.1] mb-10">
            Este pentru tine<br /><em className="italic text-green">dacă...</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green p-10">
              <p className="font-mono text-[10px] tracking-[2px] uppercase text-amber font-medium mb-6">Vino dacă</p>
              {[
                'Ai un business — orice stadiu, orice formă',
                'Ai o situație reală pe care vrei să o gândești împreună',
                'Ești deschisă la feedback direct și onest',
                'Vrei să ieși din camera ta cu o perspectivă nouă',
                'Cauți un spațiu serios, fără performanță',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-4 font-sans text-[14px] text-cream/80 font-light leading-[1.55]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" />
                  {item}
                </div>
              ))}
            </div>
            <div className="border border-ink/10 p-10">
              <p className="font-mono text-[10px] tracking-[2px] uppercase text-grey font-medium mb-6">Nu e potrivit dacă</p>
              {[
                'Cauți un grup de motivație sau inspirație',
                'Vrei să înveți un subiect nou de la zero',
                'Nu ai nimic concret de adus în sesiune',
                'Preferi un format 1:1 exclusiv cu coach',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-4 font-sans text-[14px] text-grey font-light leading-[1.55]">
                  <span className="w-4 h-px bg-cream-d flex-shrink-0 mt-2.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Format */}
      <div className="bg-cream px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-5 h-px bg-amber" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-amber">Format</span>
          </div>
          <h2 className="font-cormorant text-[clamp(32px,4vw,48px)] font-light text-ink leading-[1.1] mb-10">
            Detalii <em className="italic text-green">practice</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 bg-ink/8">
            {[
              { title: 'Format', body: 'Online · grup mic' },
              { title: 'Frecvență', body: 'O dată pe lună' },
              { title: 'Cost', body: 'Gratuit\nFără angajament, fără obligații' },
            ].map((card) => (
              <div key={card.title} className="bg-white p-10 text-center">
                <h3 className="font-cormorant text-[22px] font-light text-ink mb-3">{card.title}</h3>
                <p className="font-sans text-[13px] text-grey font-light leading-[1.75] whitespace-pre-line">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote full */}
      <div className="bg-amber px-6 py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-cormorant text-[clamp(26px,3.5vw,42px)] font-light italic text-white leading-[1.35]">
            Nu îți spun că poți. Îți arăt că poți. Cu cifrele tale, nu ale altcuiva.
          </p>
        </div>
      </div>

      {/* Form / Înscriere */}
      <div id="inscrie" className="bg-green px-6 py-16 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10" style={{ background: '#C4873A' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-5 h-px bg-amber" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-amber">Acces</span>
              </div>
              <h2 className="font-cormorant text-[clamp(32px,4vw,48px)] font-light text-cream leading-[1.1] mb-6">
                Rezervă-ți<br /><em className="italic text-brass-l">locul.</em>
              </h2>
              <p className="font-sans text-[15px] text-cream/65 font-light leading-[1.85] mb-10">
                Completează formularul și vei primi prin email data următoarei sesiuni și linkul de acces.{' '}
                <strong className="text-cream font-normal">Fără cost. Fără obligații.</strong>
              </p>
              <div className="flex flex-col gap-3.5">
                {[
                  'Locul este confirmat după completarea formularului',
                  'Primești data și linkul cu minimum 48h înainte',
                  'Poți veni o dată sau lunar — alegerea îți aparține',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 font-sans text-[14px] text-cream/65 font-light leading-[1.55]">
                    <div className="w-[18px] h-[18px] border border-amber flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="#C4873A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream/5 border border-cream/12 p-10">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <p className="font-cormorant text-[28px] font-light text-cream mb-3">Mulțumesc!</p>
                  <p className="font-sans text-[14px] text-cream/60 font-light leading-[1.7]">
                    Ai fost adăugată pe lista de acces. Vei primi data și linkul pentru următoarea sesiune.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-cormorant text-[28px] font-light text-cream mb-1.5 leading-[1.2]">Vreau un loc</h3>
                  <p className="font-sans text-[12px] text-cream/40 font-light mb-8">Fără cost · Fără angajament</p>

                  <div className="mb-4">
                    <label className="block font-mono text-[10px] tracking-[1.2px] uppercase text-cream/45 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="adresa@email.ro"
                      className="w-full bg-white border border-cream/14 text-ink font-sans text-[14px] font-light px-4 py-3.5 outline-none focus:border-amber placeholder:text-ink/30 transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block font-mono text-[10px] tracking-[1.2px] uppercase text-cream/45 mb-2">Nume complet</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Nume și prenume"
                      className="w-full bg-white border border-cream/14 text-ink font-sans text-[14px] font-light px-4 py-3.5 outline-none focus:border-amber placeholder:text-ink/30 transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block font-mono text-[10px] tracking-[1.2px] uppercase text-cream/45 mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+40 7xx xxx xxx"
                      className="w-full bg-white border border-cream/14 text-ink font-sans text-[14px] font-light px-4 py-3.5 outline-none focus:border-amber placeholder:text-ink/30 transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block font-mono text-[10px] tracking-[1.2px] uppercase text-cream/45 mb-2">Tipul businessului tău</label>
                    <input
                      type="text"
                      value={form.businessType}
                      onChange={e => setForm(f => ({ ...f, businessType: e.target.value }))}
                      placeholder="ex: servicii, produse, consultanță..."
                      className="w-full bg-white border border-cream/14 text-ink font-sans text-[14px] font-light px-4 py-3.5 outline-none focus:border-amber placeholder:text-ink/30 transition-colors"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block font-mono text-[10px] tracking-[1.2px] uppercase text-cream/45 mb-2">Cu ce vii în sesiune?</label>
                    <textarea
                      value={form.challenge}
                      onChange={e => setForm(f => ({ ...f, challenge: e.target.value }))}
                      placeholder="O situație, o decizie, o întrebare..."
                      rows={3}
                      className="w-full bg-white border border-cream/14 text-ink font-sans text-[14px] font-light px-4 py-3.5 outline-none focus:border-amber placeholder:text-ink/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-amber text-white font-sans text-[11px] tracking-[1.6px] uppercase py-4 transition-all hover:bg-[#D4A055] disabled:opacity-60 mt-2"
                  >
                    {status === 'loading' ? 'Se trimite...' : 'Vreau un loc în cerc'}
                  </button>

                  {status === 'error' && (
                    <p className="font-sans text-[12px] text-red-300 text-center mt-3">A apărut o eroare. Încearcă din nou sau scrie la smaranda.andriciuc@gmail.com</p>
                  )}

                  <p className="font-sans text-[11px] text-cream/30 text-center mt-4 leading-[1.5]">
                    Datele tale sunt în siguranță. Nu vei primi spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="bg-green-d px-6 py-8 text-center">
        <Link href="/ro/servicii/linia-1" className="font-sans text-[12px] text-cream/30 hover:text-cream/60 transition-colors underline underline-offset-2">
          ← Înapoi la Business & Financial Strategy
        </Link>
      </div>

    </div>
  )
}
