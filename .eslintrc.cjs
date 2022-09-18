module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'simple-import-sort'],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-key': 'warn',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
