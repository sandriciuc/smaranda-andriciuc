import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#F5F2EE',
        'cream-d': '#E8E3DB',
        'cream-l': '#FAF9F6',
        green:    '#3D5A4C',
        'green-d': '#2D4238',
        'green-l': '#EBF0EE',
        amber:    '#C4873A',
        brass:    '#B89A6E',
        'brass-l': '#D4B896',
        ink:      '#1C1C1E',
        grey:     '#555555',
        lgrey:    '#888888',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(36px, 6vw, 72px)',
        'hero-en': 'clamp(32px, 5vw, 60px)',
      },
      lineHeight: {
        'body': '1.7',
      },
      letterSpacing: {
        'label': '0.14em',
        'wide-label': '0.2em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
