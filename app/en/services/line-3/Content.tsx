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

const otherLines = [
  { number: '01', title: 'Business Architect & Financial Strategist', href: '/en/services/line-1' },
  { number: '02', title: 'Operations & Systems Consultant | Business Architect', href: '/en/services/line-2' },
]

export default function LineThree() {
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
            Personal Leadership & Entrepreneurial Clarity · Line 03
          </p>
          <h1 className="font-cormorant font-light text-[clamp(38px,5vw,54px)] leading-[1.15] text-green mb-3.5">
            You know what to do.<br />
            <em className="italic text-brass">And yet you don't do it.</em>
          </h1>
          <p className="font-sans text-[15px] text-grey italic">
            For entrepreneurs and leaders who want to act from clarity, not from pressure.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-brass my-11" />

        {/* Problem context */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            You're not missing information. You're not missing competence. And yet there are decisions you've been putting off for months, actions you know are necessary and aren't taking, a persistent gap between what you think and what you actually do.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            Sometimes it's a major decision you're holding in suspense because the stakes feel too high. Other times it's a pattern that keeps repeating — you get stuck at exactly the moment it matters most. Or you're leading a team and sense that something in how <em className="italic">you</em> operate is also limiting them.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            It's not a lack of willpower. It's a way of thinking and deciding under pressure that no longer serves where you want to go.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-2 border-brass px-7 py-[18px] my-9 font-cormorant text-[23px] italic text-green leading-[1.5] bg-cream-d">
          "External clarity — numbers, systems, structure — is not enough if the person running them is operating from fear, not from their own strength."
        </blockquote>

        {/* What I do */}
        <div className="mb-12 space-y-4">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-[18px]">What I do</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            I work with you on how you think and decide — not in the abstract, but applied to real situations in your business or career. Together we identify where and why you get stuck, which patterns sabotage your execution, and how to make clearer decisions when the pressure is high.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink">
            This is not therapy. It's not motivation. It's structured work, with precise questions, applied directly to what you're living through right now.
          </p>
        </div>

        {/* Anchor block */}
        <div className="bg-green px-9 py-8 my-11">
          <p className="font-sans text-[15px] text-cream/90 leading-[1.9] font-light">
            I've been the person who knew what to do and didn't do it. I understand the difference between having a plan and actually acting from it.{' '}
            <em className="text-brass-l italic">I work with competent people who don't need more information — they need clarity about what's stopping them.</em>
          </p>
        </div>

        {/* Who this is for — two cards */}
        <div className="mb-12">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-7">Who this is for</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] mb-6">
            {profiles.map((p, i) => (
              <div key={i} className="bg-cream-d p-7">
                <p className="font-cormorant text-[20px] font-light text-green mb-3">{p.label}</p>
                <p className="font-sans text-[14px] text-lgrey leading-[1.75]">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[14px] text-grey italic">
            If you recognise yourself, a conversation is enough to start.
          </p>
        </div>

        {/* Phases — The Clarity Process */}
        <div className="mb-12">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-2">How the process works</p>
          <p className="font-cormorant text-[26px] font-light text-green mb-8 leading-snug">The Clarity Process</p>
          <p className="font-sans text-[15px] leading-[1.85] text-ink mb-8">
            This is not a package of sessions. It's a process with an internal logic: each session builds on the previous one, and at the end you don't just have clarity — you have a different way of thinking and deciding.
          </p>
          <div>
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
        <div className="border-l-4 border-green pl-7 py-2 my-11">
          <p className="font-cormorant text-[21px] italic text-green leading-[1.6]">
            At the end of the 4 sessions you don't leave with a plan I gave you. You leave with clarity about how you think, what blocks you, and how you decide — and with the capacity to apply that on your own, going forward.
          </p>
        </div>

        {/* Services & Prices */}
        <div className="mb-0">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-7">Services & Pricing</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">

            {/* Single session */}
            <div className="bg-cream-d p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass font-medium mb-3">Individual session</p>
              <p className="font-cormorant text-[22px] font-light text-green mb-4 leading-[1.25]">One coaching session</p>
              <p className="font-sans text-[30px] font-medium text-brass leading-none tracking-[-0.5px]">€ 120</p>
              <p className="font-sans text-[12px] text-lgrey italic mt-1 mb-5">per session · 60 minutes</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-[18px]">
                For when you have a concrete situation to clarify — a decision, a block, a turning point. One focused session, with a clear step at the end.
              </p>
              <ul className="mb-5">
                {['60 minutes 1:1, online', 'Three-phase structure: focus, exploration, action', 'Session notes sent afterwards'].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-ink leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-black/[0.06]' : ''}`}>
                    <span className="text-brass text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/en#contact"
                className="inline-block mt-[22px] px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans bg-green text-cream hover:bg-brass transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a session
              </motion.a>
            </div>

            {/* The Clarity Process — featured */}
            <div className="bg-green p-8">
              <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass-l font-medium mb-3">Full programme</p>
              <p className="font-cormorant text-[22px] font-light text-cream mb-4 leading-[1.25]">The Clarity Process</p>
              <p className="font-sans text-[30px] font-medium text-brass-l leading-none tracking-[-0.5px]">€ 450</p>
              <p className="font-sans text-[12px] text-cream/45 italic mt-1 mb-5">full pack · save € 30</p>
              <div className="w-7 h-px bg-brass opacity-35 mb-[18px]" />
              <p className="font-sans text-[13px] text-cream/70 leading-[1.75] mb-[18px]">
                For sustained work on a goal or a transition. Four sessions at a pace of 2–3 weeks — enough time to apply between sessions, enough contact to not lose direction.
              </p>
              <ul className="mb-4">
                {['4 × 60 minutes, online', 'Paced 2–3 weeks apart', 'Notes after each session', 'Option to split payment in two'].map((item, i, arr) => (
                  <li key={i} className={`flex items-start gap-2 font-sans text-[13px] text-cream/82 leading-[1.6] py-[7px] ${i < arr.length - 1 ? 'border-b border-white/[0.08]' : ''}`}>
                    <span className="text-brass-l text-[11px] flex-shrink-0 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[12px] text-brass-l italic pt-3 border-t border-white/[0.12] mt-1 mb-0">
                100% guarantee after the first session — if it's not right for you, I refund in full.
              </p>
              <motion.a
                href="/en#contact"
                className="inline-block mt-[22px] px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans bg-brass text-white hover:bg-brass-l transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply
              </motion.a>
            </div>

            {/* Workshop — spans both columns */}
            <div className="sm:col-span-2 bg-white border border-cream-d grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
              <div>
                <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass font-medium mb-3">Format for organisations</p>
                <p className="font-cormorant text-[22px] font-light text-green mb-4 leading-[1.25]">Workshop for teams</p>
                <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-3">
                  One specific topic, a group, one clear outcome. For organisations that want to give their people a structured space to work on decision clarity, leadership, and action under pressure.
                </p>
                <motion.a
                  href="/en#contact"
                  className="inline-block mt-[22px] px-[26px] py-3 text-[10px] tracking-[2px] uppercase font-sans border border-green text-green bg-transparent hover:bg-green hover:text-cream transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Request a conversation
                </motion.a>
              </div>
              <div className="pt-2">
                <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-3">
                  Format, duration, and pricing are tailored to the group's objective and number of participants.
                </p>
                <p className="font-sans text-[13px] text-lgrey leading-[1.75] mb-3">
                  Contact me for a diagnostic conversation — I'll tell you whether and how I can help.
                </p>
                <p className="font-sans text-[13px] text-brass italic">No proposal if there's no real fit.</p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA block */}
        <div className="border-t border-brass pt-11 mt-14">
          <p className="font-cormorant font-light text-[clamp(22px,3vw,28px)] text-green leading-[1.5] mb-7">
            Not sure which format is right for you?<br />Start with a free 30-minute conversation.
          </p>
          <p className="font-sans text-[13px] text-grey italic mb-7">
            Tell me where you're stuck. I'll tell you honestly whether and how I can help.
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
