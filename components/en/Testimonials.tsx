'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const testimonials = [
  {
    quote:
      "I attended the workshop won through the charity auction organized by La primul bebe, and the experience was exactly what I needed. It brought clarity to the chaos called handmade — where emotion, time, materials, and work mix together until you no longer know the real value of your products. The workshop was structured, logical, and easy to put into practice. I understood where I was going wrong, how to correctly calculate costs, and what I can improve so that my prices truly reflect the work I put in. I wholeheartedly recommend it to any creator who feels lost among numbers and doesn't know where to start. For me, it was exactly the guidance I needed.",
    author: 'G.N.',
    details: 'Creative Producer · Bucharest',
    program: 'Workshop · Setting the Right Price',
  },
  {
    quote:
      "I attended Smaranda's workshop on setting the right price and had many valuable 'aha moments'. She is a warm person, the information is well structured. Smaranda knows exactly what questions to ask so that you see the situation from a different perspective and understand that value is not only material. Highly recommend!",
    author: 'I.M.',
    details: 'Creative Producer · Constanța',
    program: 'Workshop · Setting the Right Price',
  },
  {
    quote:
      "Highly recommend! After 90 minutes I left with more clarity and a practical working tool. I really liked that the tool Smaranda created for correct price calculations is very detailed, simple to use, and editable whenever needed.",
    author: 'G.E.',
    details: 'Integrative Play Space · Cluj',
    program: 'Workshop · Setting the Right Price',
  },
  {
    quote:
      "I had 3 coaching sessions using the FAB method and I feel I gained enormously. Along the way I gained vision for what I want to do and clarity on 3 important directions for me. I had space for discovery, support between sessions, and great openness to everything I brought into the conversations. It was a valuable experience that helped me greatly and I recommend it with all my warmth to anyone who needs a business or life coach.",
    author: 'M.B.',
    details: 'Coach for Mothers · Ireland',
    program: 'Coaching · FAB Method',
  },
  {
    quote:
      "I have known Smaranda for almost 20 years, but only in recent years have I discovered how much an encounter with her can mean. In a conversation that stayed with me, she said: 'For sustainability, the most important thing is to know our limits and know how to communicate them to others.' That phrase changed my perspective. I began a coaching journey together — one of reconstruction, of letting go of old habits, of stepping out of the feeling of 'nothing' and 'too much'. We worked on a clear program, on self-esteem, self-control, saving, cost analysis, and understanding my own value. I am already at my 11th session and the journey continues. I am grateful to Smaranda for her patience, guidance, and the way she manages to bring to light what truly matters.",
    author: 'B.C.',
    details: 'Hairstylist Entrepreneur · Bucharest',
    program: 'Coaching & Business Mentoring',
  },
  {
    quote:
      "Taking the step into entrepreneurship in cosmetics was a challenge — a major decision that came with many questions and uncertainties. Smaranda was my essential guide in the transition from employee to entrepreneur. With her help, I transformed the initial chaos into structure and clarity. She guided me to set clear, realistic, and tangible goals, and to prioritize effectively. With full conviction, I recommend Smaranda to any entrepreneur who feels they need direction, organization, and a strong push to reach their full potential.",
    author: 'B.T.',
    details: 'Cosmetics Entrepreneur · Bucharest',
    program: 'Business Consulting & Mentoring',
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
          <BrassLine className="mx-auto" />
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

              <blockquote className="font-cormorant text-ink text-[15px] leading-[1.75] mb-8">
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
