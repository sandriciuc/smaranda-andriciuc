'use client'

import { useRouter } from 'next/navigation'

/* ─── Reusable primitives ─────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] tracking-[3px] uppercase text-amber font-medium mb-2">
      {children}
    </p>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-cormorant text-[30px] font-normal text-green-d leading-[1.2] mb-6 pb-[18px] border-b border-amber/25">
      {children}
    </h2>
  )
}

function DataCard({ label, rows }: { label: string; rows: React.ReactNode[] }) {
  return (
    <div className="bg-green-d rounded-2xl px-9 py-8 my-7 text-cream">
      <p className="font-sans text-[10px] tracking-[3px] uppercase text-brass-l mb-4">{label}</p>
      <div className="space-y-2.5">
        {rows.map((row, i) => (
          <div key={i} className="flex items-start gap-3 font-sans text-[14px] text-cream/85 leading-[1.6]">
            <span className="text-brass-l flex-shrink-0 mt-0.5">—</span>
            <span>{row}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber/8 border-l-[3px] border-amber rounded-r-xl px-6 py-5 my-6 font-sans text-[14px] text-grey leading-relaxed">
      {children}
    </div>
  )
}

function BodyP({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[15px] text-grey leading-[1.85] mb-4 last:mb-0">
      {children}
    </p>
  )
}

/* ─── Main component ─────────────────────────────────────────── */

