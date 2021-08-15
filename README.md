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

```js
import { defineConfig } from 'vite';

import VitePluginReactRemoveAttributes from '../src/index';

export default defineConfig({
  plugins: [
    VitePluginReactRemoveAttributes({
      attributes: ['ATTRIBUTES TO REMOVE'],
    }),
  ],
});
```
