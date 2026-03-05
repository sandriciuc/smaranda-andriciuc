'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/* ─── Sub-components ─────────────────────────────────────────── */

function Badge({ text, variant }: { text: string; variant: 'free' | 'entry' | 'group' | 'star' | 'premium' }) {
  const cls = {
    free:    'bg-green text-cream',
    entry:   'bg-cream-d text-grey border border-[#d4cfc8]',
    group:   'bg-brass text-cream',
    star:    'bg-amber text-white',
    premium: 'bg-ink text-cream',
  }[variant]
  return (
    <span className={`absolute -top-px left-10 text-[9px] tracking-[0.25em] uppercase font-semibold font-sans px-3.5 py-[5px] rounded-b-sm ${cls}`}>
      {text}
    </span>
  )
}

function Includes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="text-green font-semibold text-[12px] flex-shrink-0 mt-0.5">✓</span>
          <span className="font-sans text-ink text-[13px] leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Testimonial({ text }: { text: string }) {
  return (
    <blockquote className="bg-cream border-l-[3px] border-cream-d pl-5 py-3 mb-8 italic text-grey font-sans text-[13px] leading-[1.7] font-light">
      "{text}"
    </blockquote>
  )
}

function CtaBtn({ href, variant, children }: { href: string; variant?: string; children: React.ReactNode }) {
  const base = 'inline-block px-8 py-3.5 text-[11px] tracking-[1.5px] uppercase font-medium font-sans transition-all duration-200 rounded-sm'
  const variants: Record<string, string> = {
    outline: 'border border-green text-green hover:bg-green hover:text-cream',
    green:   'bg-green text-cream hover:bg-green-d',
    amber:   'bg-amber text-white hover:brightness-90',
    dark:    'bg-ink text-cream hover:bg-[#333]',
  }
  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant || 'green']}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}

/* ─── Static data ────────────────────────────────────────────── */

const flowSteps = [
  { id: '1', name: 'The Money Map', sub: 'Your first financial structure' },
  { id: '2', name: 'The Financial Decision', sub: 'You build your business plan' },
  { id: '3', name: 'The Advisory', sub: 'You execute with support' },
]

const decisionCards = [
  {
    borderColor: 'border-t-green',
    label: 'If you want to start building on your own',
    name: 'The Money Map',
    desc: 'Free, self-managed, 6 weeks. The right first step if you learn by doing and want a tool — not a conversation.',
  },
  {
    borderColor: 'border-t-brass',
    label: 'If you have a major decision ahead',
    name: 'The Financial Decision',
    desc: 'Your plan. Your numbers. The answer to: "When can I make the transition safely?" — with evidence, not hope.',
  },
  {
    borderColor: 'border-t-amber',
    label: 'If you have a plan and need to execute it',
    name: 'The Advisory',
    desc: 'The Advisory — available after completing The Financial Decision.',
  },
]

const otherLines = [
  { number: '02', title: 'Operations & Systems Consultancy | Business Architecture', href: '/en/services/line-2' },
  { number: '03', title: 'Leadership Coaching for Entrepreneurs & Leaders', href: '/en/services/line-3' },
]

/* ─── Main component ─────────────────────────────────────────── */

