import neostandard, { plugins } from 'neostandard';
import eslintReact from '@eslint-react/eslint-plugin';
import storybook from 'eslint-plugin-storybook';

export default [
  { ignores: ['build', 'storybook-static', 'coverage'] },
  ...neostandard({ ts: true }),
  {
    files: ['**/*.{ts,tsx}'],
    ...eslintReact.configs['recommended-typescript']
  },
  ...storybook.configs['flat/recommended'],
  {
    plugins: { '@stylistic': plugins['@stylistic'] },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/jsx-curly-brace-presence': 'off',
      '@stylistic/jsx-tag-spacing': 'off',
      '@stylistic/jsx-quotes': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { '@typescript-eslint': plugins['typescript-eslint'].plugin },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
];
