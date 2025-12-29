import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import storybook from 'eslint-plugin-storybook';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {
    ignores: [
      // files
      'package-lock.json',
      'yarn.lock',
      '!.storybook',
      'vite.config.ts',
      'src/index.tsx',
      'src/**/*.stories.tsx',
      '*.cjs',
      // dependencies
      'lib',
      'dist',
      'node_modules/',
      '.yalc/'
    ]
  },
  { files: ['**/*.{ts,jsx,tsx}', '*.test.tsx'] },
  ...storybook.configs['flat/recommended'],
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      globals: {
        __dirname: true
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'no-console': [
        'error',
        {
          allow: ['error']
        }
      ],
      'quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true
        }
      ],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-namespace': [
        'error',
        {
          allowDeclarations: true
        }
      ],
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'indent': 'off',
      'no-nested-ternary': 'error',
      'no-empty': 'off',
      'valid-jsdoc': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
      jest: true,
      node: true
    }
  })
];
