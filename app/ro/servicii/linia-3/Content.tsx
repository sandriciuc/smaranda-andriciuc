'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    name: 'Diagnostic',
    tagline: 'Ce se întâmplă cu adevărat.',
    desc: 'Mapăm situația reală — nu versiunea pe care ți-ai spus-o singur. Unde e blocajul, ce îl declanșează, ce te costă. Majoritatea oamenilor intră știind care e problema. La finalul acestei faze, de obicei o găsim în altă parte.',
  },
  {
    num: '02',
    name: 'Lucrul',
    tagline: 'Unde trăiește pattern-ul.',
    desc: 'Intrăm în deciziile, reacțiile și momentele specifice în care mentality-ul tău lucrează împotriva ta. Întrebări precise. Fără framework-uri generice. Nu e un workshop despre concepte de leadership — e lucru pe modul tău particular de a opera sub presiunile tale particulare.',
  },
  {
    num: '03',
    name: 'Direcție',
    tagline: 'Un pas clar înainte.',
    desc: 'Pleci cu o acțiune concretă — nu cu mai mult insight, nu cu o listă de lucruri la care să te gândești. Un singur lucru pe care ești pregătit să îl faci și știi că îl vei face. Schimbarea din această fază nu e intelectuală. O simți.',
  },
]

const otherLines = [
  { number: '01', title: 'Business & Financial Strategy Consultancy & Mentoring', href: '/ro/servicii/linia-1' },
  { number: '02', title: 'Operations & Systems Consultancy | Business Architecture', href: '/ro/servicii/linia-2' },
]

