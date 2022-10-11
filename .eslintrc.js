module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      alias: [['~', './']],
    },
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  globals: { _: true },
  // add your custom rules here
  // 0 -> disabled
  // 1 -> warn
  // 2 -> error
  rules: {
    'space-before-function-paren': 0,
    'vue/no-v-html': 0,
    'no-console': 0,
    'vue/require-prop-types': 2,
    'vue/require-prop-type-constructor': 2,
    'vue/require-default-prop': 2,
    'vue/prop-name-casing': 2,
    'vue/order-in-components': 2,
  },
}
