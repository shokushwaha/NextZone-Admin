/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#E94560',
        textSecondary: '#533483',
        textTertiary: '#E7F6F2',
        highlight: '#eae8fb',
        bgGray: '#fbfafd',
        bgPrimary: '##E7F6F2',
        bgSecondary: '#041C32',
        textLogo: '#FB2576'
      }
    },
  },
  plugins: [],
}