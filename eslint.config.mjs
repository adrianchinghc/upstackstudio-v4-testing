import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      // Font loaded via <link> in layout.tsx head — intended for App Router
      '@next/next/no-page-custom-font': 'off',
      // Allow unescaped apostrophes in JSX text content
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    // Node.js utility scripts use CommonJS require() — exempt from ESM rule
    files: ['scripts/**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]

export default eslintConfig
