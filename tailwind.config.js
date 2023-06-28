/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-noto-serif)', "serif"],
        display: ['var(--font-thunder)', "serif"],
      },
      gridTemplateColumns: {
        container: 'minmax(0, 1fr) minmax(72rem, 1fr) minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}
