/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'main-blue-color': 'rgba(28,77,122,0.9)',
        'custom-gold-color': 'rgba(248, 197,0,1)',
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.custom-gold-color') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    }
   },
   
  plugins: [],
}
