'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const lines = [
  {
    number: '01',
    title: 'Business Architect & Financial Strategist',
    sub: 'For entrepreneurs who want to know, not to hope.',
    href: '/en/services/line-1',
  },
  {
    number: '02',
    title: 'Operations & Systems Consultant | Business Architect',
    sub: 'For companies that want to operate more clearly.',
    href: '/en/services/line-2',
  },
  {
    number: '03',
    title: 'Personal Leadership & Entrepreneurial Mindset Coaching',
    sub: 'For people who want to lead with more clarity.',
    href: '/en/services/line-3',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream-d py-24 px-6">
      <div className="max-w-6xl mx-auto">
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

        <div className="space-y-4">
          {lines.map((line, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <Link href={line.href} className="group block">
                <div className="flex items-center justify-between gap-4 px-8 py-6 rounded-2xl border border-green/10 bg-cream group-hover:bg-green-d transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[11px] font-medium text-brass group-hover:text-brass-l flex-shrink-0 transition-colors">
                      {line.number}
                    </span>
                    <div>
                      <h3 className="font-cormorant text-[clamp(18px,2vw,24px)] leading-tight text-ink group-hover:text-cream transition-colors">
                        {line.title}
                      </h3>
                      <p className="font-sans text-[13px] mt-1 text-grey group-hover:text-cream/60 transition-colors">
                        {line.sub}
                      </p>
                    </div>
                  </div>
                  <span className="text-brass group-hover:text-amber text-xl flex-shrink-0 transition-all group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
