/**
 * @returns {import("eslint").Linter.FlatConfig}
 */
export function createCommonjsConfig() {
  return {
    files: [`**/*.cjs`, `**/*.cts`],

    rules: {
      'no-restricted-globals': `off`,
      'import/extensions': `off`,
      'import/no-commonjs': `off`,
      '@typescript-eslint/no-require-imports': `off`,
    },
  };
}
