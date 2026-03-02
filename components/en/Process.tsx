'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const steps = [
  {
    number: '01',
    title: 'Diagnostic conversation',
    desc: "We talk through your current situation — what exists, what's missing, what's causing friction. No commitment required.",
  },
  {
    number: '02',
    title: 'Gap analysis & proposal',
    desc: "I map what I found and propose a concrete scope of work. You know exactly what we'll do and why.",
  },
  {
    number: '03',
    title: 'Design & implementation',
    desc: 'Built in close collaboration with your team. Your context, your constraints, your system.',
  },
  {
    number: '04',
    title: 'Handover & calibration',
    desc: "We run it together. I don't disappear after delivery — we calibrate until it works.",
  },
]

export default function Process() {
  const handleCta = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="process" className="bg-cream-d py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-14">
          <p className="label-style text-brass mb-3">METHODOLOGY</p>
          <BrassLine className="mb-6" />
          <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,42px)] leading-tight mb-4">
            How we work together
          </h2>
          <p className="font-sans text-grey text-[15px]">
            No vague steps. No vague results.
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
            <motion.div key={i} variants={fadeUp}>
              <div className="bg-cream rounded-2xl p-6 border border-green/8 h-full">
                <p className="font-mono text-brass-l text-[11px] font-medium mb-4">{step.number}</p>
                <h3 className="font-cormorant text-ink text-[22px] leading-tight mb-3">
                  {step.title}
                </h3>
                <div className="w-8 h-0.5 bg-brass/40 my-3" />
                <p className="font-sans text-grey text-[13px] leading-[1.7]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing note */}
        <AnimatedSection>
          <div className="bg-green-l rounded-2xl p-8 border border-green/20">
            <p className="font-cormorant text-green-d text-[20px] mb-4">Pricing is personalized.</p>
            <p className="font-mono text-grey text-[13px] leading-relaxed">
              Scope depends on your business size, complexity, and time involved.
              <br />
              Contact me for a diagnostic conversation — no commitment required.
            </p>
            <motion.button
              onClick={handleCta}
              className="mt-6 bg-amber text-white font-sans font-medium px-6 py-3 rounded-full text-[14px]"
              whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              Request a diagnostic conversation
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
