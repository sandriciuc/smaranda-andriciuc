'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

const credentials = [
  { icon: '📐', text: 'Civil Engineer (UTCB) + Economist (ASE Bucharest)' },
  { icon: '🏆', text: 'ICF & EMCC Certified Coach (in progress)' },
  { icon: '🇧🇪', text:  'Based in Belgium — international experience' },
  { icon: '⚙️', text: '20+ years in technical and industrial environments' },
  { icon: '💼', text: 'Expertise: financial analysis, business structure, mentoring, leadership & mindset' },
]

export default function AboutMe() {
  return (
    <section id="about" className="bg-green py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Photo placeholder */}
          <AnimatedSection variant="fadeIn">
            <div className="relative">
              <div className="w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                <Image
                  src="/smaranda.jpg"
                  alt="Smaranda Andriciuc"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border border-brass/20 -z-10" />
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <div>
            <AnimatedSection delay={0.1}>
              <p className="label-style text-brass-l mb-3">ABOUT ME</p>
              <BrassLine className="mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 className="font-cormorant text-cream text-[clamp(28px,3.5vw,42px)] leading-[1.15] mb-8">
                Two degrees. One insight:
                <br />
                <em className="text-brass-l">rigor doesn't belong to reports — it belongs to people who need numbers to decide.</em>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="font-sans text-cream/80 text-[15px] leading-[1.75] space-y-4 mb-8">
                <p>
                  Civil engineer and economist by training. Operations consultant and business
                  mentor by practice. Over 20 years of experience in technical and industrial
                  environments in Romania and Belgium.
                </p>
                <p>
                  Today I bring that same rigor to three directions: operational systems for
                  companies, financial clarity for entrepreneurs, and leadership & entrepreneurial
                  mindset coaching — because external systems don't work without internal clarity.
                </p>
                <p className="font-medium text-cream/90">I don't sell courage. I build clarity.</p>
                <p className="font-cormorant italic text-brass-l text-[22px] leading-relaxed">
                  I don't promise you can. I show you you can. With your numbers, not someone else's.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.25}>
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="font-mono text-amber text-[32px] font-medium">
                    <AnimatedCounter to={20} suffix="+" />
                  </p>
                  <p className="font-sans text-cream/60 text-[12px] uppercase tracking-widest">
                    Years experience
                  </p>
                </div>
                <div className="w-px bg-cream/10" />
                <div>
                  <p className="font-mono text-amber text-[32px] font-medium">2</p>
                  <p className="font-sans text-cream/60 text-[12px] uppercase tracking-widest">
                    Countries
                  </p>
                </div>
                <div className="w-px bg-cream/10" />
                <div>
                  <p className="font-mono text-amber text-[32px] font-medium">
                    <AnimatedCounter to={3} suffix="" />
                  </p>
                  <p className="font-sans text-cream/60 text-[12px] uppercase tracking-widest">
                    Service lines
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Credentials */}
            <motion.ul
              className="space-y-3 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
            >
              {credentials.map((cred, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-green-d/50 rounded-xl px-4 py-3 border border-brass-l/10"
                >
                  <span className="text-[18px] flex-shrink-0">{cred.icon}</span>
                  <span className="font-sans text-cream/75 text-[13px] leading-snug">{cred.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Quote */}
            <AnimatedSection delay={0.1}>
              <blockquote className="font-cormorant italic text-brass-l text-[22px] leading-relaxed">
                „I don't promise you can.
                <br />
                I show you that you can — with your numbers, not someone else's."
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
