// .eslintrc.js is a configuration file for ESLint. 
// ESLint is a tool to detect errors and potential problems in JavaScript code.
// It can be used to set additional rules, plugins, and parser options.
// It is a JavaScript file that exports an object with configuration options.

require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts', '.d.ts']
      },
      alias: {
        extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
        map: [
          ['@/components', './src/components'],
          ['@/pages', './src/pages'],
          ['@/router', './src/router'],
          ['@/store', './src/store'],
          ['@/styles', './src/styles'],
          ['@/types', './src/types'],
          ['@/utils', './src/utils']
        ]
      }
    }
  }
}
