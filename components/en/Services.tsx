'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

/* ─── Line 1: FAB Essence programs (translated) ─────────────────── */
const programs = [
  {
    label: 'ENTRY · QUARTERLY',
    badge: null,
    title: 'One topic. Two hours. One tool.',
    description:
      '2 hours of deep-dive on a single topic: pricing, cash flow or transition planning. You leave with a concrete financial tool you can use immediately — not theory, not inspiration. A tool applied to your situation during the session.',
    includes: [
      'A specific financial tool, applied to your situation',
      'Practical exercise during the session',
      'Mini-template to take home',
    ],
    price: '50€',
    priceLabel: 'First investment · 2 hours',
    cta: 'I want the workshop',
    quote: null,
  },
  {
    label: 'IMPLEMENTATION · 6 MONTHS',
    badge: null,
    title: 'Not motivation — structure.',
    description:
      'One structured session per month. Financial tools, templates, guided methodology and a group of women doing the same work. Build a functional financial system in 6 months, together.',
    includes: [
      '6 guided monthly sessions (2h each)',
      'Financial tools and working templates',
      'Feedback on your numbers within the group',
      'Structured accountability between sessions',
      'Community of women at the same stage',
    ],
    price: null,
    priceLabel: null,
    cta: 'I want the group',
    quote:
      'I have a functional financial system. I know the costs, margins, break-even. I check the numbers monthly — I no longer avoid them. I have control.',
  },
  {
    label: 'DECISION · 1 ON 1',
    badge: '★ MOST CHOSEN',
    title: 'Your plan. Your numbers.',
    description:
      'We build together the financial plan based on your real situation. Scenarios, projections and the answer to the question: "When can I make the transition safely?" Approximately 10 hours of personalized work. You leave with a document, not a feeling.',
    includes: [
      '~10 hours of personalized work',
      'Complete financial business plan',
      '3 scenarios: stay at job / leave in 6 months / leave in 12 months',
      'Pricing strategy validated on data',
      'Final document — your plan, with your numbers',
    ],
    price: null,
    priceLabel: null,
    cta: 'I want my plan',
    quote:
      "I have rational permission to decide. I'm no longer guessing. I have a document that shows me what's real, what's risky and what needs to happen.",
  },
  {
    label: 'COMPLETE TRANSFORMATION · PREMIUM',
    badge: null,
    title: 'Business Plan + 3 months of guided implementation.',
    description:
      'The complete business plan plus 3 months of monthly follow-up. We review the numbers, adjust the strategy, maintain direction. The difference between knowing what to do and actually doing it.',
    includes: [
      'Everything included in Business Plan 1 on 1',
      '3 months follow-up (1 session/month)',
      'Plan review based on real results',
      'Real-time strategy adjustments',
      'Support between sessions for urgent decisions',
    ],
    price: null,
    priceLabel: null,
    cta: 'I want the transformation',
    quote:
      "I'm not just informed — I transformed how I relate to my business. I check the numbers, adjust, decide without panic.",
  },
]

/* ─── Line 2: Operations services ───────────────────────────────── */
const opsServices = [
  'Project follow-up systems — one view, no guesswork',
  'Operational process design — map and rebuild cleaner paths',
  'Financial visibility tools — cost structures, pricing, margin analysis',
  'ERP foundations & integration support',
  'Business plan — financial & strategic',
]

