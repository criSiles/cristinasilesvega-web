/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/eshop/*.{vue,js,ts,jsx,tsx}',
    './src/views/eshop/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: { '[auto,auto,1fr]': 'auto auto 1fr' },
      colors: {},
      screens: {}
    }
  },
  variants: {
    extend: { translate: ['group-hover'], borderWidth: ['hover'] }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}

//('@tailwindcss/gradient'),