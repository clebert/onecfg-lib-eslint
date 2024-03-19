import tsPlugin from '@typescript-eslint/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';

/**
 * @returns {import("eslint").Linter.FlatConfig}
 */
export function createTypescriptConfig() {
  return {
    files: [`**/*.ts`, `**/*.tsx`, `**/*.mts`, `**/*.cts`],

    // @ts-expect-error
    plugins: { '@typescript-eslint': tsPlugin },
    languageOptions: { parser: tsParser, parserOptions: { project: true } },

    rules: {
      '@typescript-eslint/await-thenable': `error`,

      '@typescript-eslint/consistent-type-imports': [
        `error`,
        { prefer: `type-imports`, fixStyle: `separate-type-imports` },
      ],

      '@typescript-eslint/explicit-module-boundary-types': [
        `error`,
        { allowDirectConstAssertionInArrowFunctions: true },
      ],

      '@typescript-eslint/no-floating-promises': `error`,
      '@typescript-eslint/no-import-type-side-effects': `error`,
      '@typescript-eslint/no-require-imports': `error`,
      '@typescript-eslint/no-shadow': [`error`, { hoist: `all` }],
      'no-shadow': `off`,
      '@typescript-eslint/promise-function-async': `error`,
      '@typescript-eslint/quotes': [`error`, `backtick`],
      'quotes': `off`,
      '@typescript-eslint/require-await': `error`,
      'require-await': `off`,
    },
  };
}
