module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  "tailwindCSS.includeLanguages": {

    "plaintext": "html"

  },
  "editor.quickSuggestions": {

    "strings": true

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
