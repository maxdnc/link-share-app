/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#737373',
        'dark-grey': '#333',
        'white-pri': '#FFF',
        'white-sec': '#FAFAFA',
        'border-pri': '#D9D9D9',
        'purple-pri': '#633CFF',
        'purple-sec': '#BEADFF',
        'purple-ter': '#EFEBFF',
        'purple-shadow': '#633cff40',
        'red-pri': '#FF3939',
      },
      fontFamily: {
        instrument: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
