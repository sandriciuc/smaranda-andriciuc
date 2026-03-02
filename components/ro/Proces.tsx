'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const steps = [
  {
    number: '01',
    title: 'Conversație de claritate',
    subtitle: '30 min, gratuit',
    desc: 'Vorbim despre situația ta reală. Job, business, venituri, obiective. Pun întrebări directe. Ascult ce nu spun cifrele.',
  },
  {
    number: '02',
    title: 'Diagnostic financiar',
    subtitle: '',
    desc: 'Mapăm ce există, ce lipsește, ce cauzează blocajul. Nu judec — analizez.',
  },
  {
    number: '03',
    title: 'Construim împreună',
    subtitle: '',
    desc: 'Aplicăm instrumentele pe situația ta reală. Scenarii concrete, nu sfaturi generice.',
  },
  {
    number: '04',
    title: 'Pleci cu un document',
    subtitle: '',
    desc: 'Nu un sentiment. Nu inspirație. Un plan, cu cifrele tale, pe care îl poți folosi mâine.',
  },
]

export default function Proces() {
  const handleCta = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="proces" className="bg-cream-d py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-14">
          <p className="label-style text-brass mb-3">METODOLOGIE</p>
          <BrassLine className="mb-6" />
          <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,42px)] leading-tight mb-4">
            Cum lucrăm împreună
          </h2>
          <p className="font-sans text-grey text-[15px]">
            Niciun pas vag. Niciun rezultat vag.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-brass/20 z-0" style={{ width: 'calc(100% - 2rem)', left: '100%' }} />
              )}

              <div className="bg-cream rounded-2xl p-6 border border-green/8 relative z-10 h-full">
                {/* Number */}
                <p className="font-mono text-brass-l text-[11px] font-medium mb-4">{step.number}</p>

                {/* Title */}
                <h3 className="font-cormorant text-ink text-[22px] leading-tight mb-1">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="font-mono text-amber text-[12px] mb-3">{step.subtitle}</p>
                )}

                {/* Divider */}
                <div className="w-8 h-0.5 bg-brass/40 my-3" />

                {/* Description */}
                <p className="font-sans text-grey text-[13px] leading-[1.7]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Validation text */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-green-l rounded-2xl px-8 py-6 border border-green/20">
            <p className="font-cormorant italic text-green text-[20px] leading-relaxed">
              „Poți veni și doar cu «nu știu de unde să încep».
              <br />
              E de ajuns ca să pornim."
            </p>
            <motion.button
              onClick={handleCta}
              className="flex-shrink-0 bg-amber text-white font-sans font-medium px-6 py-3 rounded-full text-[14px] whitespace-nowrap"
              whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              Conversație gratuită →
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
