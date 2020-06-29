module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': [2, 'unix'],
    'max-len': [1, {code: 120}],
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'react/jsx-one-expression-per-line': [1, { 'allow': 'single-child' }],
    'react/no-unescaped-entities': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ["src"]
      }
    }
  },
};
