'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    title: 'Diagnostic',
    tagline: 'What is actually in your way',
    desc: "We don't start with solutions. We start with what's actually happening — what pattern keeps repeating, where and why you get stuck, what decision you're holding in suspense and why. The first session is precise diagnosis, not brainstorming.",
  },
  {
    num: '02',
    title: 'The Work',
    tagline: 'Session by session, on real situations',
    desc: "Each session starts from a concrete situation in your business or leadership life. Not from theory. We go into what you're living through right now — decisions, blocks, relationships, pressure — and come out with one clear step.",
  },
  {
    num: '03',
    title: 'Direction',
    tagline: 'Not just clarity, but the capacity to decide on your own',
    desc: "At the end of the process you don't leave with an external plan. You leave with a clearer way of thinking, deciding, and acting — one that stays with you after the sessions are over.",
  },
]

const profiles = [
  {
    label: 'The Entrepreneur',
    desc: "You've made a major decision — or you need to make one — and feel something internal is holding you back. Or you're growing and sense that the way you operate has become a ceiling for the business.",
  },
  {
    label: 'The Leader',
    desc: "You lead a team and have noticed that how you think and decide affects them too. You want to lead from your own strength, not from reaction to what's happening around you.",
  },
]

export default function TheClarityProcessEn() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ── */}
      <div className="bg-green relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full border border-white/[0.06] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full border border-white/[0.05] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full border border-white/[0.04] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-[780px] mx-auto px-10 pt-36 pb-16 relative">
          {/* Back link */}
          <Link
            href="/en/services/line-3"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-cream/50 hover:text-cream transition-colors mb-12"
          >
            ← Line 03
          </Link>

          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass-l mb-[18px]">
            Personal Leadership & Entrepreneurial Clarity · Programme
          </p>
          <h1 className="font-cormorant font-light text-[clamp(36px,5vw,52px)] leading-[1.15] text-cream mb-4">
            The Clarity Process
          </h1>
          <p className="font-sans text-[15px] text-cream/70 italic max-w-[520px]">
            4 sessions. A structured process. Clarity you carry with you after the programme ends.
          </p>
        </div>
      </div>

      {/* ── Main editorial column ── */}
      <div className="max-w-[780px] mx-auto px-10 pt-14 pb-20">

        {/* Intro */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            This is not a package of sessions. It's a process with an internal logic: each session builds on the previous one, and at the end you don't just have clarity — you have a different way of thinking and deciding.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            The work is applied, on real situations from your life as an entrepreneur or leader. Not in the abstract. Not with theoretical models.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-brass mb-11" />

        {/* Phases */}
        <div className="mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-8">How the process works</p>
          <div className="space-y-0">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`grid gap-6 py-8 items-start ${i < phases.length - 1 ? 'border-b border-black/[0.07]' : ''}`}
                style={{ gridTemplateColumns: '48px 1fr' }}
              >
                <p className="font-cormorant text-[36px] font-light text-brass-l leading-none pt-1">{phase.num}</p>
                <div>
                  <p className="font-cormorant text-[22px] font-light text-green mb-1 leading-snug">{phase.title}</p>
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-brass italic mb-3">{phase.tagline}</p>
                  <p className="font-sans text-[14px] text-lgrey leading-[1.75]">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome block */}
        <div className="border-l-4 border-green-d pl-7 py-2 my-11">
          <p className="font-cormorant text-[21px] italic text-green leading-[1.6]">
            At the end of the 4 sessions you don't leave with a plan I gave you. You leave with clarity about how you think, what blocks you, and how you decide — and with the capacity to apply that on your own, going forward.
          </p>
        </div>

        {/* Who this is for */}
        <div className="mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-7">Who this is for</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
            {profiles.map((p, i) => (
              <div key={i} className="bg-cream-d p-7">
                <p className="font-cormorant text-[20px] font-light text-green mb-3">{p.label}</p>
                <p className="font-sans text-[14px] text-lgrey leading-[1.75]">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[14px] text-grey italic mt-6">
            If you recognise yourself in one of these profiles, a 30-minute conversation is enough to see whether it makes sense to work together.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-0">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-7">Investment</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">

            {/* Main package — green */}
            <div className="bg-green p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass-l font-medium mb-3">Full programme</p>
              <p className="font-cormorant text-[22px] font-light text-cream mb-4 leading-[1.25]">The Clarity Process</p>
              <p className="font-sans text-[32px] font-medium text-brass-l leading-none tracking-[-0.5px]">€ 450</p>
              <p className="font-sans text-[12px] text-cream/45 italic mt-1 mb-5">4 sessions · 60 minutes each</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <ul className="mb-5">
                {[
                  '4 × 60 minutes, online',
                  'Paced 2–3 weeks apart',
                  'Notes sent after each session',
                  'Option to split payment in two',
                ].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-cream/82 leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-white/[0.08]' : ''}`}>
                    <span className="text-brass-l text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[12px] text-brass-l italic pt-3 border-t border-white/[0.12] mt-1 mb-5">
                100% guarantee after the first session — if it's not right for you, I refund in full.
              </p>
              <motion.a
                href="/en#contact"
                className="inline-block px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans bg-cream text-green hover:bg-brass-l hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply
              </motion.a>
            </div>

            {/* Single session — cream-d */}
            <div className="bg-cream-d p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass font-medium mb-3">Individual session</p>
              <p className="font-cormorant text-[22px] font-light text-green mb-4 leading-[1.25]">One coaching session</p>
              <p className="font-sans text-[32px] font-medium text-brass leading-none tracking-[-0.5px]">€ 120</p>
              <p className="font-sans text-[12px] text-lgrey italic mt-1 mb-5">per session · 60 minutes</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-5">
                For when you have a concrete situation to clarify — a decision, a block, a turning point. One focused session, with one clear step at the end.
              </p>
              <ul className="mb-5">
                {[
                  '60 minutes 1:1, online',
                  'Three-phase structure: focus, exploration, action',
                  'Session notes sent afterwards',
                ].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-ink leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-black/[0.06]' : ''}`}>
                    <span className="text-brass text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/en#contact"
                className="inline-block px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans bg-green text-cream hover:bg-brass transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a session
              </motion.a>
            </div>

          </div>
        </div>

        {/* CTA block */}
        <div className="border-t border-brass pt-11 mt-14">
          <p className="font-cormorant font-light text-[clamp(22px,3vw,28px)] text-green leading-[1.5] mb-7">
            Not sure if this is right for you?<br />Start with a free 30-minute conversation.
          </p>
          <p className="font-sans text-[13px] text-grey italic mb-7">
            Tell me where you are. I'll tell you honestly whether The Clarity Process is the right answer.
          </p>
          <motion.a
            href="/en#contact"
            className="inline-block px-9 py-[15px] bg-amber text-cream font-sans text-[11px] tracking-[2.5px] uppercase transition-colors duration-200 hover:bg-green"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Request a free conversation
          </motion.a>
        </div>

      </div>

      {/* ── Back to Line 03 ── */}
      <div className="border-t border-cream-d">
        <div className="max-w-[780px] mx-auto px-10 py-12">
          <Link
            href="/en/services/line-3"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors"
          >
            ← Back to Line 03
          </Link>
        </div>
      </div>

    </div>
  )
}
