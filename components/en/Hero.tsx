'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function HeroEn() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToWork = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen bg-green-d flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #F5F2EE 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="label-style text-brass-l mb-6"
            style={{ letterSpacing: '0.2em' }}
          >
            · Business Architect · Financial Strategist · Coach ·
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-cormorant text-cream leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Clarity for people.
            <br />
            <em>Systems for business.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/75 text-[17px] leading-relaxed mb-4 max-w-xl"
          >
            I work with entrepreneurs building real businesses and with organizations
            that want to operate with more precision, clarity and direction.
          </motion.p>

          {/* Tagline mono */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-brass-l text-[13px] mb-10"
          >
            Engineer. Economist. ICF & EMCC Certified Coach.
          </motion.p>

          {/* 3 business lines */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2 mb-10">
            {[
              '01 · Business Architect & Financial Strategist',
              '02 · Operations & Systems Consultant | Business Architect',
              '03 · Personal Leadership & Entrepreneurial Mindset Coaching',
            ].map((line, i) => (
              <p key={i} className="font-mono text-cream/50 text-[12px] leading-relaxed">
                {line}
              </p>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
            <motion.button
              onClick={scrollToContact}
              className="bg-amber text-white font-sans font-medium px-8 py-3.5 rounded-full text-[15px]"
              whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              Request a diagnostic conversation
            </motion.button>
            <motion.button
              onClick={scrollToWork}
              className="border border-cream/30 text-cream font-sans font-medium px-8 py-3.5 rounded-full text-[15px] hover:bg-cream/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              See my work
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              '20+ years of real experience',
              'Engineer + Economist, ASE + UTCB',
              'ICF & EMCC Certified Coach',
              'Bornem, Belgium · Online Worldwide',
            ].map((badge, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-2"
              >
                <span className="text-brass-l mt-0.5 flex-shrink-0">✓</span>
                <span className="text-cream/60 font-sans text-[13px] leading-snug">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-0.5 h-8 bg-cream/40 rounded-full" />
        <svg className="w-4 h-4 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
