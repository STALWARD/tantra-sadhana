module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['var(--font-dancing)', 'cursive'],
        pacifico: ['var(--font-pacifico)', 'cursive'],
        raleway: ['var(--font-raleway)',],
        greyQo: ['var(--font-greyQo)',],
        inter: ['var(--font-inter)',],
        },
      screens: {},
      
    },
  },
  plugins: [],
};
