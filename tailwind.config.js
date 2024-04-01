/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        confirm: colors.green,
        error: colors.red,
        warning: colors.yellow,
        violet: colors.violet,
      }
    },
  },
  plugins: [],
}

