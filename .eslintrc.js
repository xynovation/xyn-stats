module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:jest/recommended', 'plugin:jest/style'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 120,
        singleQuote: true,
      },
    ],
  },
};
