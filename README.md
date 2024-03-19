# onecfg-lib-eslint

> An ESLint config for use in onecfg projects.

## Installation

```sh
npm install onecfg-lib-eslint
```

## Usage Example

`eslint.config.js`:

```js
import { createConfigs } from 'onecfg-lib-eslint';

export default [
  { ignores: [`dist/`, `lib/`] },

  ...createConfigs({
    browser: true,
    node: true,
  }),
];
```
