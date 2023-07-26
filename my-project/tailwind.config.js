/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      borderWidth: {
        DEFAULT: '2px',
        1: '1px'
      },
      margin: {
        90: '48rem',
      }
    },
  },
  plugins: [],
}

