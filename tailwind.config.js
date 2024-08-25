const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'search-gradient':
          'linear-gradient(90deg, rgba(243,214,123,1) 0%, rgba(218,91,80,1) 20%, rgba(179,73,224,1) 40%, rgba(41,48,230,1) 60%, rgba(39,37,80,1) 80%, rgba(39,37,80,1) 100%);',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
