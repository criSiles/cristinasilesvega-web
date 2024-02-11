/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true,
    jest: true
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
