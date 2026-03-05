'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

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
      "We build together the financial plan based on your real situation. Scenarios, projections and the answer to the question: \"When can I make the transition safely?\" Approximately 10 hours of personalized work. You leave with a document, not a feeling.",
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

const otherLines = [
  {
    number: '02',
    title: 'Operations & Systems Consultant | Business Architect',
    href: '/en/services/line-2',
  },
  {
    number: '03',
    title: 'Leadership Coaching for Entrepreneurs & Leaders',
    href: '/en/services/line-3',
  },
]

export default function LineOne() {
  return (
    <div className="min-h-screen bg-cream-d">
      {/* Page header */}
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-12">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 font-mono text-[12px] text-brass hover:text-amber transition-colors mb-8"
        >
          ← Back to main page
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-widest text-brass mb-4">LINE 01</p>
        <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,58px)] leading-[1.1] mb-4">
          Business Arhitect<br /><em>& Strateg Financiar</em>
        </h1>
        <p className="font-sans text-grey text-[16px] max-w-xl leading-relaxed">
          For entrepreneurs who want to know, not to hope.
        </p>
      </div>

      {/* Intro */}
      <div className="bg-cream-l">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl mb-12">
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
                className="bg-cream rounded-2xl p-7 border border-green/8 flex flex-col hover:border-amber/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
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
                    <p className="font-mono text-lgrey text-[13px]">Price on request</p>
                  </div>
                )}
                <a href="/en#contact">
                  <motion.div
                    className="w-full bg-amber text-white font-sans font-medium py-2.5 rounded-full text-[13px] text-center cursor-pointer"
                    whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {prog.cta}
                  </motion.div>
                </a>
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
      </div>

      {/* Other lines navigation */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: '#B89A6E' }}>
          OTHER LINES OF WORK
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLines.map((line) => (
            <Link key={line.href} href={line.href} className="group block">
              <div className="flex items-center justify-between gap-4 px-6 py-5 rounded-xl border border-green/10 bg-cream group-hover:bg-green-d transition-all duration-300">
                <div>
                  <span className="font-mono text-brass text-[10px]">{line.number}</span>
                  <p className="font-cormorant text-ink group-hover:text-cream text-[18px] leading-tight mt-1 transition-colors">
                    {line.title}
                  </p>
                </div>
                <span className="text-brass group-hover:text-amber transition-all group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
