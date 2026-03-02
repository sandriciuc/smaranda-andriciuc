'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const testimonials = [
  {
    quote:
      "There was nothing wrong with me. I was missing structure. Now I have it.",
    author: 'Raluca M.',
    details: 'Lawyer, 34 · Bucharest',
    program: 'Business Plan 1 on 1',
  },
  {
    quote:
      'I came with the question: "Is it feasible to leave my job in 6 months?" The answer, on numbers: yes — but in 10 months, not 6. And I know exactly why.',
    author: 'Andreea P.',
    details: 'Architect · Cluj',
    program: 'Business Plan 1 on 1',
  },
  {
    quote:
      "I check the numbers monthly now. I no longer avoid them. I have control.",
    author: 'Mihaela D.',
    details: 'Beauty entrepreneur · Brașov',
    program: 'Group Program',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="bg-green py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="mb-14 text-center">
          <p className="label-style text-brass-l mb-3">REAL RESULTS</p>
          <BrassLine className="mb-6 mx-auto" />
          <h2 className="font-cormorant text-cream text-[clamp(28px,3.5vw,42px)] leading-tight">
            What the numbers say about our work
          </h2>
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-cream rounded-2xl p-10 border border-brass/20"
            >
              <div className="font-cormorant text-brass text-[72px] leading-none mb-4 opacity-30">
                "
              </div>

              <blockquote className="font-cormorant text-ink text-[clamp(20px,2.5vw,28px)] leading-[1.5] mb-8">
                {testimonials[active].quote}
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans font-semibold text-ink text-[15px]">
                    {testimonials[active].author}
                  </p>
                  <p className="font-sans text-grey text-[13px]">
                    {testimonials[active].details}
                  </p>
                  <p className="label-style text-brass text-[10px] mt-1">
                    {testimonials[active].program}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-green hover:bg-green/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-green hover:bg-green/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'bg-amber w-6 h-2' : 'bg-cream/30 w-2 h-2'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
