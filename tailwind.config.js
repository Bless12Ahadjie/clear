/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'accord':'var(--Gray-50, #F9FAFB)',
        'baccord':'var(--Gray-200, #EAECF0)',
        'accord-head':'var(--Gray-900, #101828)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}