# Smaranda Andriciuc — Website

Website profesional Next.js 14 + Tailwind CSS + Framer Motion pentru Smaranda Andriciuc.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animații**: Framer Motion
- **Fonturi**: Cormorant Garamond + DM Sans + IBM Plex Mono (Google Fonts)
- **Deploy**: Vercel

---

## Structura site

| Rută | Conținut |
|------|----------|
| `/` | Redirect → `/ro` |
| `/ro` | Piața română — FAB Essence (coaching financiar) |
| `/en` | Piața belgiană/europeană — B2B consultanță operațională |

---

## Lucruri de completat înainte de lansare

Caută în cod comentariile marcate cu `DE COMPLETAT` și înlocuiește:

1. **Email** — caută `EMAIL_DE_COMPLETAT` în toate fișierele
2. **LinkedIn** — caută `PROFIL_DE_COMPLETAT`
3. **WhatsApp** — în `components/shared/WhatsAppButton.tsx`, înlocuiește `NUMAR_DE_COMPLETAT` cu numărul tău internațional (ex: `32XXXXXXXXX` pentru Belgia)
4. **Prețuri programe** — caută `PREȚ DE COMPLETAT` în `components/ro/Servicii.tsx`
5. **Foto** — înlocuiește placeholder-urile `[Foto Smaranda]` cu imaginea reală
6. **Domeniu** — în `app/ro/page.tsx` și `app/en/page.tsx`, înlocuiește `smarandaandriciuc.com` cu domeniul real
7. **Formular contact** — integrează un serviciu real (recomandat: [Resend](https://resend.com) sau [Formspree](https://formspree.io))

---

## Instalare locală

```bash
# 1. Intră în folder
cd smaranda-website

# 2. Instalează dependențele
npm install

# 3. Pornește dev server
npm run dev

# 4. Deschide în browser
# http://localhost:3000
```

---

## Deploy pe Vercel

### Varianta 1 — Interfață web (recomandat pentru început)

1. Creează un cont pe [vercel.com](https://vercel.com)
2. Pe dashboard, click **"Add New → Project"**
3. Importă repo-ul GitHub care conține acest cod
4. Vercel detectează automat Next.js — apasă **Deploy**
5. Gata! Primești un URL de tipul `https://smaranda-website.vercel.app`

### Varianta 2 — CLI Vercel

```bash
# Instalează Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy în producție
vercel --prod
```

### Variante de mediu (opțional)

Dacă adaugi un serviciu de email (Resend, etc.), creează un fișier `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_EMAIL=email@tudomeniu.com
```

Pe Vercel, adaugă aceste variabile în **Settings → Environment Variables**.

---

## Domeniu custom

1. Cumpără domeniu (ex: Namecheap, GoDaddy, One.com)
2. În Vercel → Settings → Domains → adaugă domeniul
3. Urmează instrucțiunile pentru DNS (CNAME sau A record)

---

## Structura fișierelor

```
/app
  /page.tsx          → redirect /ro
  /ro/page.tsx       → pagina română
  /en/page.tsx       → pagina engleză
  /layout.tsx        → fonturi Google, metadata globală
  /globals.css       → variabile CSS, stiluri de bază

/components
  /ro/               → componente pagina RO
  /en/               → componente pagina EN
  /shared/           → Navbar, Footer, WhatsApp, AnimatedSection

/lib
  /animations.ts     → variante Framer Motion refolosibile
```

---

© 2025 Smaranda Andriciuc
