/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'scale(0.5)', opacity: 0.7 },
          '100%': { transform: 'scale(3)', opacity: 0 },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
    },
  },
  plugins: [],
};
