import { createBaseConfig } from './create-base-config.js';
import { createCommonjsConfig } from './create-commonjs-config.js';
import { createImportConfig } from './create-import-config.js';
import { createTypescriptConfig } from './create-typescript-config.js';
import globals from 'globals';

/**
 * @param {Readonly<{ browser?: boolean; node?: boolean }>} [options]
 * @returns {import("eslint").Linter.FlatConfig[]}
 */
export function createConfigs(options) {
  const { browser, node } = options ?? {};

  return [
    browser ? { languageOptions: { globals: { ...globals.browser } } } : {},
    node ? { languageOptions: { globals: { ...globals.node } } } : {},
    createBaseConfig(),
    createImportConfig(),
    createTypescriptConfig(),
    createCommonjsConfig(),
  ];
}
