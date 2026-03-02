'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const testimoniale = [
  {
    quote:
      'Nu era ceva în neregulă cu mine. Îmi lipsea structura. Acum o am.',
    author: 'Raluca M.',
    details: 'Avocat, 34 ani · București',
    program: 'Business Plan 1 la 1',
  },
  {
    quote:
      'Am venit cu întrebarea: «E fezabil să renunț la job în 6 luni?» Răspunsul, pe cifre: da — dar în 10 luni, nu 6. Și știu exact de ce.',
    author: 'Andreea P.',
    details: 'Arhitect · Cluj',
    program: 'Business Plan 1 la 1',
  },
  {
    quote:
      'Verific cifrele lunar acum. Nu le evit. Am control.',
    author: 'Mihaela D.',
    details: 'Antreprenoare beauty · Brașov',
    program: 'Program de Grup',
  },
]

export default function Testimoniale() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimoniale.length)
  const prev = () => setActive((prev) => (prev - 1 + testimoniale.length) % testimoniale.length)

  return (
    <section id="testimoniale" className="bg-green py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="mb-14 text-center">
          <p className="label-style text-brass-l mb-3">REZULTATE REALE</p>
          <BrassLine className="mb-6 mx-auto" />
          <h2 className="font-cormorant text-cream text-[clamp(28px,3.5vw,42px)] leading-tight">
            Ce spun cifrele despre munca noastră
          </h2>
        </AnimatedSection>

        {/* Carousel */}
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
              {/* Quote mark */}
              <div className="font-cormorant text-brass text-[72px] leading-none mb-4 opacity-30">
                "
              </div>

              <blockquote className="font-cormorant text-ink text-[clamp(20px,2.5vw,28px)] leading-[1.5] mb-8">
                {testimoniale[active].quote}
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans font-semibold text-ink text-[15px]">
                    {testimoniale[active].author}
                  </p>
                  <p className="font-sans text-grey text-[13px]">
                    {testimoniale[active].details}
                  </p>
                  <p className="label-style text-brass text-[10px] mt-1">
                    {testimoniale[active].program}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-green hover:bg-green/10 transition-colors"
                    aria-label="Testimonial anterior"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-green hover:bg-green/10 transition-colors"
                    aria-label="Testimonial următor"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimoniale.map((_, i) => (
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
