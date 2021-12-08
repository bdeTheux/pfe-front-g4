const { urlObjectKeys } = require('next/dist/shared/lib/utils');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundImage:{
        'welcome' : "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
      },
    },
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
