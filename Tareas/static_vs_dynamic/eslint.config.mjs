// eslint.config.mjs
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022, 
      sourceType: 'module', 
      globals: globals.browser, 
    },
    rules: {
      'no-unused-vars': 'warn', // Variables sin usar 
      'eqeqeq': 'error'         // Exigir === y !== en vez de == y !=
    }
  }
]);
