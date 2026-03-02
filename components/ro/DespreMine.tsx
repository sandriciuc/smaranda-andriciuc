'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

const credentials = [
  { icon: '📐', text: 'Inginer UTCB + Economist ASE București' },
  { icon: '🏆', text: 'Certificată ICF & EMCC (coaching)' },
  { icon: '🇧🇪', text: 'Bazată în Belgia, lucrez online cu antreprenoare din România' },
  { icon: '⚙️', text: '20+ ani sisteme tehnice, operaționale și financiare' },
  { icon: '💼', text: 'Expertiză: contabilitate belgiană, analiză financiară, coaching de tranziție' },
]

export default function DespreMine() {
  return (
    <section id="despre" className="bg-green py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Photo placeholder */}
          <AnimatedSection variant="fadeIn">
            <div className="relative">
              {/* Photo placeholder */}
              <div
                className="w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl bg-green-d flex items-center justify-center border border-brass/20"
              >
                <div className="text-center">
                  <div className="text-brass/40 text-5xl mb-3">◻</div>
                  <p className="font-sans text-brass-l/60 text-sm">[Foto Smaranda]</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border border-brass/20 -z-10" />
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <div>
            <AnimatedSection delay={0.1}>
              <p className="label-style text-brass-l mb-3">DESPRE MINE</p>
              <BrassLine className="mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 className="font-cormorant text-cream text-[clamp(28px,3.5vw,42px)] leading-[1.15] mb-8">
                Inginer care a învățat că cifrele
                <br />
                <em>sunt cel mai empatic limbaj.</em>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="font-sans text-cream/80 text-[15px] leading-[1.75] space-y-4 mb-8">
                <p>
                  Sunt Smaranda — consultant operațional și mentor de claritate financiară,
                  cu baza în Bornem, Belgia.
                </p>
                <p>
                  Peste 20 de ani am construit sisteme în medii tehnice și industriale —
                  în România și în Belgia. Astăzi aduc aceeași precizie inginerească
                  în deciziile financiare ale antreprenoarelor care construiesc afaceri reale.
                </p>
                <p className="font-medium text-cream/90">Nu vând curaj. Construiesc claritate.</p>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.25}>
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="font-mono text-amber text-[32px] font-medium">
                    <AnimatedCounter to={20} suffix="+" />
                  </p>
                  <p className="font-sans text-cream/60 text-[12px] uppercase tracking-widest">
                    Ani experiență
                  </p>
                </div>
                <div className="w-px bg-cream/10" />
                <div>
                  <p className="font-mono text-amber text-[32px] font-medium">2</p>
                  <p className="font-sans text-cream/60 text-[12px] uppercase tracking-widest">
                    Țări active
                  </p>
                </div>
                <div className="w-px bg-cream/10" />
                <div>
                  <p className="font-mono text-amber text-[32px] font-medium">
                    <AnimatedCounter to={4} suffix="" />
                  </p>
                  <p className="font-sans text-cream/60 text-[12px] uppercase tracking-widest">
                    Programe
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Credentials */}
            <motion.ul
              className="space-y-3 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
            >
              {credentials.map((cred, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-green-d/50 rounded-xl px-4 py-3 border border-brass-l/10"
                >
                  <span className="text-[18px] flex-shrink-0">{cred.icon}</span>
                  <span className="font-sans text-cream/75 text-[13px] leading-snug">{cred.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Quote */}
            <AnimatedSection delay={0.1}>
              <blockquote className="font-cormorant italic text-brass-l text-[22px] leading-relaxed">
                „Nu îți promit că poți.
                <br />
                Îți arăt că poți. Cu cifrele tale, nu ale altcuiva."
              </blockquote>
              <p className="label-style text-cream/30 text-[10px] mt-4">
                Arhetipul Arhitectului Clarității · Sage 65% + Ruler 35%
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
