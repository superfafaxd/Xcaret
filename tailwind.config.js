/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'storm-gray': {
          DEFAULT: '#6B6F80',
          '50': '#6B6D80',
          '100': '#6B6E80',
          '200': '#6B6F80',
          '300': '#3D4048',
          '400': '#0E0F11',
          '500': '#000000',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [
    "./node_modules/flowbite/**/*.js",
    'tw-elements/dist/plugin'
  ],
}
