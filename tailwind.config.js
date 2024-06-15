/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c9a1ef',
        secondary: '#E989F1',
        highlight: '#fde962',
        foreground: '#E9DFF6',
      },
      backgroundImage: {
        'gradient-linear':
          'linear-gradient(180deg, rgba(173,141,243,1) 0%, rgba(237,139,240,1) 50%);',
      },
    },
  },
  plugins: [],
}
