module.exports = {
  purge: [],
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('/src/img/bg.jpeg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
