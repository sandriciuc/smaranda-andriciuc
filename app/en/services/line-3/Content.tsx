'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const otherLines = [
  {
    number: '01',
    title: 'Business Architect & Financial Strategist',
    href: '/en/services/line-1',
  },
  {
    number: '02',
    title: 'Operations & Systems Consultant | Business Architect',
    href: '/en/services/line-2',
  },
]

export default function LineThree() {
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
        <p className="font-mono text-[11px] uppercase tracking-widest text-brass mb-4">LINE 03</p>
        <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,58px)] leading-[1.1] mb-4">
          Personal Leadership &<br /><em>Entrepreneurial Mindset Coaching</em>
        </h1>
        <p className="font-sans text-grey text-[16px] max-w-xl leading-relaxed">
          For people who want to lead with more clarity.
        </p>
      </div>

      {/* Content */}
      <div className="bg-cream-l">
        <div className="max-w-6xl mx-auto px-6 py-12">
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

          <div className="bg-green-l rounded-2xl p-6 border border-green/20 mb-8 max-w-2xl">
            <p className="label-style text-brass text-[10px] mb-2">COMING SOON</p>
            <p className="font-sans text-grey text-[13px] leading-[1.7]">
              Specific programs for this line of work are in preparation.
              Contact me for an exploratory conversation.
            </p>
          </div>

          <a href="/en#contact">
            <motion.div
              className="inline-block bg-amber text-white font-sans font-medium px-8 py-3 rounded-full text-[14px] cursor-pointer"
              whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              Let's talk
            </motion.div>
          </a>
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
