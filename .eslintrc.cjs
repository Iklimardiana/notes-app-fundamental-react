module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'no-alert': 'off',
  },
};
