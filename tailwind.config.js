/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Be Vietnam Pro', 'sans-serif'], display: ['Lora', 'serif'] },
      colors: { ink: '#282523', cream: '#f8f3eb', terracotta: '#aa6049', sage: '#768071' },
    },
  },
  plugins: [],
}
