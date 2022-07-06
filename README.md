# vite-plugin-react-remove-attributes

## !!! NOT ALL CASES TESTED YET, USE WITH CARE !!!

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

You must define which `attributes` are to be removed together with the files to `include` in the parsing process. Optionally you can define files that must be excluded with the optional `exclude` parameter. Both `include` and `exclude` are documented [here](https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter).

```js
import { defineConfig } from 'vite';

import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';

export default defineConfig({
  plugins: [
    VitePluginReactRemoveAttributes({
      attributes: ['ATTRIBUTES TO REMOVE'],
      include: 'match/to/files.(ts|tsx|js|jsx)',
    }),
  ],
});
```
