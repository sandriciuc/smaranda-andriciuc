'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const faqs = [
  {
    q: 'Nu sunt sigură că business-ul meu e suficient de avansat pentru coaching financiar.',
    a: 'Exact de asta e nevoie de claritate financiară — înainte să fie „suficient de avansat". Lucrăm cu ce există acum, nu cu ce crezi că ar trebui să existe.',
  },
  {
    q: 'Care e diferența dintre programul de grup și 1 la 1?',
    a: 'Grupul este pentru implementare — ai deja o direcție și vrei structură și comunitate să o menții. 1 la 1 este pentru decizie — ești în fața unui pas major și ai nevoie de claritate personalizată, pe cifrele tale.',
  },
  {
    q: 'Cum funcționează sesiunile? Sunt față în față sau online?',
    a: '100% online. Lucrez cu antreprenoare din toată România. Sesiunile sunt pe video, documentele pe care le construim împreună sunt partajate live.',
  },
  {
    q: 'Cât durează să văd rezultate?',
    a: 'La finalul primei sesiuni 1 la 1 pleci cu un instrument concret. Business Plan-ul complet — aproximativ 10 ore de lucru pe parcursul câtorva săptămâni. Nu există „rezultate rapide" — există claritate reală, construită corect.',
  },
  {
    q: 'Eu știu că vreau să fac tranziția, dar nu știu când. Poți să mă ajuți?',
    a: 'Exact asta facem în Business Plan 1 la 1 — calculăm împreună scenariile: dacă rămân la job, dacă plec în 6 luni, dacă plec în 12. La final ai un răspuns concret, cu date, nu o opinie.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-green/10">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-ink text-[15px] font-medium leading-snug flex-1">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-amber text-xl font-light mt-0.5"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-grey text-[14px] leading-[1.75] pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="mb-12">
          <p className="label-style text-brass mb-3">ÎNTREBĂRI FRECVENTE</p>
          <BrassLine className="mb-6" />
          <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,40px)] leading-tight mb-3">
            Întrebări frecvente
          </h2>
          <p className="font-sans text-grey text-[15px]">Răspunsuri clare. Fără vânzare.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
