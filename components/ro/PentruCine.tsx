'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const dureri = [
  {
    title: 'Nu știi cât produci cu adevărat',
    desc: 'Nici profitul real, nici costul real al timpului tău.',
  },
  {
    title: 'Nu știi ce prețuri sunt corecte',
    desc: 'Și te temi că ceri prea mult sau prea puțin.',
  },
  {
    title: 'Nu știi când e sigur să faci tranziția',
    desc: 'Și amâni pentru că îți e frică să greșești.',
  },
  {
    title: 'Iei decizii din frică, nu din date',
    desc: 'Și asta te blochează mai mult decât orice altceva.',
  },
]

export default function PentruCine() {
  return (
    <section id="pentru-cine" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="label-style text-brass mb-3">AVATARUL CLIENTEI MELE</p>
          <BrassLine className="mb-8" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-cormorant text-ink text-[clamp(32px,4vw,48px)] leading-tight mb-8">
            Ești Laura.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-2xl mb-14">
            <p className="font-sans text-grey text-[15px] leading-[1.75] mb-6">
              Ai un job stabil. Poate unul bun. Dar ceva nu mai funcționează.
              Undeva în mintea ta există o idee — un business, o schimbare, o versiune a muncii
              care să fie cu adevărat a ta.
            </p>
            <p className="font-sans text-grey text-[15px] leading-[1.75]">
              Întrebarea nu este dacă ai curajul.
              <br />
              Întrebarea este dacă cifrele au sens.
            </p>
          </div>
        </AnimatedSection>

        {/* Pain cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
        >
          {dureri.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-cream-d border border-green/10 rounded-2xl p-6"
            >
              <div className="w-8 h-0.5 bg-brass mb-4" />
              <h3 className="font-sans font-semibold text-ink text-[14px] leading-snug mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-grey text-[13px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Normalizer quote */}
        <AnimatedSection delay={0.1}>
          <p className="font-cormorant italic text-green text-[22px] leading-relaxed">
            „Nu e ceva în neregulă cu tine. Îți lipsea structura. Acum o avem."
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
