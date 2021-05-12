module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx,hbs}',
      './public/index.html'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
    },
  },
  plugins: [],
}
