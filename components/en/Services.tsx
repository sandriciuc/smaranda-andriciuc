'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

export default function Services() {
  const handleCta = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="bg-cream-d py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="mb-14">
          <p className="label-style text-brass mb-3">SERVICES</p>
          <BrassLine className="mb-6" />
          <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,42px)] leading-tight mb-4">
            Two lines of work. One approach.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service 1 */}
          <AnimatedSection delay={0.1}>
            <div className="bg-cream-l rounded-2xl p-8 border border-green/8 h-full flex flex-col hover:border-amber/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <p className="label-style text-brass text-[10px] mb-4">BUSINESS PROCESSES & ANALYSIS</p>
              <h3 className="font-cormorant text-ink text-[clamp(22px,2vw,28px)] leading-tight mb-3">
                For companies that want to operate more clearly.
              </h3>

              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-6">
                Most small and medium businesses don't have an information problem.
                They have a <strong className="text-ink font-medium">visibility problem</strong>.
              </p>
              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-8">
                The data exists — scattered across spreadsheets, inboxes, and people's heads.
                I design operational systems that give leadership real visibility
                over what's actually happening.
              </p>

              {/* Deliverables */}
              <ul className="space-y-2 mb-8 flex-1">
                {[
                  'Project follow-up systems — one view, no guesswork',
                  'Operational process design — map and rebuild cleaner paths',
                  'Financial visibility tools — cost structures, pricing, margin analysis',
                  'ERP foundations & integration support',
                  'Business plan — financial & strategic',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green mt-0.5 flex-shrink-0 text-[13px]">✓</span>
                    <span className="font-sans text-[13px] text-grey leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing note */}
              <div className="mb-6">
                <p className="font-mono text-lgrey text-[13px]">
                  Personalized. Contact me for a diagnostic conversation.
                </p>
              </div>

              <motion.button
                onClick={handleCta}
                className="w-full bg-amber text-white font-sans font-medium py-3 rounded-full text-[14px]"
                whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                whileTap={{ scale: 0.97 }}
              >
                Request a conversation
              </motion.button>
            </div>
          </AnimatedSection>

          {/* Service 2 */}
          <AnimatedSection delay={0.2}>
            <div className="bg-cream-l rounded-2xl p-8 border border-green/8 h-full flex flex-col hover:border-amber/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <p className="label-style text-brass text-[10px] mb-4">BUSINESS MENTORING & CONSULTANCY</p>
              <h3 className="font-cormorant text-ink text-[clamp(22px,2vw,28px)] leading-tight mb-3">
                For those who want a plan, not a promise.
              </h3>

              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-6">
                I analyze your business or idea, build a financial feasibility study,
                and together we map exactly where you're going.
              </p>
              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-8">
                At the end, you'll have a clear, realistic plan — adapted to your situation.
                <br />
                <strong className="text-ink font-medium">Not a promise. A direction.</strong>
              </p>

              {/* What you get */}
              <ul className="space-y-2 mb-8 flex-1">
                {[
                  'Financial feasibility analysis',
                  'Business plan — financial & operational',
                  'Pricing strategy grounded in your real numbers',
                  'Scenario planning — conservative, realistic, optimistic',
                  'Ongoing mentoring sessions (optional)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green mt-0.5 flex-shrink-0 text-[13px]">✓</span>
                    <span className="font-sans text-[13px] text-grey leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing note */}
              <div className="mb-6">
                <p className="font-mono text-lgrey text-[13px]">
                  Personalized. Contact me for a diagnostic conversation.
                </p>
              </div>

              <motion.button
                onClick={handleCta}
                className="w-full bg-amber text-white font-sans font-medium py-3 rounded-full text-[14px]"
                whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                whileTap={{ scale: 0.97 }}
              >
                Let's see what the numbers say
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