/* ─── Component ─────────────────────────────────────────────────── */
export default function Services() {
  const [openLine, setOpenLine] = useState<number | null>(0)

  useEffect(() => {
    const handler = (e: Event) => {
      const { lineIdx } = (e as CustomEvent).detail
      setOpenLine(lineIdx)
    }
    window.addEventListener('openServiceLine', handler)
    return () => window.removeEventListener('openServiceLine', handler)
  }, [])

  const handleCta = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const lines = [
    {
      number: '01',
      title: 'Business Architect & Financial Strategist',
      sub: 'For entrepreneurs who want to know, not to hope.',
      color: 'bg-cream',
    },
    {
      number: '02',
      title: 'Operations & Systems Consultant | Business Architect',
      sub: 'For companies that want to operate more clearly.',
      color: 'bg-cream-d',
    },
    {
      number: '03',
      title: 'Personal Leadership & Entrepreneurial Mindset Coaching',
      sub: 'For people who want to lead with more clarity.',
      color: 'bg-green-l',
    },
  ]

  return (
    <section id="services" className="bg-cream-d py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <AnimatedSection className="mb-14">
          <p className="label-style text-brass mb-3">MY LINES OF WORK</p>
          <BrassLine className="mb-6" />
          <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,42px)] leading-tight mb-4">
            Three areas of expertise.
          </h2>
          <p className="font-sans text-grey text-[15px]">
            One approach: clarity grounded in real data.
          </p>
        </AnimatedSection>

        {/* Business lines accordion */}
        <div className="space-y-4">
          {lines.map((line, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.08}>
              <div id={`services-0${idx + 1}`} className="rounded-2xl overflow-hidden border border-green/10">
                {/* Line header */}
                <button
                  onClick={() => setOpenLine(openLine === idx ? null : idx)}
                  className={`w-full flex items-center justify-between gap-4 px-8 py-6 text-left transition-colors ${
                    openLine === idx ? 'bg-green-d' : line.color + ' hover:bg-green-l'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`font-mono text-[11px] font-medium flex-shrink-0 ${openLine === idx ? 'text-brass-l' : 'text-brass'}`}>
                      {line.number}
                    </span>
                    <div>
                      <h3 className={`font-cormorant text-[clamp(18px,2vw,24px)] leading-tight ${openLine === idx ? 'text-cream' : 'text-ink'}`}>
                        {line.title}
                      </h3>
                      <p className={`font-sans text-[13px] mt-1 ${openLine === idx ? 'text-cream/60' : 'text-grey'}`}>
                        {line.sub}
                      </p>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: openLine === idx ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-2xl font-light flex-shrink-0 ${openLine === idx ? 'text-amber' : 'text-brass'}`}
                  >
                    +
                  </motion.span>
                </button>

                {/* Line content */}
                <AnimatePresence>
                  {openLine === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      {/* ── LINE 1 ──────────────────────────────────── */}
                      {idx === 0 && (
                        <div className="bg-cream-l px-8 py-10">
                          {/* For who */}
                          <div className="max-w-2xl mb-10">
                            <p className="font-cormorant text-ink text-[22px] italic mb-3">You are Laura.</p>
                            <p className="font-sans text-grey text-[14px] leading-[1.75] mb-3">
                              You have a stable job. Maybe a good one. But something no longer works.
                              Somewhere in your mind there is an idea — a business, a change,
                              a version of work that is truly yours.
                            </p>
                            <p className="font-sans text-grey text-[14px] leading-[1.75]">
                              The question is not whether you have the courage.
                              The question is whether the numbers make sense.
                            </p>
                          </div>

                          {/* Programs grid */}
                          <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                          >
                            {programs.map((prog, i) => (
                              <motion.div
                                key={i}
                                variants={fadeUp}
                                className="bg-cream rounded-2xl p-7 border border-green/8 flex flex-col group hover:border-amber/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <p className="label-style text-brass text-[10px]">{prog.label}</p>
                                  {prog.badge && (
                                    <span className="text-[10px] font-sans font-semibold bg-amber/10 text-amber px-2 py-0.5 rounded-full">
                                      {prog.badge}
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-cormorant text-ink text-[clamp(20px,1.8vw,25px)] leading-tight mb-3">
                                  {prog.title}
                                </h4>
                                <p className="font-sans text-grey text-[13px] leading-[1.7] mb-5">{prog.description}</p>
                                <ul className="space-y-1.5 mb-5 flex-1">
                                  {prog.includes.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                      <span className="text-green mt-0.5 flex-shrink-0 text-[12px]">✓</span>
                                      <span className="font-sans text-[12px] text-grey leading-snug">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                                {prog.quote && (
                                  <blockquote className="font-cormorant italic text-green text-[15px] leading-relaxed border-l-2 border-brass pl-3 mb-5">
                                    "{prog.quote}"
                                  </blockquote>
                                )}
                                {prog.price ? (
                                  <div className="mb-4">
                                    <p className="font-mono text-amber text-[24px] font-medium">{prog.price}</p>
                                    {prog.priceLabel && (
                                      <p className="label-style text-lgrey text-[10px] mt-1">{prog.priceLabel}</p>
                                    )}
                                  </div>
                                ) : (
                                  <div className="mb-4">
                                    {/* PRICE TO BE COMPLETED */}
                                    <p className="font-mono text-lgrey text-[13px]">Price on request</p>
                                  </div>
                                )}
                                <motion.button
                                  onClick={handleCta}
                                  className="w-full bg-amber text-white font-sans font-medium py-2.5 rounded-full text-[13px]"
                                  whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                                  whileTap={{ scale: 0.97 }}
                                >
                                  {prog.cta}
                                </motion.button>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Guidance */}
                          <div className="bg-green-l rounded-2xl p-7 border border-green/20">
                            <p className="font-cormorant text-green-d text-[20px] mb-3">Not sure where to start?</p>
                            <p className="font-sans text-grey text-[13px] leading-[1.75]">
                              <strong className="text-ink font-medium">The quarterly workshop</strong> is the lowest-commitment entry —
                              come once, work on a real problem and see if this approach suits you.
                              <br /><br />
                              <strong className="text-ink font-medium">The group program</strong> — for those already in motion who need structure.
                              <br />
                              <strong className="text-ink font-medium">Business Plan 1 on 1</strong> — for those facing a major decision.
                              <br />
                              <strong className="text-ink font-medium">Premium package</strong> — for those who want to go all the way.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* ── LINE 2 ──────────────────────────────────── */}
                      {idx === 1 && (
                        <div className="bg-cream-l px-8 py-10">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-4">
                                Most small and medium businesses don't have an information problem.
                                They have a <strong className="text-ink font-medium">visibility problem</strong>.
                              </p>
                              <p className="font-sans text-grey text-[14px] leading-[1.75] mb-6">
                                The data exists — scattered across spreadsheets, inboxes, and people's heads.
                                I design operational systems that give leadership real visibility
                                over what's actually happening.
                              </p>
                              <ul className="space-y-2 mb-8">
                                {opsServices.map((s, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-green mt-0.5 flex-shrink-0 text-[13px]">✓</span>
                                    <span className="font-sans text-[13px] text-grey leading-snug">{s}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col justify-between">
                              <div className="bg-cream rounded-2xl p-6 border border-green/8 mb-6">
                                <p className="label-style text-brass text-[10px] mb-3">BUSINESS MENTORING & CONSULTANCY</p>
                                <p className="font-cormorant text-ink text-[20px] leading-snug mb-3">
                                  For those who want a plan, not a promise.
                                </p>
                                <p className="font-sans text-grey text-[13px] leading-[1.7]">
                                  I analyze your business or idea, build a financial feasibility study,
                                  and together we map exactly where you're going. At the end, you'll have a clear,
                                  realistic plan — adapted to your situation. Not a promise. A direction.
                                </p>
                              </div>
                              <div>
                                {/* PRICE TO BE COMPLETED */}
                                <p className="font-mono text-lgrey text-[13px] mb-4">Personalized pricing · Contact me for a diagnostic conversation</p>
                                <motion.button
                                  onClick={handleCta}
                                  className="w-full bg-amber text-white font-sans font-medium py-3 rounded-full text-[14px]"
                                  whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                                  whileTap={{ scale: 0.97 }}
                                >
                                  Request a conversation
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── LINE 3 ──────────────────────────────────── */}
                      {idx === 2 && (
                        <div className="bg-cream-l px-8 py-10">
                          <div className="max-w-2xl mb-8">
                            <p className="font-sans text-grey text-[14px] leading-[1.75] mb-4">
                              Financial clarity and well-built systems are not enough if the person
                              running them is not operating from their own strength.
                            </p>
                            <p className="font-sans text-grey text-[14px] leading-[1.75] mb-4">
                              I work with entrepreneurs and leaders who want to understand how they think,
                              how they decide and how they relate to risk, change and growth.
                            </p>
                            <p className="font-cormorant italic text-green text-[20px] leading-relaxed">
                              "I don't promise you can.
                              I show you that you can — with your numbers and your own clarity."
                            </p>
                          </div>

                          {/* PROGRAMS TO BE COMPLETED — Personal Leadership & Entrepreneurial Mindset Coaching */}
                          <div className="bg-green-l rounded-2xl p-6 border border-green/20 mb-6">
                            <p className="label-style text-brass text-[10px] mb-2">COMING SOON</p>
                            <p className="font-sans text-grey text-[13px] leading-[1.7]">
                              Specific programs for this line of work are in preparation.
                              Contact me for an exploratory conversation.
                            </p>
                          </div>

                          <motion.button
                            onClick={handleCta}
                            className="bg-amber text-white font-sans font-medium px-8 py-3 rounded-full text-[14px]"
                            whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Let's talk
                          </motion.button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
