import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import mocha from 'eslint-plugin-mocha';

export default [
  js.configs.recommended,
  jsdoc.configs['flat/recommended'],
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      'jsdoc/tag-lines': ['error' | 'warn', 'any', { 'startLines': 1 }]
    }
  },
  {
    files: ['**/test/*.js'],
    plugins: {
      mocha
    },
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly'
      }
    },
    rules: {
      ...mocha.configs['recommended'].rules
    }
  }
];
