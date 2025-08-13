import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Aquí sin spread porque no es iterable, sino un objeto:
  pluginReact.configs.flat.recommended,

  {
    files: [
      'metro.config.{js,cjs,mjs}',
      'babel.config.{js,cjs,mjs}',
      'jest.config.{js,cjs,mjs}',
      '*.config.{js,cjs,mjs}',
    ],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
]);
