module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    quotes: ["error", "double"],
    "react-native/no-inline-styles": 0,
    "react-native/no-unused-styles": 1,
  },
  env: {
    "jest/globals": true,
  },
  globals: {
    AbortController: true,
  },
};
