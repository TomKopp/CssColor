import js from '@eslint/js';
import eslintPluginImportX from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import mocha from 'eslint-plugin-mocha';
import globals from 'globals';

export default [
	js.configs.recommended,
	eslintPluginImportX.flatConfigs.recommended,
	jsdoc.configs['flat/recommended'],
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
			},
		},
	},
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
				...globals.mocha
			}
		},
		rules: {
			...mocha.configs['recommended'].rules
		}
	}
];
