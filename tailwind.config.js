const { width } = require('@fortawesome/free-brands-svg-icons/fa42Group')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        mymove: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
      },
      animation: {
        mymove: 'mymove 0.4s ease-in forwards',
      },

      screens:{
        'mobile':{"max":"430px"}
      }
    },
  },
  plugins: [],
}

