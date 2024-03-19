// @ts-expect-error
import importPlugin from 'eslint-plugin-import';

/**
 * @returns {import("eslint").Linter.FlatConfig}
 */
export function createImportConfig() {
  return {
    plugins: { import: importPlugin },

    rules: {
      'import/consistent-type-specifier-style': [`error`, `prefer-top-level`],
      'import/extensions': [`error`, `always`, { ignorePackages: true }],
      'import/no-commonjs': `error`,
      'import/no-duplicates': [`error`, { considerQueryString: true }],
      'import/no-extraneous-dependencies': `error`,

      'import/order': [
        `error`,
        {
          'alphabetize': { order: `asc` },

          'groups': [
            `type`,
            [`builtin`, `external`, `internal`, `parent`, `sibling`, `index`, `object`],
          ],

          'newlines-between': `always`,
          'warnOnUnassignedImports': true,
        },
      ],
    },
  };
}
