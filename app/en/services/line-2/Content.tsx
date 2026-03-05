'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const otherLines = [
  { number: '01', title: 'Business & Financial Strategy Consultancy & Mentoring', href: '/en/services/line-1' },
  { number: '03', title: 'Leadership Coaching for Entrepreneurs & Leaders', href: '/en/services/line-3' },
]

export default function LineTwo() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ── Main editorial column ── */}
      <div className="max-w-[780px] mx-auto px-10 pt-36 pb-20">

        {/* Back link */}
        <Link
          href="/en"
          className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors mb-12"
        >
          ← Back to main page
        </Link>

        {/* Header */}
        <div className="mb-0">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">
            Operations & Systems Consultant · Line 02
          </p>
          <h1 className="font-cormorant font-light text-[clamp(38px,5vw,54px)] leading-[1.15] text-green mb-3.5">
            Your business is growing.<br />
            Your systems <em className="italic text-brass">have been left behind.</em>
          </h1>
          <p className="font-sans text-[15px] text-grey italic">
            For entrepreneurs and managers who want to be back in control.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-brass my-11" />

        {/* Problem context */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            You're caught in daily operations and no longer have time to see the bigger picture. You solve problems every day — but you never get to their root cause. You're always in crisis mode, rarely in analysis mode.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            You don't know at any given moment where you truly stand — with costs, with projects, with priorities. The data exists, but it's not organized in a way that tells you anything useful.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            It's not a people problem. It's a systems problem.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-2 border-brass px-7 py-[18px] my-9 font-cormorant text-[23px] italic text-green leading-[1.5] bg-cream-d">
          "The data already exists in your business. It just needs to start talking to you."
        </blockquote>

        {/* What I do */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">What I do</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            I analyze how your business actually works — workflows, cost structure, project tracking — and build the missing instruments: clear, simple, and usable by your team from day one.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            I don't teach methodologies. I build concrete systems, adapted to how your business functions in reality — not how it should function in theory.
          </p>
        </div>

        {/* Anchor block */}
        <div className="bg-green px-9 py-8 my-11">
          <p className="font-sans text-[15px] text-cream/90 leading-[1.9] font-light">
            I work at the intersection of engineering, finance, and operations. I know what a business looks like when it's grown faster than its systems — because I've worked inside them.{' '}
            <em className="text-brass-l italic">And I know what it feels like to be the person holding everything together when the bigger picture isn't clear.</em>
          </p>
        </div>

        {/* Who I work with */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">Who I work with</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            With entrepreneurs and SME managers who have moved past the start-up phase but don't yet have the structures of a mature business. The company works — but it runs on improvisation, not on systems.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            If you recognise yourself in this, it's probably the right time for a conversation.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-0 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">How it works</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            I don't sell fixed packages. Every collaboration starts with a diagnostic conversation — you explain your situation, I tell you what I see and whether I can help. If there's a fit, you receive a clear proposal: what we build, in what timeframe, and what it requires from your team.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            <strong className="font-medium text-green">Pricing is customized</strong> — based on the size of the business, the complexity of the problem, and the time involved.
          </p>
        </div>

        {/* CTA block */}
        <div className="border-t border-brass pt-11 mt-14">
          <p className="font-cormorant font-light text-[clamp(22px,3vw,28px)] text-green leading-[1.5] mb-7">
            30 minutes of conversation.<br />No commitment. No proposal if there's no fit.
          </p>
          <p className="font-sans text-[13px] text-grey italic mb-7">
            I'll tell you directly what I see — including if I'm not the right person for what you need.
          </p>
          <motion.a
            href="/en#contact"
            className="inline-block px-9 py-[15px] bg-amber text-cream font-sans text-[11px] tracking-[2.5px] uppercase transition-colors duration-200 hover:bg-green"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Request a conversation
          </motion.a>
        </div>

      </div>

      {/* ── Other Lines Navigation ── */}
      <div className="border-t border-cream-d">
        <div className="max-w-[780px] mx-auto px-10 py-16">
          <p className="font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: '#B89A6E' }}>
            OTHER LINES OF WORK
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherLines.map((line) => (
              <Link key={line.href} href={line.href} className="group block">
                <div className="flex items-center justify-between gap-4 px-6 py-5 border border-cream-d bg-white group-hover:border-green group-hover:bg-cream transition-all duration-200">
                  <div>
                    <p className="font-cormorant text-[28px] text-brass font-light">{line.number}</p>
                    <p className="font-cormorant text-[16px] text-ink group-hover:text-green transition-colors leading-snug mt-1">{line.title}</p>
                  </div>
                  <span className="text-lgrey text-[18px] group-hover:text-green transition-all group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