export default function LineOne() {
  return (
    <div className="min-h-screen">

      {/* ── Page Header ── */}
      <div className="bg-cream-d">
        <div className="max-w-6xl mx-auto px-6 pt-36 pb-14">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors mb-8"
          >
            ← Back to main page
          </Link>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-brass mb-5">LINE 01</p>
          <h1 className="font-cormorant text-ink text-[clamp(32px,4.5vw,52px)] leading-[1.12] mb-6">
            Business & Financial Strategy<br /><em className="italic text-green">Consultancy & Mentoring</em>
          </h1>
          <p className="font-sans text-[16px] text-grey font-light leading-[1.7] max-w-[620px] border-l-[3px] border-brass pl-5 italic">
            For entrepreneurs who want to know, not to hope.
          </p>
        </div>
      </div>

      {/* ── Intro Block ── */}
      <div className="bg-green">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="font-sans text-[15px] text-cream/80 leading-[1.8] font-light max-w-[700px]">
            You have a stable job. Maybe a good one. But something no longer works. There's an idea — a business, a change, a version of work that is truly yours.
            <br /><br />
            The question is not whether you have the courage.{' '}
            <strong className="text-brass-l font-medium">The question is whether the numbers make sense.</strong>
            <br /><br />
            This line of work is built as a progression: you start where you are, build at your own pace and move to the next level only when the foundation is in place. No shortcuts. No skipped steps. A real financial system, built on your real numbers.
          </p>
        </div>
      </div>

      {/* ── Tiers ── */}
      <div className="bg-cream-d">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section label */}
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-lgrey font-medium pt-12 mb-10">
            Entry · Free Access
          </p>

          {/* 1 — The Money Map */}
          <div className="mb-6">
            <div className="relative bg-white border border-cream-d py-11 px-10">
              <Badge text="Free" variant="free" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7 pt-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">1 · 6 Weeks</p>
                  <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">The Money Map</h3>
                  <p className="font-sans text-[13px] text-lgrey font-light italic">One tool. Your numbers. Control from day one.</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="font-cormorant text-[36px] font-medium leading-none text-green">Free</p>
                  <p className="font-sans text-[11px] text-lgrey mt-1 font-light">No mandatory live sessions</p>
                </div>
              </div>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-7">
                You receive the complete Excel template from the start — you can open it, fill it in and use it immediately, without waiting for anything. Or you integrate it into your life over 6 weeks, with guided instructions delivered step by step. At the end you don't have a summary. You have a functional financial map of your real situation — one you can use independently, at any time.
              </p>
              <Includes items={[
                'Excel Money Map template — your structure, your numbers, from day one',
                '6 weeks of guided instructions delivered periodically',
                'Self-managed — no mandatory live sessions, no imposed schedule',
                'A clear foundation for any financial decision that follows',
              ]} />
              <CtaBtn href="/en#contact" variant="outline">Start with The Money Map</CtaBtn>
            </div>
          </div>

          {/* Section label */}
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-lgrey font-medium pt-4 mb-6">
            Level 2 · 1:1 · Personalised
          </p>

          {/* 2 — The Financial Decision */}
          <div className="mb-6">
            <div className="relative bg-white border border-cream-d py-11 px-10">
              <Badge text="★ Most chosen" variant="star" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-7 pt-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">2 · Personalised</p>
                  <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">The Financial Decision</h3>
                  <p className="font-sans text-[13px] text-lgrey font-light italic">For women who are done guessing.</p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <p className="font-cormorant text-[36px] font-medium leading-none text-ink">1.200 <span className="text-[18px] font-light">€</span></p>
                  <p className="font-sans text-[11px] text-lgrey mt-1 font-light">Sessions adapted to your needs</p>
                </div>
              </div>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-7 max-w-[640px]">
                A 1:1 working process built around your real situation — your numbers, your business, your decision. We work together in sessions adapted to your needs. We analyse what exists, build what is missing, calculate the real scenarios. At the end you know exactly where you stand, what is feasible and when.
              </p>
              <Includes items={[
                'A complete financial business plan for 12 months — built on your data, not industry averages',
                'An Excel tool you can use and adapt independently after we finish',
                'A weekly action plan for the first 3 months — concrete, applicable from the next day',
                'A one-page document with everything that matters — for moments when you need clarity at a glance',
                'Real support between sessions — you are not alone in the process',
              ]} />
              <Testimonial text="Rational permission to decide — based on real numbers, not hope." />
              <CtaBtn href="/en#contact" variant="amber">I want my plan</CtaBtn>
            </div>
          </div>

          {/* Access Rule */}
          <div className="bg-cream border-l-[3px] border-amber px-6 py-5 mb-6">
            <p className="font-sans text-[13px] text-grey font-light leading-[1.6]">
              <strong className="text-ink font-medium">Access to Level 3 requires completing Level 2.</strong>{' '}
              The Advisory is available only to those who have built a functional business plan through The Financial Decision. This is not a filtering mechanism. This is how the work stays grounded.
            </p>
          </div>

          {/* 3 — The Advisory */}
          <div className="pb-12">
            <div className="relative bg-white border border-cream-d py-11 px-10">
              <Badge text="Premium" variant="premium" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-7 pt-4">
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass font-semibold mb-2">3 · Monthly · 1:1 · Long term</p>
                  <h3 className="font-cormorant text-[28px] text-ink leading-[1.2] mb-1.5">The Advisory</h3>
                  <p className="font-sans text-[13px] text-lgrey font-light italic">Not a plan. A partner who knows your business.</p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <p className="font-cormorant text-[36px] font-medium leading-none text-ink">300+ <span className="text-[18px] font-light">€</span></p>
                  <p className="font-sans text-[11px] text-lgrey mt-1 font-light">/ month · price on request</p>
                </div>
              </div>
              <p className="font-sans text-[15px] text-grey leading-[1.75] font-light mb-7 max-w-[640px]">
                There is a difference between knowing what to do and having someone who knows your numbers, your context, your decisions — and is there when it matters most. The Advisory is for those who have moved past the clarification phase and want continuous, personalised strategic support, without starting from scratch at every session. We review results. We adjust direction. We make decisions together when the pressure is real.
              </p>
              <Includes items={[
                'Monthly 1:1 strategy sessions — on your real numbers and context',
                'Continuous access for urgent decisions between sessions',
                'Ongoing plan review based on real results',
                'Real-time strategy adjustments',
                'Full continuity — I know your business, your numbers, your context',
              ]} />
              <Testimonial text="I'm not just informed — I transformed how I relate to my business." />
              <CtaBtn href="/en#contact" variant="dark">Apply for The Advisory</CtaBtn>
            </div>
          </div>

        </div>
      </div>

      {/* ── Flow Section ── */}
      <div className="bg-green">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="font-cormorant text-[32px] text-cream leading-tight mb-2">
            The logical <em className="italic text-brass-l">flow</em>
          </h2>
          <p className="font-sans text-[13px] text-cream/60 font-light tracking-[0.05em] mb-9">
            Each level builds on the previous one. Move at your own pace.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap items-stretch md:items-start gap-0">
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="bg-cream/7 border border-cream/15 px-6 py-5 flex-1 min-w-[140px]" style={{ background: 'rgba(245,242,238,0.07)' }}>
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-brass font-semibold mb-1.5">{step.id}</p>
                  <p className="font-cormorant text-[18px] text-cream leading-[1.2]">{step.name}</p>
                  <p className="font-sans text-[11px] text-cream/50 mt-1 font-light">{step.sub}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="text-brass text-[18px] opacity-60 flex items-center justify-center px-2 py-4 md:py-0 rotate-90 md:rotate-0">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Decision Guide ── */}
      <div className="bg-cream-d">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h3 className="font-cormorant text-[28px] text-ink leading-tight mb-2">Not sure where to start?</h3>
          <p className="font-sans text-[13px] text-lgrey font-light mb-8">
            Here is the honest answer based on where you actually are.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {decisionCards.map((card, i) => (
              <div key={i} className={`bg-cream border-t-[3px] ${card.borderColor} p-6`}>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-lgrey font-medium mb-2">{card.label}</p>
                <p className="font-cormorant text-[18px] text-ink mb-2.5">{card.name}</p>
                <p className="font-sans text-[12px] text-grey leading-[1.6] font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Other Lines Navigation ── */}
      <div className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-16">
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
