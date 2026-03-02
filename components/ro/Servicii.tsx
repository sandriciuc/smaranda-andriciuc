'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

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
    ctaHref: '#contact',
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
    ctaHref: '#contact',
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
    ctaHref: '#contact',
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
    ctaHref: '#contact',
  },
]

export default function Servicii() {
  const handleCta = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicii" className="bg-cream-d py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="mb-14">
          <p className="label-style text-brass mb-3">PROGRAME FAB ESSENCE</p>
          <BrassLine className="mb-6" />
          <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,42px)] leading-tight mb-4">
            Trei programe. Un singur scop clar.
          </h2>
          <p className="font-sans text-grey text-[15px]">
            Claritate financiară aplicată pe situația ta reală.
          </p>
        </AnimatedSection>

        {/* Program cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
        >
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-cream-l rounded-2xl p-8 border border-green/8 flex flex-col group hover:border-amber/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              {/* Label + badge */}
              <div className="flex items-start justify-between mb-4">
                <p className="label-style text-brass text-[10px]">{prog.label}</p>
                {prog.badge && (
                  <span className="text-[10px] font-sans font-semibold bg-amber/10 text-amber px-2 py-0.5 rounded-full">
                    {prog.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-cormorant text-ink text-[clamp(22px,2vw,28px)] leading-tight mb-4">
                {prog.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-grey text-[14px] leading-[1.7] mb-6">{prog.description}</p>

              {/* Includes */}
              <ul className="space-y-2 mb-6 flex-1">
                {prog.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-green mt-0.5 flex-shrink-0 text-[13px]">✓</span>
                    <span className="font-sans text-[13px] text-grey leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Quote */}
              {prog.quote && (
                <blockquote className="font-cormorant italic text-green text-[16px] leading-relaxed border-l-2 border-brass pl-4 mb-6">
                  „{prog.quote}"
                </blockquote>
              )}

              {/* Price */}
              {prog.price ? (
                <div className="mb-4">
                  <p className="font-mono text-amber text-[26px] font-medium">{prog.price}</p>
                  {prog.priceLabel && (
                    <p className="label-style text-lgrey text-[10px] mt-1">{prog.priceLabel}</p>
                  )}
                </div>
              ) : (
                <div className="mb-4">
                  {/* PREȚ DE COMPLETAT */}
                  <p className="font-mono text-lgrey text-[14px]">Preț la cerere</p>
                </div>
              )}

              {/* CTA */}
              <motion.button
                onClick={handleCta}
                className="w-full bg-amber text-white font-sans font-medium py-3 rounded-full text-[14px]"
                whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                whileTap={{ scale: 0.97 }}
              >
                {prog.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Guidance text */}
        <AnimatedSection>
          <div className="bg-green-l rounded-2xl p-8 border border-green/20">
            <p className="font-cormorant text-green-d text-[22px] mb-4">Nu știi de unde să începi?</p>
            <p className="font-sans text-grey text-[14px] leading-[1.75]">
              <strong className="text-ink font-medium">Workshopul trimestrial</strong> este intrarea cu cel mai mic angajament —
              vino o dată, lucrează pe o problemă reală și vezi dacă această abordare ți se potrivește.
              <br /><br />
              <strong className="text-ink font-medium">Programul de grup</strong> — pentru cele care sunt deja în mișcare și
              au nevoie de structură.
              <br />
              <strong className="text-ink font-medium">Business Plan 1 la 1</strong> — pentru cele care au o decizie majoră
              în față.
              <br />
              <strong className="text-ink font-medium">Pachetul Premium</strong> — pentru cele care vor să meargă până la
              capăt.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
