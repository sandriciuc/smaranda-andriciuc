'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const testimoniale = [
  {
    quote:
      'Am participat la workshopul câștigat în urma licitației caritabile organizate de La primul bebe, iar experiența a fost exact ce aveam nevoie. Mi-a adus claritate în haosul numit handmade — acolo unde emoția, timpul, materialele și munca se amestecă și ajungi să nu mai știi care este valoarea reală a produselor tale. Workshopul a fost structurat, logic și ușor de pus în practică. Am înțeles unde greșeam, cum pot calcula corect costurile și ce pot îmbunătăți pentru ca prețurile mele să reflecte realmente munca depusă. Îl recomand din tot sufletul oricărui creator care simte că se pierde printre cifre și nu mai știe de unde să înceapă. Pentru mine, a fost exact ghidajul de care aveam nevoie.',
    author: 'G.N.',
    details: 'Producător creativ · București',
    program: 'Workshop · Calculul prețului corect',
  },
  {
    quote:
      'Am participat la workshopul pentru calculul prețului corect și am avut multe „aha-uri" valoroase. Smaranda este o persoană caldă, informația este bine structurată. Știe ce întrebări să îți pună astfel încât să vezi situația din altă perspectivă și să înțelegi că valoarea nu este doar materială. Recomand!',
    author: 'I.M.',
    details: 'Producător creativ · Constanța',
    program: 'Workshop · Calculul prețului corect',
  },
  {
    quote:
      'Recomand cu mare drag! După cele 90 de minute am plecat cu mai multă claritate și cu un instrument practic de lucru. Mi-a plăcut mult că instrumentul creat de Smaranda pentru calcule corecte de preț este foarte detaliat, simplu de folosit și editabil oricând este cazul.',
    author: 'G.E.',
    details: 'Spațiu de joacă integrativ · Cluj',
    program: 'Workshop · Calculul prețului corect',
  },
  {
    quote:
      'Am beneficiat de 3 ședințe de coaching cu metoda FAB și simt că am câștigat enorm. Pe parcurs am obținut viziune asupra a ceea ce vreau să fac și claritate pe 3 direcții importante pentru mine. Am avut parte de spațiu de descoperire, susținere între sesiuni și multă deschidere la tot ce am adus în conversații. A fost o experiență valoroasă pe care o recomand cu toată căldura oricui are nevoie de un coach de business sau de viață.',
    author: 'M.B.',
    details: 'Coach pentru mame · Irlanda',
    program: 'Coaching · Metoda FAB',
  },
  {
    quote:
      'Pe Smaranda o cunosc de aproape 20 de ani, însă abia în ultimii ani am descoperit cât de mult poate însemna întâlnirea cu ea. Mi-a spus: „Pentru sustenabilitate, cel mai important este să ne știm limitele și să știm să le comunicăm celorlalți." Această frază mi-a schimbat perspectiva. Am început împreună o călătorie de coaching — de reconstrucție, de renunțare la obiceiuri vechi, de ieșire din senzația de „nimic" și de „prea mult". Am lucrat la un program clar, la stima de sine, la autocontrol, la economisire, la analiza costurilor și la înțelegerea propriei valori. Sunt deja la a 11-a ședință și drumul continuă. Îi sunt recunoscătoare pentru răbdare, ghidaj și pentru felul în care reușește să scoată la lumină ceea ce contează cu adevărat.',
    author: 'B.C.',
    details: 'Hairstylist antreprenor · București',
    program: 'Coaching & Mentoring de Business',
  },
  {
    quote:
      'Pasul către antreprenoriat în cosmetică a venit cu o mulțime de întrebări și incertitudini. Smaranda a fost ghidul meu esențial în tranziția de la angajat la antreprenor. Cu ajutorul ei, am transformat haosul inițial în structură și claritate. M-a ghidat să îmi setez obiective clare, realiste și tangibile, să prioritizez eficient. Cu toată convingerea, o recomand oricărui antreprenor care simte că are nevoie de direcție, organizare și un impuls puternic pentru a-și atinge potențialul maxim.',
    author: 'B.T.',
    details: 'Cosmetician antreprenor · București',
    program: 'Consultanță și Mentoring de Business',
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
          <BrassLine className="mx-auto" />
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

              <blockquote className="font-cormorant text-ink text-[15px] leading-[1.75] mb-8">
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
