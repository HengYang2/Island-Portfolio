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
      },
      keyframes: {
        upDown: {
          '0%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-2.5px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(2.5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        leftRight: {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(-0.5px)' },
          '50%': { transform: 'translateX(0px)' },
          '75%': { transform: 'translateX(0.5px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        hoverPulse: {
          '0%': { transform: 'scale(0.99)' },
          '50%': { transform: 'scale(1.01)' },
          '100%': { transform: 'scale(0.99)' },
        },

      },
      animation: {
        'upDown': 'upDown 3s linear infinite',
        'leftRight': 'leftRight 3s linear infinite',
        'hoverPulse': 'hoverPulse 2s linear infinite',
      }
    },
  },

  plugins: [],
}

