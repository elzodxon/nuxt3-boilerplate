module.exports = {
  purge: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: '#FF0000',
      },
    },
  },
  plugins: [],
}
