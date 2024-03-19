import type { Linter } from 'eslint';

export function createConfigs(
  options?: Readonly<{ browser?: boolean | undefined; node?: boolean | undefined }>,
): Linter.FlatConfig[];
