module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['prettier', 'import-helpers'],
  rules: {
    'prettier/prettier': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
          newlinesBetween: 'always', // new line between groups
          groups: [
              '/^koa/',
              'module',
              '/^@/',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
      },
  ],
  }
}
