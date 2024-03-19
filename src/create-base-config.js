/**
 * @returns {import("eslint").Linter.FlatConfig}
 */
export function createBaseConfig() {
  return {
    languageOptions: { ecmaVersion: 2022, sourceType: `module` },

    rules: {
      'complexity': `error`,
      'curly': `error`,
      'eqeqeq': [`error`, `always`, { null: `ignore` }],

      'no-restricted-globals': [
        `error`,
        { name: `__dirname`, message: `Use "fileURLToPath(import.meta.dirname)" instead.` },
        { name: `__filename`, message: `Use "fileURLToPath(import.meta.url)" instead.` },
      ],

      'no-shadow': `error`,
      'object-shorthand': `error`,
      'prefer-const': [`error`, { destructuring: `all` }],
      'quotes': [`error`, `backtick`],
      'sort-imports': [`error`, { ignoreDeclarationSort: true, ignoreMemberSort: false }],
    },
  };
}
