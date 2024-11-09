/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A4FF',
        black: 'rgba(0, 0, 0, 0.89)',
      },
      fontFamily: {
        sans: 'Archivo',
      },
    },
  },
  plugins: [],
}