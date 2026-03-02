'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const opsServices = [
  'Project follow-up systems — one view, no guesswork',
  'Operational process design — map and rebuild cleaner paths',
  'Financial visibility tools — cost structures, pricing, margin analysis',
  'ERP foundations & integration support',
  'Business plan — financial & strategic',
]

const otherLines = [
  {
    number: '01',
    title: 'Business Architect & Financial Strategist',
    href: '/en/services/line-1',
  },
  {
    number: '03',
    title: 'Personal Leadership & Entrepreneurial Mindset Coaching',
    href: '/en/services/line-3',
  },
]

export default function LineTwo() {
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
        <p className="font-mono text-[11px] uppercase tracking-widest text-brass mb-4">LINE 02</p>
        <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,58px)] leading-[1.1] mb-4">
          Operations & Systems<br /><em>Consultant | Business Architect</em>
        </h1>
        <p className="font-sans text-grey text-[16px] max-w-xl leading-relaxed">
          For companies that want to operate more clearly.
        </p>
      </div>

      {/* Content */}
      <div className="bg-cream-l">
        <div className="max-w-6xl mx-auto px-6 py-12">
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
                <p className="font-mono text-lgrey text-[13px] mb-4">
                  Personalized pricing · Contact me for a diagnostic conversation
                </p>
                <a href="/en#contact">
                  <motion.div
                    className="w-full bg-amber text-white font-sans font-medium py-3 rounded-full text-[14px] text-center cursor-pointer"
                    whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Request a conversation
                  </motion.div>
                </a>
              </div>
            </div>
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
