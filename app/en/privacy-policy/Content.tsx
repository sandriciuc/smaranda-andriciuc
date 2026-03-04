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
            Andriciuc, Smaranda-Maria · Business &amp; Financial Strategy
          </p>
          <h1 className="font-cormorant font-light text-[clamp(38px,6vw,62px)] text-cream leading-[1.1] tracking-[-0.5px]">
            Privacy{' '}
            <em className="italic text-brass-l">Policy</em>
          </h1>
          <p className="mt-5 font-sans text-[13px] text-cream/55 font-light tracking-[0.5px]">
            Compliant with EU Regulation 2016/679 (GDPR) and Belgian Law of 30 July 2018
          </p>
          <div className="w-[60px] h-px bg-amber opacity-60 mx-auto mt-[30px]" />
          <div className="inline-flex items-center gap-2 bg-amber/12 border border-amber/30 rounded-full px-4 py-1.5 font-sans text-[12px] text-amber mt-7">
            <span className="w-1.5 h-1.5 bg-amber rounded-full" />
            Last updated: March 2026
          </div>
        </div>
      </div>

      {/* ── Back button ── */}
      <div className="max-w-[820px] mx-auto px-7 pt-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors"
        >
          ← Back to previous page
        </button>
      </div>

      {/* ── Table of contents ── */}
      <div className="max-w-[820px] mx-auto px-7 my-14">
        <div className="bg-white border border-amber/25 rounded-2xl px-10 py-9 shadow-[0_4px_32px_rgba(46,61,48,0.06)]">
          <h3 className="font-cormorant text-[20px] font-medium text-green-d mb-5 pb-3.5 border-b border-amber/25">
            Table of Contents
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-8">
            {[
              ['#controller', '1. Who is the data controller'],
              ['#data-collected', '2. What data we collect'],
              ['#purposes', '3. Purposes and legal basis'],
              ['#retention', '4. How long we retain data'],
              ['#recipients', '5. Who we share data with'],
              ['#transfers', '6. International transfers'],
              ['#rights', '7. Your rights'],
              ['#cookies', '8. Cookies'],
              ['#minors', '9. Data concerning minors'],
              ['#changes', '10. Changes to this policy'],
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

        {/* 1 — Controller */}
        <section id="controller">
          <SectionLabel>01</SectionLabel>
          <SectionTitle>Who is the <em className="italic text-amber">data controller</em></SectionTitle>
          <DataCard
            label="Controller identification details"
            rows={[
              <><strong className="text-cream font-medium">Name:</strong> Andriciuc, Smaranda-Maria</>,
              <><strong className="text-cream font-medium">Address:</strong> Kievitlaan 5, Bornem 2880, Belgium</>,
              <><strong className="text-cream font-medium">Website:</strong> smaranda-andriciuc.com</>,
              <><strong className="text-cream font-medium">Contact email:</strong> smaranda.andriciuc@gmail.com</>,
            ]}
          />
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 rounded-full px-4 py-1.5 font-sans text-[12px] text-amber mb-5">
            🇧🇪 Belgian operator — services delivered online across the EU
          </div>
          <BodyP>
            Andriciuc, Smaranda-Maria is a Belgian sole trader providing financial coaching and business consulting services, delivered exclusively online. The controller processes personal data as an <strong className="text-ink font-medium">independent data controller</strong>, in compliance with EU Regulation 2016/679 (GDPR), the Belgian Law of 30 July 2018 on the protection of natural persons with regard to the processing of personal data, the Belgian Code of Economic Law (WER/CEL), and any other applicable regulation in force.
          </BodyP>
          <NoteBox>
            <strong className="text-amber">Competent supervisory authority:</strong> The controller is a Belgian natural person established in Belgium. The competent authority is the <strong className="text-ink font-medium">Autorité de protection des données / Gegevensbeschermingsautoriteit (APD/GBA)</strong> — www.dataprotectionauthority.be — Rue de la Presse 35, 1000 Brussels — Tel: +32 2 274 48 00.
          </NoteBox>
        </section>

        {/* 2 — Data collected */}
        <section id="data-collected">
          <SectionLabel>02</SectionLabel>
          <SectionTitle>What data <em className="italic text-amber">we collect</em></SectionTitle>
          <BodyP>Depending on how you interact with our platform, we may collect the following categories of personal data:</BodyP>
          <DataCard
            label="Categories of data processed"
            rows={[
              <><strong className="text-cream font-medium">Identification data:</strong> First name, last name, email address, phone number (if voluntarily provided)</>,
              <><strong className="text-cream font-medium">Professional data:</strong> Occupation, business stage, industry — provided in the context of coaching sessions or contact forms</>,
              <><strong className="text-cream font-medium">General financial data:</strong> Information about revenues, expenses, financial goals — exclusively in the consulting context, voluntarily provided by the client</>,
              <><strong className="text-cream font-medium">Technical data:</strong> IP address, browser type, pages visited, session duration — collected automatically via cookies and analytics tools</>,
              <><strong className="text-cream font-medium">Communication data:</strong> Messages sent via the contact form, email or online session platforms (e.g. Google Meet)</>,
            ]}
          />
          <BodyP>
            <strong className="text-ink font-medium">We do not collect special categories of data</strong> (health data, religious beliefs, ethnic origin, etc.) and we do not request such information. If a data subject voluntarily provides such data during sessions, the processing is based exclusively on their explicit consent, in accordance with Art. 9(2)(a) GDPR.
          </BodyP>
        </section>

        {/* 3 — Purposes */}
        <section id="purposes">
          <SectionLabel>03</SectionLabel>
          <SectionTitle>Purposes and <em className="italic text-amber">legal basis</em></SectionTitle>
          <BodyP>Each processing of personal data has a specific purpose and an explicit legal basis, in accordance with Art. 6 GDPR. The complete table is presented below:</BodyP>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse font-sans text-[14px]">
              <thead>
                <tr>
                  {['Purpose', 'Data involved', 'Legal basis (Art. 6 GDPR)'].map((h) => (
                    <th key={h} className="bg-green-d text-brass-l font-normal text-[10px] tracking-[2px] uppercase text-left px-[18px] py-3.5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Providing coaching and consulting services', 'Identification, professional, general financial', 'Performance of contract — Art. 6(1)(b)'],
                  ['Responding to contact requests and enquiries', 'Identification, communication', 'Consent — Art. 6(1)(a) or legitimate interest — Art. 6(1)(f)'],
                  ['Managing appointments and online sessions', 'Identification, technical data (video platforms)', 'Performance of contract — Art. 6(1)(b)'],
                  ['Sending newsletters or marketing communications', 'Email address, preferences', 'Explicit and revocable consent — Art. 6(1)(a)'],
                  ['Fulfilling legal obligations (invoicing, accounting)', 'Identification, billing data', 'Legal obligation — Art. 6(1)(c)'],
                  ['Statistical analysis and website improvement', 'Technical data (anonymous IP, site behaviour)', 'Legitimate interest — Art. 6(1)(f)'],
                ].map(([purpose, data, basis], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-green-d/[0.04]' : ''}>
                    <td className="px-[18px] py-3.5 border-b border-amber/25 text-ink font-medium leading-[1.6] align-top">{purpose}</td>
                    <td className="px-[18px] py-3.5 border-b border-amber/25 text-grey leading-[1.6] align-top">{data}</td>
                    <td className="px-[18px] py-3.5 border-b border-amber/25 text-grey leading-[1.6] align-top">{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <NoteBox>
            <strong className="text-amber">Regarding consent:</strong> Where processing is based on consent, you have the right to withdraw it at any time, without affecting the lawfulness of processing carried out prior to withdrawal. Withdrawal can be made by a simple email to the contact address indicated above.
          </NoteBox>
        </section>

        {/* 4 — Retention */}
        <section id="retention">
          <SectionLabel>04</SectionLabel>
          <SectionTitle>How long we <em className="italic text-amber">retain data</em></SectionTitle>
          <BodyP>Personal data is retained for the period strictly necessary for the purpose for which it was collected, in accordance with the storage limitation principle (Art. 5(1)(e) GDPR):</BodyP>
          <DataCard
            label="Retention periods"
            rows={[
              <><strong className="text-cream font-medium">Active client data (contracts, invoices):</strong> 7 years from the date of the last transaction — in accordance with Belgian accounting law (Law of 17 July 1975 on business accounting) and Belgian tax law</>,
              <><strong className="text-cream font-medium">Coaching session data (notes, plans):</strong> Maximum 3 years from the end of the engagement, after which they are permanently deleted or irreversibly anonymised</>,
              <><strong className="text-cream font-medium">Contact form data (no subsequent contract):</strong> 12 months from the last interaction</>,
              <><strong className="text-cream font-medium">Newsletter data (marketing consent):</strong> Until consent is withdrawn or 3 years of inactivity</>,
              <><strong className="text-cream font-medium">Technical data / logs:</strong> Maximum 12 months, anonymised after 30 days</>,
            ]}
          />
          <NoteBox>
            <strong className="text-amber">Belgian vs Romanian retention:</strong> The retention period for accounting documents in Belgium is <strong className="text-ink font-medium">7 years</strong> (as required by Belgian law), not 10 years as under Romanian law.
          </NoteBox>
          <BodyP>Upon expiry of the retention period, data is securely deleted or irreversibly anonymised so that it can no longer be associated with an identifiable person.</BodyP>
        </section>

        {/* 5 — Recipients */}
        <section id="recipients">
          <SectionLabel>05</SectionLabel>
          <SectionTitle>Who we <em className="italic text-amber">share data with</em></SectionTitle>
          <BodyP>Your personal data is <strong className="text-ink font-medium">not sold, rented or traded</strong> to third parties. Access to data is limited to the persons and entities strictly necessary for the provision of services:</BodyP>
          <DataCard
            label="Categories of recipients"
            rows={[
              <><strong className="text-cream font-medium">Online session platform providers</strong> (Google Meet / Google LLC) — exclusively for the purpose of conducting contracted sessions. Google LLC acts as a data processor and processes data in accordance with its own GDPR policy and applicable standard contractual clauses.</>,
              <><strong className="text-cream font-medium">Email and newsletter service providers</strong> (e.g. Mailchimp / similar) — exclusively for sending consented communications.</>,
              <><strong className="text-cream font-medium">Web hosting and security providers</strong> — with limited technical access, under data processing agreements.</>,
              <><strong className="text-cream font-medium">Accountant / tax advisor</strong> — exclusively for billing data required to fulfil legal obligations.</>,
              <><strong className="text-cream font-medium">Public authorities</strong> — exclusively when required by law (e.g. Belgian tax authority, courts), within strictly necessary limits.</>,
            ]}
          />
        </section>

        {/* 6 — Transfers */}
        <section id="transfers">
          <SectionLabel>06</SectionLabel>
          <SectionTitle>International <em className="italic text-amber">data transfers</em></SectionTitle>
          <BodyP>Some of the platforms used (e.g. Google Meet, Mailchimp) may involve the transfer of data outside the European Economic Area (EEA), including to the United States of America.</BodyP>
          <BodyP>These transfers are carried out exclusively on the basis of appropriate safeguards, in accordance with Chapter V of GDPR, in particular:</BodyP>
          <DataCard
            label="Transfer mechanisms used"
            rows={[
              <><strong className="text-cream font-medium">Standard Contractual Clauses (SCC)</strong> adopted by the European Commission — mandatory for our US-based providers</>,
              <><strong className="text-cream font-medium">EU–US Data Privacy Framework (DPF)</strong> — where providers are certified under this adequacy decision (Commission Implementing Decision of 10 July 2023)</>,
              <>Data transferred is limited to the minimum necessary for the operation of the services used</>,
            ]}
          />
          <BodyP>You may request additional information about the safeguards applied for each provider by contacting the controller at the email address indicated above.</BodyP>
        </section>

        {/* 7 — Rights */}
        <section id="rights">
          <SectionLabel>07</SectionLabel>
          <SectionTitle>Your rights <em className="italic text-amber">as a data subject</em></SectionTitle>
          <BodyP>In accordance with EU Regulation 2016/679, you benefit from the following rights, which you may exercise at any time, free of charge, by sending an email to the controller's address:</BodyP>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {[
              { art: 'Art. 15 GDPR', title: 'Right of access', desc: 'You may request a copy of the personal data we hold about you and information about how we process it.' },
              { art: 'Art. 16 GDPR', title: 'Right to rectification', desc: 'You may request the correction of inaccurate data or the completion of incomplete data concerning you.' },
              { art: 'Art. 17 GDPR', title: 'Right to erasure', desc: 'You may request the deletion of your data under the conditions provided by law (e.g. withdrawal of consent, data no longer necessary).' },
              { art: 'Art. 18 GDPR', title: 'Right to restriction', desc: 'You may request the restriction of processing of your data in certain situations provided for by GDPR.' },
              { art: 'Art. 20 GDPR', title: 'Right to portability', desc: 'You may receive data provided on the basis of contract or consent, in a structured and machine-readable format.' },
              { art: 'Art. 21 GDPR', title: 'Right to object', desc: 'You may object to processing based on the controller\'s legitimate interest or to direct marketing, at any time.' },
              { art: 'Art. 22 GDPR', title: 'Automated decision-making', desc: 'We do not use automated profiling or decisions with legal effects based solely on automated processing.' },
              { art: 'Art. 7(3) GDPR', title: 'Withdrawal of consent', desc: 'Where processing is based on your consent, you may withdraw it at any time, without consequences for your rights.' },
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
            <strong className="text-amber">Response time:</strong> The controller will respond to your requests within a maximum of <strong className="text-ink font-medium">30 calendar days</strong> of receipt, in accordance with Art. 12 GDPR. In complex cases, the deadline may be extended by a further 60 days, with prior notification to the data subject.
          </NoteBox>
          <BodyP>If you believe your rights have been violated, you have the right to lodge a complaint with:</BodyP>
          <DataCard
            label="Competent supervisory authority"
            rows={[
              <><strong className="text-cream font-medium">Autorité de protection des données / Gegevensbeschermingsautoriteit (APD/GBA)</strong> — www.dataprotectionauthority.be — Rue de la Presse 35, 1000 Brussels — Tel: +32 2 274 48 00</>,
            ]}
          />
        </section>

        {/* 8 — Cookies */}
        <section id="cookies">
          <SectionLabel>08</SectionLabel>
          <SectionTitle>Cookies and <em className="italic text-amber">similar technologies</em></SectionTitle>
          <BodyP>This website uses cookies and similar tracking technologies, in accordance with Directive 2002/58/EC (ePrivacy), as implemented in Belgium by the Act of 13 June 2005 on electronic communications, and in line with APD/GBA Recommendation 01/2020 on cookie consent.</BodyP>
          <DataCard
            label="Categories of cookies used"
            rows={[
              <><strong className="text-cream font-medium">Essential cookies (strictly necessary):</strong> Required for the website to function; cannot be disabled. Do not require consent.</>,
              <><strong className="text-cream font-medium">Analytics cookies:</strong> Collect anonymised data about visitor behaviour (e.g. Google Analytics with anonymous IP). Require consent.</>,
              <><strong className="text-cream font-medium">Marketing / retargeting cookies:</strong> Used only if explicitly enabled by the visitor through the consent banner.</>,
            ]}
          />
          <BodyP>On your first visit to the website, you will be informed about cookies via a consent banner, in accordance with legal requirements. You may modify your preferences at any time from your browser settings or through the consent management mechanism available on the site.</BodyP>
        </section>

        {/* 9 — Minors */}
        <section id="minors">
          <SectionLabel>09</SectionLabel>
          <SectionTitle>Data concerning <em className="italic text-amber">minors</em></SectionTitle>
          <BodyP>The services of Andriciuc, Smaranda-Maria are addressed exclusively to persons aged <strong className="text-ink font-medium">at least 18 years</strong>. We do not knowingly collect or process personal data of minors.</BodyP>
          <BodyP>If a minor provides us with personal data without the knowledge of a legal guardian, please contact us immediately. We will delete such data without undue delay, in accordance with Art. 8 GDPR and applicable Belgian law.</BodyP>
        </section>

        {/* 10 — Changes */}
        <section id="changes">
          <SectionLabel>10</SectionLabel>
          <SectionTitle>Changes to <em className="italic text-amber">this policy</em></SectionTitle>
          <BodyP>The controller reserves the right to periodically update this privacy policy to reflect legislative changes, technological developments or evolutions in the services offered.</BodyP>
          <BodyP>The updated version will be published on this page, with the date of the last update indicated. In the case of material changes affecting the rights of data subjects, we will send a notification by email (for users with a newsletter subscription), at least <strong className="text-ink font-medium">30 days</strong> before the new provisions come into force.</BodyP>
          <BodyP>Continued use of the website or our services after the publication of updates constitutes acceptance of the revised version, to the extent permitted by law.</BodyP>
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
            Questions about <em className="italic text-brass-l">your data</em>?
          </h2>
          <p className="relative font-sans text-[14px] text-cream/65 mb-2">
            We are available for any request related to your GDPR rights.
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
            Response time: maximum <strong className="text-brass-l font-medium">30 calendar days</strong>
          </p>
          <p className="relative font-sans text-[12px] text-cream/40 mt-6">
            Andriciuc, Smaranda-Maria · Kievitlaan 5, Bornem 2880, Belgium · Compliant with GDPR (EU) 2016/679 &amp; Belgian Law of 30 July 2018
          </p>
        </div>
      </div>

      {/* ── Back button (bottom) ── */}
      <div className="max-w-[820px] mx-auto px-7 pb-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.12em] uppercase text-grey hover:text-green transition-colors"
        >
          ← Back to previous page
        </button>
      </div>

    </div>
  )
}
