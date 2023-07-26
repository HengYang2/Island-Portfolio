/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      borderWidth: {
        DEFAULT: '1px',
        0.5: '0.5px',
        2: '2px',
      },
      margin: {
        90: '48rem',
      }
    },
  },
  plugins: [],
}

