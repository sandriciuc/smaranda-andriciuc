'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    name: 'Diagnostic',
    tagline: "What's actually happening.",
    desc: "We map the real situation — not the version you've been telling yourself. Where the block is, what triggers it, what it's costing you. Most people come in thinking they know what the problem is. By the end of this phase, we usually find it's somewhere else.",
  },
  {
    num: '02',
    name: 'The Work',
    tagline: 'Where the pattern lives.',
    desc: "We go into the specific decisions, reactions, and moments where your mentality is working against you. Precise questions. No generic frameworks. This is not a workshop on leadership concepts — it's work on your particular way of operating under your particular pressures.",
  },
  {
    num: '03',
    name: 'Direction',
    tagline: 'One clear step forward.',
    desc: "You leave with a concrete next action — not more insight, not a list of things to think about. One thing you're ready to do and know you will. The shift in this phase is not intellectual. You feel it.",
  },
]

const otherLines = [
  { number: '01', title: 'Business Arhitect & Strateg Financiar', href: '/en/services/line-1' },
  { number: '02', title: 'Operations & Systems Consultant | Business Architect', href: '/en/services/line-2' },
]

export default function LineThree() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-green relative overflow-hidden pt-[144px] pb-[80px] px-7 md:px-16">
        <div className="absolute bottom-[-100px] right-[-60px] w-[420px] h-[420px] rounded-full bg-[rgba(184,154,110,0.09)] pointer-events-none" />
        <div className="absolute top-10 left-[55%] w-[180px] h-[180px] rounded-full bg-[rgba(196,135,58,0.07)] pointer-events-none" />
        <div className="max-w-[780px] mx-auto relative z-10">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass-l mb-5">
            The Clarity Process · Line 03
          </p>
          <h1 className="font-cormorant font-light text-[clamp(48px,6vw,68px)] leading-[1.05] text-cream mb-[10px]">
            The Clarity Process
          </h1>
          <p className="font-cormorant text-[18px] italic text-brass-l font-light mb-7">
            A leadership mentality process.
          </p>
          <p className="font-sans text-[16px] text-cream/65 font-light max-w-[500px] leading-[1.7] italic">
            For entrepreneurs and leaders who know what to do — and aren't doing it.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-[72px] px-7 md:px-16 border-b border-[rgba(61,90,76,0.08)] bg-cream">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">The problem</p>

          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            You're not missing information. You're not missing competence. And yet there are decisions you've been putting off for months, actions you know are necessary and still aren't taking, a persistent gap between what you intend and what you actually do.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            Sometimes it's a major decision held in suspense because the stakes feel too high. Other times it's a pattern that repeats — you get stuck at exactly the moment it matters most. Or you're leading a team and sense that something in how <em className="italic">you</em> operate is also limiting them.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            <strong className="text-ink font-medium">It's not a strategy problem. It's a mentality problem.</strong>
          </p>

          <blockquote className="border-l-2 border-brass px-7 py-[14px] my-9 font-cormorant text-[23px] italic text-green leading-[1.45] bg-cream-d">
            "External clarity — numbers, systems, structure — is not enough if the person running them is operating from fear, not from their own strength."
          </blockquote>

          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            The Clarity Process works on how you think and decide. Not in theory — applied directly to the real situations in your business or career right now. We identify where you get stuck, why, and what it takes to move from intention to action.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey">
            Not therapy. Not motivation. <strong className="text-ink font-medium">Structured work, with precise questions, on what you're actually living through.</strong>
          </p>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section className="py-[72px] px-7 md:px-16 bg-cream-d border-b border-[rgba(61,90,76,0.08)]">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">This process is for you if</p>

          <div className="bg-green px-10 py-9 my-11">
            <p className="font-sans text-[15px] text-cream/88 leading-[1.9] font-light">
              You have the competence. You have the information. You've probably already tried to figure this out on your own.<br /><br />
              <em className="text-brass-l italic">What you need is not more clarity about the problem. You need clarity about what's stopping you from solving it.</em>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
            <div className="py-6 border-b border-[rgba(61,90,76,0.1)]">
              <span className="font-sans text-[10px] tracking-[2px] uppercase text-brass font-medium mb-[10px] block">The entrepreneur</span>
              <p className="font-sans text-[15px] leading-[1.85] text-grey">
                You have a major decision on the table — a pivot, a hire, an exit, a transition — that you've been holding in suspense for longer than makes sense. You know it. And you're still not moving.
              </p>
            </div>
            <div className="py-6 border-b border-[rgba(61,90,76,0.1)]">
              <span className="font-sans text-[10px] tracking-[2px] uppercase text-brass font-medium mb-[10px] block">The leader</span>
              <p className="font-sans text-[15px] leading-[1.85] text-grey">
                You get blocked at exactly the wrong moments — under pressure, in conflict, in high-stakes decisions. A pattern that's been there long enough that you can see it clearly. But seeing it clearly hasn't been enough to change it.
              </p>
            </div>
          </div>

          <div className="pt-7">
            <p className="font-sans text-[13px] italic text-lgrey">
              This process works best when you're ready to look honestly at how you operate — not just at what's happening around you.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ── */}
      <section className="py-[72px] px-7 md:px-16 bg-cream border-b border-[rgba(61,90,76,0.08)]">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">How the process works</p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-9">
            Three phases. Each with a distinct purpose. Together, they move you from stuck to clear to moving.
          </p>

          <div>
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`grid gap-5 py-6 items-start ${i < phases.length - 1 ? 'border-b border-[rgba(61,90,76,0.08)]' : ''}`}
                style={{ gridTemplateColumns: '44px 1fr' }}
              >
                <p className="font-cormorant text-[36px] font-light text-brass-l leading-none pt-[2px]">{phase.num}</p>
                <div>
                  <span className="font-sans text-[10px] tracking-[2.5px] uppercase text-green font-medium mb-[2px] block">{phase.name}</span>
                  <p className="font-cormorant text-[20px] italic text-ink font-light mb-[10px] leading-[1.3]">{phase.tagline}</p>
                  <p className="font-sans text-[14px] text-grey leading-[1.7]">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-12 h-px bg-brass my-10" />

          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">What changes</p>
          <div className="bg-cream-d border-l-[3px] border-green px-8 py-7">
            <p className="font-cormorant text-[21px] italic text-green leading-[1.5] font-light">
              "You don't leave with a new mindset. You leave with a different relationship to how you decide — one that holds when the pressure is real."
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-[72px] px-7 md:px-16 bg-cream-d border-b border-[rgba(61,90,76,0.08)]">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">The process & continuity</p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-9">
            Two offerings — the process itself, and the option to continue once it's done.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">

            {/* Main — The Clarity Process */}
            <div className="bg-green p-10 relative overflow-hidden flex flex-col">
              <div className="absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full bg-[rgba(184,154,110,0.1)] pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass-l mb-[14px]">The core process</p>
                <p className="font-cormorant text-[32px] font-light text-cream leading-[1.1] mb-[6px]">The Clarity Process</p>
                <p className="font-cormorant text-[15px] italic text-brass-l font-light mb-7">A leadership mentality process.</p>
                <div className="w-9 h-px bg-brass/40 mb-[22px]" />
                <p className="font-sans text-[14px] text-cream/72 leading-[1.8] mb-6">
                  A structured process, adapted to your situation. We work through the three phases at a pace that gives you time to apply what shifts between sessions. Some people complete it in four weeks. Others need eight to ten. We establish the timeline together at the start.
                </p>
                <ul className="mb-7">
                  {[
                    'Three-phase structure: Diagnostic, The Work, Direction',
                    'Adapted duration: 4–10 weeks, depending on your situation',
                    'Notes and key questions sent after each session',
                  ].map((item, i, arr) => (
                    <li key={i} className={`flex gap-[10px] font-sans text-[13px] py-2 leading-[1.55] ${i < arr.length - 1 ? 'border-b border-white/[0.07]' : ''}`}>
                      <span className="text-brass-l font-semibold flex-shrink-0">—</span>
                      <span className="text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <div>
                    <p className="font-cormorant text-[36px] font-semibold text-brass-l leading-none">€ 450</p>
                    <p className="font-sans text-[11px] text-cream/45 mt-1">Full process · adapted to you</p>
                  </div>
                  <motion.a
                    href="/en#contact"
                    className="inline-block px-7 py-[13px] text-[11px] tracking-[2px] uppercase font-sans bg-cream text-green hover:bg-brass-l hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Apply
                  </motion.a>
                </div>
                <p className="font-sans text-[12px] italic text-cream/50 mt-[14px] pt-[14px] border-t border-white/[0.07] leading-[1.55]">
                  100% refund after the first session — if it's not right for you, I refund in full. No questions asked.
                </p>
              </div>
            </div>

            {/* Secondary — Monthly Clarity */}
            <div className="bg-white border border-[rgba(0,0,0,0.05)] p-10 flex flex-col justify-between">
              <div>
                <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass mb-[14px]">For those who've completed the process</p>
                <p className="font-cormorant text-[26px] font-light text-ink leading-[1.1] mb-[6px]">Monthly Clarity Session</p>
                <p className="font-cormorant text-[15px] italic text-lgrey font-light mb-7">Maintain direction. Decide well.</p>
                <div className="w-9 h-px bg-brass/30 mb-[22px]" />
                <p className="font-sans text-[14px] text-grey leading-[1.8] mb-6">
                  One session per month, for former clients who want to maintain the clarity built in the process. For a specific decision, a moment of being stuck again, or simply keeping the work alive.
                </p>
                <ul className="mb-7">
                  {[
                    'One session per month',
                    'No fixed commitment — month by month',
                    'Available only after completing The Clarity Process',
                  ].map((item, i, arr) => (
                    <li key={i} className={`flex gap-[10px] font-sans text-[13px] py-2 leading-[1.55] ${i < arr.length - 1 ? 'border-b border-black/[0.05]' : ''}`}>
                      <span className="text-brass font-semibold flex-shrink-0">—</span>
                      <span className="text-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center justify-between pt-6 border-t border-black/[0.06]">
                  <div>
                    <p className="font-cormorant text-[36px] font-semibold text-green leading-none">€ 120</p>
                    <p className="font-sans text-[11px] text-lgrey mt-1">Per month · no commitment</p>
                  </div>
                  <motion.a
                    href="/en#contact"
                    className="inline-block px-7 py-[13px] text-[11px] tracking-[2px] uppercase font-sans border border-green text-green bg-transparent hover:bg-green hover:text-cream transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get in touch
                  </motion.a>
                </div>
                <p className="font-sans text-[12px] italic text-lgrey mt-[14px] pt-[14px] border-t border-black/[0.05] leading-[1.55]">
                  This is not a standalone product. It's a continuation — for those who've done the process and want to keep the work going.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-[72px] px-7 md:px-16 bg-cream-d">
        <div className="max-w-[780px] mx-auto border-t-2 border-brass pt-12">
          <h2 className="font-cormorant font-light text-[clamp(26px,3.5vw,34px)] text-green leading-[1.4] mb-4">
            Not sure if this is what you need?<br />
            <em className="italic text-brass">Start with a conversation.</em>
          </h2>
          <p className="font-sans text-[14px] text-lgrey italic mb-7">
            30 minutes. Tell me where you're stuck. I'll tell you honestly whether this process makes sense for where you are right now.
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
      </section>

      {/* ── OTHER LINES ── */}
      <section className="py-16 px-7 md:px-16 border-t border-[rgba(61,90,76,0.08)] bg-cream">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-lgrey mb-6">Other lines of work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherLines.map((line) => (
              <Link key={line.href} href={line.href} className="group block">
                <div className="flex items-center justify-between gap-4 px-[26px] py-[22px] bg-cream-d border border-[rgba(61,90,76,0.08)] group-hover:bg-green group-hover:border-green transition-all duration-200">
                  <div>
                    <p className="font-cormorant text-[26px] text-brass font-light leading-none mb-1 group-hover:text-cream transition-colors">{line.number}</p>
                    <p className="font-sans text-[13px] text-ink group-hover:text-cream transition-colors leading-snug">{line.title}</p>
                  </div>
                  <span className="text-brass text-[18px] group-hover:text-cream transition-all group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
