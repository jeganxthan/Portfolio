/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0px, 0px)' },
          '25%': { transform: 'translate(2px, -2px)' },
          '50%': { transform: 'translate(0px, -2px)' },
          '75%': { transform: 'translate(-2px, -2px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
      },
      animation: {
        floating: 'floating 2s infinite linear',
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-[1000px]': {
          perspective: '1000px',
        },
      });
    },
  ],
  corePlugins: {
    scrollBehavior: true,
  },
}