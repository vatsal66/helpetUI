module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
        jsx: true,
        modules: true
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  plugins: ['react', 'react-hooks', 'prettier', 'import-helpers'],
  extends: ['prettier', 'prettier/react'],
  rules: {
    curly: 'error',
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['error', 'as-needed'],
    'no-console': 'error',
    'no-unused-vars': 'error',
    'object-curly-newline': 0,
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'prefer-template': 0,
    'no-shadow': 'error',
    eqeqeq: ['error', 'always'],
    'react/prop-types': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'react/require-default-props': 'error',
    'react-hooks/rules-of-hooks': 'error',
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
  },
  settings: {
    react: {
      version: "detect"
    }
  },
};
