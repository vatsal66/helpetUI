module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  plugins: ['react', 'react-hooks', 'import-helpers'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    curly: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['error', 'as-needed'],
    'no-console': 'error',
    'no-unused-vars': 'error',
    'prefer-template': 0,
    'no-shadow': 'error',
    eqeqeq: ['error', 'always'],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'off',
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'react/require-default-props': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        groups: [
          'module',
          '/@components/*/',
          '/@hooks/*/',
          '/@helpers/*/',
          '/@services/*/',
          '/@mocks/*/',
          '/@assets/*/',
          '/@styles/*/',
          ['sibling', 'index'],
        ],
        alphabetize: { ignoreCase: true },
        newlinesBetween: 'always',
      },
    ],
    indent: ['error', 2], // 2 spaces indentation
    'no-trailing-spaces': ['error', { skipBlankLines: false }],
    'space-before-function-paren': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
    semi: ['error', 'always'], // Ensure semicolons where needed
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // Limit empty lines
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
