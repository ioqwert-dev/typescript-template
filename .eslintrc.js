module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'no-console': 'off'
  },
  ignorePatterns: ['node_modules', '.eslintrc.js']
}
