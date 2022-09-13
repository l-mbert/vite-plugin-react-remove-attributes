# vite-plugin-react-remove-attributes

## !!! NOT ALL CASES TESTED YET, USE WITH CARE

---

A Vite-Plugin for React to remove Attributes on bundling

Having `data-testid`, `data-cy`, etc. in your Production Code isn't nice, it makes the DOMTree unreadable.

This Plugin will remove all of them on bundling.

---

## Install

### Yarn

```sh
yarn add -D vite-plugin-react-remove-attributes
```

### npm

```sh
npm i -D vite-plugin-react-remove-attributes
```

---

## Usage

You must define which `attributes` are to be removed in the parsing process. Optionally you can define files that must be included/excluded with the optional `include`/`exclude` parameters. Both `include` and `exclude` are documented [here](https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter).

By default, `include` is defined to read all files in the vite/rollup pipeline that end with `.(mjs|cjs|js|jsx|mts|cts|ts|tsx)` and `exclude` is set to ignore `**/node_modules/**`.

```js
import { defineConfig } from 'vite';

import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';

export default defineConfig({
  plugins: [
    VitePluginReactRemoveAttributes({
      attributes: ['ATTRIBUTES TO REMOVE'],
    }),
  ],
});
```

## Options

### attributes

**type:** `string[]`

**require**

### include

**type:** `string[]`

**default:** `[/\.[cm]?[tj]sx?$/]`

### exclude

**type:** `string[]`

**default:** `['**/node_modules/**']`

### enabled

**type:** `boolean`

**default:** `true`
