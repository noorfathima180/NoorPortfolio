/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noor: {
          bg: '#E3E2DE',
          fg: '#1B0E0D',
          accent: '#C72A09',
          neon: '#31EF07',
          ghost: '#D9D9D9',
          muted: '#61220F',
          dark: '#1B0E0D',
        },
      },
      fontFamily: {
        display: ['Clash Grotesk', 'Arial Black', 'sans-serif'],
        body: ['General Sans', 'DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.15em',
      },
      lineHeight: {
        hero: '0.80',
        tight2: '0.85',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      transitionTimingFunction: {
        'noor': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};