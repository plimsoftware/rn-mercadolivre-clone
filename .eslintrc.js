module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react', 'expo/native'],
  parser: 'babel-eslint',
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
  plugins: ['react', 'prettier', 'react-hooks', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/style-prop-object': 'off',
  },
};
