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
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', "serif"],
        display: ['var(--font-clashDisplay)', "serif"],
      },
      gridTemplateColumns: {
        container: 'minmax(0, 1fr) minmax(72rem, 1fr) minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}