export default function LiniaTrei() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-green relative overflow-hidden pt-[144px] pb-[80px] px-7 md:px-16">
        <div className="absolute bottom-[-100px] right-[-60px] w-[420px] h-[420px] rounded-full bg-[rgba(184,154,110,0.09)] pointer-events-none" />
        <div className="absolute top-10 left-[55%] w-[180px] h-[180px] rounded-full bg-[rgba(196,135,58,0.07)] pointer-events-none" />
        <div className="max-w-[780px] mx-auto relative z-10">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-brass mb-5">LINIA 03</p>
          <h1 className="font-cormorant font-light text-[clamp(48px,6vw,68px)] leading-[1.05] text-cream mb-[10px]">
            Leadership Coaching for Entrepreneurs &<br /><em className="italic text-brass-l">Leaders</em>
          </h1>
          <p className="font-cormorant text-[18px] italic text-brass-l font-light mb-7">
            Un proces de leadership mentality.
          </p>
          <p className="font-sans text-[16px] text-cream/65 font-light max-w-[500px] leading-[1.7] italic">
            Pentru antreprenori și lideri care știu ce au de făcut — și totuși nu o fac.
          </p>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="py-[72px] px-7 md:px-16 border-b border-[rgba(61,90,76,0.08)] bg-cream">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">Problema</p>

          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            Nu îți lipsesc informațiile. Nu îți lipsește competența. Și totuși există decizii pe care le amâni de luni, acțiuni pe care știi că sunt necesare și pe care tot nu le faci, un gap persistent între ce intenționezi și ce faci în realitate.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            Uneori e o decizie majoră pe care o ții în suspans pentru că mizele par prea mari. Alteori e un pattern care se repetă — te blochezi exact când contează cel mai mult. Sau conduci o echipă și simți că ceva în felul în care operezi <em className="italic">tu</em> îi limitează și pe ei.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            <strong className="text-ink font-medium">Nu e lipsă de voință. E un mod de a gândi și a decide sub presiune care nu mai servește unde vrei să ajungi.</strong>
          </p>

          <blockquote className="border-l-2 border-brass px-7 py-[14px] my-9 font-cormorant text-[23px] italic text-green leading-[1.45] bg-cream-d">
            „Claritatea externă — cifre, sisteme, structură — nu e suficientă dacă persoana care lucrează cu ele operează din frică, nu din putere proprie."
          </blockquote>

          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-[18px]">
            The Clarity Process lucrează pe modul în care gândești și decizi. Nu în abstract — aplicat direct pe situațiile reale din businessul sau cariera ta de acum. Identificăm împreună unde te blochezi, de ce, și ce e necesar pentru a trece de la intenție la acțiune.
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey">
            Nu e terapie. Nu e motivație. <strong className="text-ink font-medium">Lucru structurat, cu întrebări precise, pe ce trăiești efectiv.</strong>
          </p>
        </div>
      </section>

      {/* ── PENTRU CINE ── */}
      <section className="py-[72px] px-7 md:px-16 bg-cream-d border-b border-[rgba(61,90,76,0.08)]">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">Pentru cine e acest proces</p>

          <div className="bg-green px-10 py-9 my-11">
            <p className="font-sans text-[15px] text-cream/88 leading-[1.9] font-light">
              Ai competența. Ai informațiile. Probabil ai încercat deja să rezolvi asta singur.<br /><br />
              <em className="text-brass-l italic">Ce îți lipsește nu e mai multă claritate despre problemă. Ci claritate despre ce te oprește să o rezolvi.</em>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
            <div className="py-6 border-b border-[rgba(61,90,76,0.1)]">
              <span className="font-sans text-[10px] tracking-[2px] uppercase text-brass font-medium mb-[10px] block">Antreprenorul</span>
              <p className="font-sans text-[15px] leading-[1.85] text-grey">
                Ai o decizie majoră pe masă — un pivot, un angajat cheie, o ieșire, o tranziție — pe care o ții în suspans de mai mult timp decât are sens. Știi asta. Și tot nu te miști.
              </p>
            </div>
            <div className="py-6 border-b border-[rgba(61,90,76,0.1)]">
              <span className="font-sans text-[10px] tracking-[2px] uppercase text-brass font-medium mb-[10px] block">Liderul</span>
              <p className="font-sans text-[15px] leading-[1.85] text-grey">
                Te blochezi exact în momentele greșite — sub presiune, în conflict, în decizii cu mize mari. Un pattern prezent suficient de mult încât îl vezi clar. Dar a-l vedea clar nu a fost suficient pentru a-l schimba.
              </p>
            </div>
          </div>

          <div className="pt-7">
            <p className="font-sans text-[13px] italic text-lgrey">
              Procesul funcționează cel mai bine când ești pregătit să te uiți onest la cum operezi tu — nu doar la ce se întâmplă în jurul tău.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESUL ── */}
      <section className="py-[72px] px-7 md:px-16 bg-cream border-b border-[rgba(61,90,76,0.08)]">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">Cum funcționează procesul</p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-9">
            Trei faze. Fiecare cu un scop distinct. Împreună, te mută din blocat în clar în mișcare.
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

          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">Ce se schimbă</p>
          <div className="bg-cream-d border-l-[3px] border-green px-8 py-7">
            <p className="font-cormorant text-[21px] italic text-green leading-[1.5] font-light">
              „Nu pleci cu un nou mindset. Pleci cu o relație diferită față de modul în care decizi — una care ține când presiunea e reală."
            </p>
          </div>
        </div>
      </section>

      {/* ── PREȚURI ── */}
      <section className="py-[72px] px-7 md:px-16 bg-cream-d border-b border-[rgba(61,90,76,0.08)]">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass font-medium mb-4">Procesul & continuitatea</p>
          <p className="font-sans text-[15px] leading-[1.85] text-grey mb-9">
            Două oferte — procesul în sine și opțiunea de a continua după ce s-a încheiat.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">

            {/* Main — The Clarity Process */}
            <div className="bg-green p-10 relative overflow-hidden flex flex-col">
              <div className="absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full bg-[rgba(184,154,110,0.1)] pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass-l mb-[14px]">Procesul principal</p>
                <p className="font-cormorant text-[32px] font-light text-cream leading-[1.1] mb-[6px]">The Clarity Process</p>
                <p className="font-cormorant text-[15px] italic text-brass-l font-light mb-7">Un proces de leadership mentality.</p>
                <div className="w-9 h-px bg-brass/40 mb-[22px]" />
                <p className="font-sans text-[14px] text-cream/72 leading-[1.8] mb-6">
                  Un proces structurat, adaptat situației tale. Parcurgem cele trei faze într-un ritm care îți dă timp să aplici ce se schimbă între sesiuni. Unii oameni îl finalizează în patru săptămâni. Alții au nevoie de opt până la zece. Stabilim durata împreună la început.
                </p>
                <ul className="mb-7">
                  {[
                    'Structură în trei faze: Diagnostic, Lucrul, Direcție',
                    'Durată adaptată: 4–10 săptămâni, în funcție de situația ta',
                    'Notițe și întrebări cheie trimise după fiecare sesiune',
                  ].map((item, i, arr) => (
                    <li key={i} className={`flex gap-[10px] font-sans text-[13px] py-2 leading-[1.55] ${i < arr.length - 1 ? 'border-b border-white/[0.07]' : ''}`}>
                      <span className="text-brass-l font-semibold flex-shrink-0">—</span>
                      <span className="text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <div>
                    <p className="font-cormorant text-[36px] font-semibold text-brass-l leading-none">1.500 lei</p>
                    <p className="font-sans text-[11px] text-cream/45 mt-1">Proces complet · adaptat ție</p>
                  </div>
                  <motion.a
                    href="/ro#contact"
                    className="inline-block px-7 py-[13px] text-[11px] tracking-[2px] uppercase font-sans bg-cream text-green hover:bg-brass-l hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Aplică
                  </motion.a>
                </div>
                <p className="font-sans text-[12px] italic text-cream/50 mt-[14px] pt-[14px] border-t border-white/[0.07] leading-[1.55]">
                  Ramburs 100% după prima sesiune — dacă nu e potrivit pentru tine, returnez integral. Fără întrebări.
                </p>
              </div>
            </div>

            {/* Secondary — Sesiune Lunară */}
            <div className="bg-white border border-[rgba(0,0,0,0.05)] p-10 flex flex-col justify-between">
              <div>
                <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-brass mb-[14px]">Pentru cei care au finalizat procesul</p>
                <p className="font-cormorant text-[26px] font-light text-ink leading-[1.1] mb-[6px]">Sesiune Lunară de Claritate</p>
                <p className="font-cormorant text-[15px] italic text-lgrey font-light mb-7">Menții direcția. Decizi bine.</p>
                <div className="w-9 h-px bg-brass/30 mb-[22px]" />
                <p className="font-sans text-[14px] text-grey leading-[1.8] mb-6">
                  O sesiune pe lună, pentru foștii clienți care vor să mențină claritatea construită în proces. Pentru o decizie specifică, un moment de blocare din nou, sau pur și simplu pentru a ține lucrul viu.
                </p>
                <ul className="mb-7">
                  {[
                    'O sesiune pe lună',
                    'Fără angajament fix — lună cu lună',
                    'Disponibil doar după finalizarea The Clarity Process',
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
                    <p className="font-cormorant text-[36px] font-semibold text-green leading-none">400 lei</p>
                    <p className="font-sans text-[11px] text-lgrey mt-1">Pe lună · fără angajament</p>
                  </div>
                  <motion.a
                    href="/ro#contact"
                    className="inline-block px-7 py-[13px] text-[11px] tracking-[2px] uppercase font-sans border border-green text-green bg-transparent hover:bg-green hover:text-cream transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Contactează-mă
                  </motion.a>
                </div>
                <p className="font-sans text-[12px] italic text-lgrey mt-[14px] pt-[14px] border-t border-black/[0.05] leading-[1.55]">
                  Nu e un produs de sine stătător. E o continuare — pentru cei care au făcut procesul și vor să mențină lucrul.
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
            Nu ești sigur dacă asta e ce ai nevoie?<br />
            <em className="italic text-brass">Începe cu o conversație.</em>
          </h2>
          <p className="font-sans text-[14px] text-lgrey italic mb-7">
            30 de minute. Îmi spui unde ești blocat. Îți spun sincer dacă acest proces are sens pentru unde ești acum.
          </p>
          <motion.a
            href="/ro#contact"
            className="inline-block px-9 py-[15px] bg-amber text-cream font-sans text-[11px] tracking-[2.5px] uppercase transition-colors duration-200 hover:bg-green"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicită o conversație gratuită
          </motion.a>
        </div>
      </section>

      {/* ── ALTE LINII ── */}
      <section className="py-16 px-7 md:px-16 border-t border-[rgba(61,90,76,0.08)] bg-cream">
        <div className="max-w-[780px] mx-auto">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-lgrey mb-6">Alte linii de activitate</p>
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