export default function Content() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Header ── */}
      <div className="bg-green-d pt-32 pb-12 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(196,135,58,0.12) 0%, transparent 65%)' }}
        />
        <div className="relative max-w-[820px] mx-auto px-7">
          <p className="font-sans text-[10px] tracking-[3.5px] uppercase text-brass-l mb-[18px] font-normal">
            SC Eurohale Proiect SRL · Finance. Accountability. Business.
          </p>
          <h1 className="font-cormorant font-light text-[clamp(38px,6vw,62px)] text-cream leading-[1.1] tracking-[-0.5px]">
            Politică de{' '}
            <em className="italic text-brass-l">Confidențialitate</em>
          </h1>
          <p className="mt-5 font-sans text-[13px] text-cream/55 font-light tracking-[0.5px]">
            Conformă cu Regulamentul (UE) 2016/679 (GDPR) și legislația română în vigoare
          </p>
          <div className="w-[60px] h-px bg-amber opacity-60 mx-auto mt-[30px]" />
          <div className="inline-flex items-center gap-2 bg-amber/12 border border-amber/30 rounded-full px-4 py-1.5 font-sans text-[12px] text-amber mt-7">
            <span className="w-1.5 h-1.5 bg-amber rounded-full" />
            Ultima actualizare: Martie 2026
          </div>
        </div>
      </div>

      {/* ── Back button ── */}
      <div className="max-w-[820px] mx-auto px-7 pt-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors"
        >
          ← Înapoi la pagina anterioară
        </button>
      </div>

      {/* ── Table of contents ── */}
      <div className="max-w-[820px] mx-auto px-7 my-14">
        <div className="bg-white border border-amber/25 rounded-2xl px-10 py-9 shadow-[0_4px_32px_rgba(46,61,48,0.06)]">
          <h3 className="font-cormorant text-[20px] font-medium text-green-d mb-5 pb-3.5 border-b border-amber/25">
            Cuprins
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-8">
            {[
              ['#operator', '1. Cine este operatorul de date'],
              ['#date-colectate', '2. Ce date colectăm'],
              ['#scopuri', '3. Scopuri și temei juridic'],
              ['#retentie', '4. Cât timp păstrăm datele'],
              ['#destinatari', '5. Cui transmitem datele'],
              ['#transferuri', '6. Transferuri internaționale'],
              ['#drepturi', '7. Drepturile tale'],
              ['#cookies', '8. Cookie-uri'],
              ['#minori', '9. Date privind minorii'],
              ['#modificari', '10. Modificări ale politicii'],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-2 font-sans text-[14px] text-grey hover:text-amber transition-colors group"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-amber flex-shrink-0 group-hover:scale-150 transition-transform" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ══ Sections ══ */}
      <div className="max-w-[820px] mx-auto px-7 space-y-[60px] pb-16">

        {/* 1 — Operator */}
        <section id="operator">
          <SectionLabel>01</SectionLabel>
          <SectionTitle>Cine este <em className="italic text-amber">operatorul de date</em></SectionTitle>
          <DataCard
            label="Date de identificare ale operatorului"
            rows={[
              <><strong className="text-cream font-medium">Denumire:</strong> SC Eurohale Proiect SRL</>,
              <><strong className="text-cream font-medium">Sediu:</strong> București, Sector 3, Str. Miletin nr. 1</>,
              <><strong className="text-cream font-medium">Website:</strong> smaranda-andriciuc.com</>,
              <><strong className="text-cream font-medium">Email contact:</strong> smaranda.andriciuc@gmail.com</>,
            ]}
          />
          <BodyP>
            SC Eurohale Proiect SRL este un serviciu de coaching financiar și consultanță de business, oferit exclusiv online, operat de <strong className="text-ink font-medium">SC Eurohale Proiect SRL</strong>, persoană juridică română. Operatorul prelucrează date cu caracter personal în calitate de <strong className="text-ink font-medium">operator independent</strong>, în conformitate cu Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal (GDPR), cu Legea nr. 190/2018 privind măsuri de punere în aplicare a GDPR în România, precum și cu orice altă reglementare relevantă în vigoare.
          </BodyP>
          <NoteBox>
            <strong className="text-amber">Autoritate de supraveghere competentă:</strong> Operatorul este o persoană juridică română cu sediul în București. Autoritatea competentă este <strong className="text-ink font-medium">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong> — www.dataprotection.ro.
          </NoteBox>
        </section>

        {/* 2 — Date colectate */}
        <section id="date-colectate">
          <SectionLabel>02</SectionLabel>
          <SectionTitle>Ce date <em className="italic text-amber">colectăm</em></SectionTitle>
          <BodyP>În funcție de modul în care interacționezi cu platforma noastră, putem colecta următoarele categorii de date cu caracter personal:</BodyP>
          <DataCard
            label="Categorii de date prelucrate"
            rows={[
              <><strong className="text-cream font-medium">Date de identificare:</strong> Nume, prenume, adresă de email, număr de telefon (dacă este furnizat voluntar)</>,
              <><strong className="text-cream font-medium">Date profesionale:</strong> Ocupație, stadiul business-ului, domeniu de activitate — furnizate în contextul sesiunilor de coaching sau al formularelor de contact</>,
              <><strong className="text-cream font-medium">Date financiare generale:</strong> Informații despre venituri, cheltuieli, obiective financiare — exclusiv în contextul consultanței, furnizate voluntar de client</>,
              <><strong className="text-cream font-medium">Date tehnice:</strong> Adresă IP, tip de browser, pagini vizitate, durata sesiunii — colectate automat prin cookies și instrumente de analiză</>,
              <><strong className="text-cream font-medium">Date de comunicare:</strong> Mesaje transmise prin formularul de contact, email sau platformele de sesiuni online (ex: Google Meet)</>,
            ]}
          />
          <BodyP>
            <strong className="text-ink font-medium">Nu colectăm categorii speciale de date</strong> (date privind sănătatea, convingerile religioase, originea etnică etc.) și nu solicităm astfel de informații. Dacă o persoană vizată furnizează voluntar astfel de date în cadrul sesiunilor, prelucrarea se întemeiază exclusiv pe consimțământul explicit al acesteia, conform art. 9 alin. (2) lit. a) din GDPR.
          </BodyP>
        </section>

        {/* 3 — Scopuri */}
        <section id="scopuri">
          <SectionLabel>03</SectionLabel>
          <SectionTitle>Scopuri și <em className="italic text-amber">temei juridic</em></SectionTitle>
          <BodyP>Fiecare prelucrare de date personale are un scop determinat și un temei juridic explicit, conform art. 6 GDPR. Vă prezentăm tabelul complet mai jos:</BodyP>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse font-sans text-[14px]">
              <thead>
                <tr>
                  {['Scop', 'Date implicate', 'Temei juridic (art. 6 GDPR)'].map((h) => (
                    <th key={h} className="bg-green-d text-brass-l font-normal text-[10px] tracking-[2px] uppercase text-left px-[18px] py-3.5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Furnizarea serviciilor de coaching și consultanță', 'Identificare, profesionale, financiare generale', 'Executarea contractului — lit. b)'],
                  ['Răspuns la solicitările de contact și informații', 'Identificare, comunicare', 'Consimțământ — lit. a) sau interes legitim — lit. f)'],
                  ['Gestionarea programărilor și sesiunilor online', 'Identificare, date tehnice (platforme video)', 'Executarea contractului — lit. b)'],
                  ['Trimiterea de newsletter sau comunicări de marketing', 'Adresă email, preferințe', 'Consimțământ explicit și revocabil — lit. a)'],
                  ['Îndeplinirea obligațiilor legale (facturare, contabilitate)', 'Identificare, date de facturare', 'Obligație legală — lit. c)'],
                  ['Analiză statistică și îmbunătățirea website-ului', 'Date tehnice (IP anonim, comportament pe site)', 'Interes legitim — lit. f)'],
                ].map(([scop, date, temei], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-green-d/[0.04]' : ''}>
                    <td className="px-[18px] py-3.5 border-b border-amber/25 text-ink font-medium leading-[1.6] align-top">{scop}</td>
                    <td className="px-[18px] py-3.5 border-b border-amber/25 text-grey leading-[1.6] align-top">{date}</td>
                    <td className="px-[18px] py-3.5 border-b border-amber/25 text-grey leading-[1.6] align-top">{temei}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <NoteBox>
            <strong className="text-amber">Referitor la consimțământ:</strong> Acolo unde prelucrarea se întemeiază pe consimțământ, aveți dreptul de a-l retrage oricând, fără a afecta legalitatea prelucrărilor efectuate anterior retragerii. Retragerea se face printr-un simplu email la adresa de contact indicată mai sus.
          </NoteBox>
        </section>

        {/* 4 — Retenție */}
        <section id="retentie">
          <SectionLabel>04</SectionLabel>
          <SectionTitle>Cât timp <em className="italic text-amber">păstrăm datele</em></SectionTitle>
          <BodyP>Datele cu caracter personal sunt păstrate pe durata strict necesară scopului pentru care au fost colectate, în conformitate cu principiul limitării legate de stocare (art. 5 alin. 1 lit. e) GDPR):</BodyP>
          <DataCard
            label="Perioade de retenție"
            rows={[
              <><strong className="text-cream font-medium">Date de client activ (contracte, facturi):</strong> 10 ani de la data ultimei operațiuni — conform Legii nr. 82/1991 a contabilității și Codului fiscal român</>,
              <><strong className="text-cream font-medium">Date din sesiunile de coaching (note, planuri):</strong> Maxim 3 ani de la încheierea colaborării, după care sunt șterse sau anonimizate ireversibil</>,
              <><strong className="text-cream font-medium">Date din formularul de contact (fără contract ulterior):</strong> 12 luni de la ultima interacțiune</>,
              <><strong className="text-cream font-medium">Date de newsletter (consimțământ marketing):</strong> Până la retragerea consimțământului sau 3 ani de inactivitate</>,
              <><strong className="text-cream font-medium">Date tehnice / logs:</strong> Maxim 12 luni, în formă anonimizată după 30 de zile</>,
            ]}
          />
          <BodyP>La expirarea perioadei de retenție, datele sunt șterse în mod securizat sau anonimizate ireversibil, astfel încât să nu mai poată fi asociate unei persoane identificabile.</BodyP>
        </section>

        {/* 5 — Destinatari */}
        <section id="destinatari">
          <SectionLabel>05</SectionLabel>
          <SectionTitle>Cui <em className="italic text-amber">transmitem datele</em></SectionTitle>
          <BodyP>Datele dumneavoastră personale <strong className="text-ink font-medium">nu se vând, nu se închiriază și nu se comercializează</strong> către terți. Accesul la date este limitat la persoanele și entitățile strict necesare pentru furnizarea serviciilor:</BodyP>
          <DataCard
            label="Categorii de destinatari"
            rows={[
              <><strong className="text-cream font-medium">Furnizori de platforme de sesiuni online</strong> (Google Meet / Google LLC) — exclusiv în scopul desfășurării sesiunilor contractate. Google LLC acționează ca persoană împuternicită și prelucrează datele conform propriei politici GDPR și a clauzelor contractuale standard aplicabile.</>,
              <><strong className="text-cream font-medium">Furnizori de servicii de email și newsletter</strong> (ex: Mailchimp / similar) — exclusiv pentru transmiterea comunicărilor consimțite.</>,
              <><strong className="text-cream font-medium">Furnizori de găzduire web și securitate</strong> — cu acces tehnic limitat, în baza acordurilor de prelucrare a datelor.</>,
              <><strong className="text-cream font-medium">Contabil / consultant fiscal</strong> — exclusiv pentru datele de facturare necesare îndeplinirii obligațiilor legale.</>,
              <><strong className="text-cream font-medium">Autorități publice</strong> — exclusiv atunci când suntem obligați prin lege (ex: ANAF, instanțe judecătorești), în limite strict necesare.</>,
            ]}
          />
        </section>

        {/* 6 — Transferuri */}
        <section id="transferuri">
          <SectionLabel>06</SectionLabel>
          <SectionTitle>Transferuri <em className="italic text-amber">internaționale</em></SectionTitle>
          <BodyP>Unele dintre platformele utilizate (ex: Google Meet, Mailchimp) pot implica transferul datelor în afara Spațiului Economic European (SEE), inclusiv în Statele Unite ale Americii.</BodyP>
          <BodyP>Aceste transferuri se realizează exclusiv în baza unor garanții adecvate, conform Capitolului V din GDPR, în special:</BodyP>
          <DataCard
            label="Mecanisme de transfer utilizate"
            rows={[
              <><strong className="text-cream font-medium">Clauze contractuale standard (SCC)</strong> adoptate de Comisia Europeană — obligatorii pentru furnizorii noștri din SUA</>,
              <><strong className="text-cream font-medium">Certificări și aderare la cadre de protecție</strong> recunoscute la nivel UE, acolo unde sunt disponibile</>,
              <>Datele transferate se limitează la minimul necesar funcționării serviciilor utilizate</>,
            ]}
          />
          <BodyP>Puteți solicita informații suplimentare despre garanțiile aplicate pentru fiecare furnizor, contactând operatorul la adresa de email indicată.</BodyP>
        </section>

        {/* 7 — Drepturi */}
        <section id="drepturi">
          <SectionLabel>07</SectionLabel>
          <SectionTitle>Drepturile tale <em className="italic text-amber">ca persoană vizată</em></SectionTitle>
          <BodyP>În conformitate cu Regulamentul (UE) 2016/679, beneficiezi de următoarele drepturi, pe care le poți exercita oricând, gratuit, prin trimiterea unui email la adresa operatorului:</BodyP>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {[
              { art: 'Art. 15 GDPR', title: 'Dreptul de acces', desc: 'Poți solicita o copie a datelor personale pe care le deținem despre tine și informații despre modul în care le prelucrăm.' },
              { art: 'Art. 16 GDPR', title: 'Dreptul la rectificare', desc: 'Poți solicita corectarea datelor inexacte sau completarea celor incomplete care te privesc.' },
              { art: 'Art. 17 GDPR', title: 'Dreptul la ștergere', desc: 'Poți solicita ștergerea datelor tale în condițiile prevăzute de lege (ex: retragerea consimțământului, datele nu mai sunt necesare).' },
              { art: 'Art. 18 GDPR', title: 'Dreptul la restricționare', desc: 'Poți solicita restricționarea prelucrării datelor tale în anumite situații prevăzute de GDPR.' },
              { art: 'Art. 20 GDPR', title: 'Dreptul la portabilitate', desc: 'Poți primi datele furnizate pe baza contractului sau consimțământului, într-un format structurat și lizibil automat.' },
              { art: 'Art. 21 GDPR', title: 'Dreptul la opoziție', desc: 'Poți te opune prelucrărilor întemeiate pe interesul legitim al operatorului sau marketingului direct, în orice moment.' },
              { art: 'Art. 22 GDPR', title: 'Dreptul privind decizia automată', desc: 'Nu utilizăm profilare automată sau decizii cu efecte juridice bazate exclusiv pe prelucrare automată.' },
              { art: 'Art. 7 alin. 3 GDPR', title: 'Retragerea consimțământului', desc: 'Acolo unde prelucrarea se bazează pe consimțământul tău, îl poți retrage oricând, fără consecințe pentru drepturile tale.' },
            ].map((r) => (
              <div
                key={r.art}
                className="bg-white border border-amber/25 rounded-xl p-6 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(46,61,48,0.1)] hover:-translate-y-0.5"
              >
                <p className="font-sans text-[10px] tracking-[2px] uppercase text-amber mb-2">{r.art}</p>
                <p className="font-cormorant text-[18px] font-medium text-green-d mb-2">{r.title}</p>
                <p className="font-sans text-[13px] text-grey leading-[1.6]">{r.desc}</p>
              </div>
            ))}
          </div>
          <NoteBox>
            <strong className="text-amber">Termen de răspuns:</strong> Operatorul va răspunde solicitărilor tale în termen de maxim <strong className="text-ink font-medium">30 de zile calendaristice</strong> de la primire, conform art. 12 GDPR. În cazuri complexe, termenul poate fi prelungit cu încă 60 de zile, cu notificarea prealabilă a persoanei vizate.
          </NoteBox>
          <BodyP>Dacă consideri că drepturile tale au fost încălcate, ai dreptul de a depune o plângere la:</BodyP>
          <DataCard
            label="Autoritate de supraveghere competentă"
            rows={[
              <><strong className="text-cream font-medium">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong> — www.dataprotection.ro — Bd. G-ral. Gheorghe Magheru 28-30, Sector 1, București — Tel: +40.318.059.211</>,
            ]}
          />
        </section>

        {/* 8 — Cookies */}
        <section id="cookies">
          <SectionLabel>08</SectionLabel>
          <SectionTitle>Cookie-uri și <em className="italic text-amber">tehnologii similare</em></SectionTitle>
          <BodyP>Website-ul SC Eurohale Proiect SRL utilizează cookie-uri și tehnologii similare de urmărire, în conformitate cu Directiva 2002/58/CE (ePrivacy) transpusă prin Legea nr. 506/2004 privind prelucrarea datelor personale în comunicații, cu modificările ulterioare.</BodyP>
          <DataCard
            label="Categorii de cookie-uri utilizate"
            rows={[
              <><strong className="text-cream font-medium">Cookie-uri esențiale (strict necesare):</strong> Necesare funcționării website-ului; nu pot fi dezactivate. Nu necesită consimțământ.</>,
              <><strong className="text-cream font-medium">Cookie-uri analitice:</strong> Colectează date anonimizate despre comportamentul vizitatorilor (ex: Google Analytics cu IP anonim). Necesită consimțământ.</>,
              <><strong className="text-cream font-medium">Cookie-uri de marketing / redirecționare:</strong> Utilizate doar dacă sunt activate în mod explicit de vizitator prin bannerul de consimțământ.</>,
            ]}
          />
          <BodyP>La prima vizitare a website-ului, vei fi informat despre cookie-uri printr-un banner de consimțământ, conform cerințelor legale. Poți modifica preferințele oricând din setările browser-ului sau prin mecanismul de gestionare a consimțământului disponibil pe site.</BodyP>
        </section>

        {/* 9 — Minori */}
        <section id="minori">
          <SectionLabel>09</SectionLabel>
          <SectionTitle>Date privind <em className="italic text-amber">minorii</em></SectionTitle>
          <BodyP>Serviciile SC Eurohale Proiect SRL sunt adresate exclusiv persoanelor cu vârsta de <strong className="text-ink font-medium">cel puțin 18 ani</strong>. Nu colectăm și nu prelucrăm cu bună știință date personale ale minorilor.</BodyP>
          <BodyP>Dacă un minor ne furnizează date personale fără știrea unui tutore legal, vă rugăm să ne contactați imediat. Vom șterge aceste date fără întârziere nejustificată, conform art. 8 GDPR și art. 12 din Legea nr. 190/2018.</BodyP>
        </section>

        {/* 10 — Modificări */}
        <section id="modificari">
          <SectionLabel>10</SectionLabel>
          <SectionTitle>Modificări ale <em className="italic text-amber">prezentei politici</em></SectionTitle>
          <BodyP>Operatorul își rezervă dreptul de a actualiza periodic prezenta politică de confidențialitate pentru a reflecta modificările legislative, schimbările tehnologice sau evoluțiile serviciilor oferite.</BodyP>
          <BodyP>Versiunea actualizată va fi publicată pe această pagină, cu indicarea datei ultimei actualizări. În cazul unor modificări esențiale care afectează drepturile persoanelor vizate, vom transmite o notificare prin email (pentru utilizatorii cu cont sau abonament la newsletter), cu cel puțin <strong className="text-ink font-medium">30 de zile</strong> înainte de intrarea în vigoare a noilor prevederi.</BodyP>
          <BodyP>Utilizarea continuă a website-ului sau a serviciilor noastre după publicarea actualizărilor constituie acceptarea versiunii revizuite, în măsura permisă de lege.</BodyP>
        </section>

      </div>

      {/* ── Contact banner ── */}
      <div className="max-w-[820px] mx-auto px-7 pb-16">
        <div className="bg-green-d rounded-2xl px-12 py-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(196,135,58,0.14) 0%, transparent 60%)' }}
          />
          <h2 className="relative font-cormorant font-light text-[32px] text-cream mb-4 leading-snug">
            Ai întrebări despre <em className="italic text-brass-l">datele tale</em>?
          </h2>
          <p className="relative font-sans text-[14px] text-cream/65 mb-2">
            Suntem la dispoziția ta pentru orice solicitare legată de drepturile tale GDPR.
          </p>
          <p className="relative font-sans text-[14px] text-cream/65 mt-4">
            📧{' '}
            <a
              href="mailto:smaranda.andriciuc@gmail.com"
              className="text-brass-l border-b border-amber/30 hover:border-brass-l transition-colors"
            >
              smaranda.andriciuc@gmail.com
            </a>
          </p>
          <p className="relative font-sans text-[14px] text-cream/65 mt-1">
            Termen de răspuns: maxim <strong className="text-brass-l font-medium">30 de zile calendaristice</strong>
          </p>
        </div>
      </div>

      {/* ── Back button (bottom) ── */}
      <div className="max-w-[820px] mx-auto px-7 pb-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors"
        >
          ← Înapoi la pagina anterioară
        </button>
      </div>

    </div>
  )
}
