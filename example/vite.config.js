import { defineConfig } from 'vite';

import VitePluginReactRemoveAttributes from '../src/index';

export default defineConfig({
  plugins: [
    VitePluginReactRemoveAttributes({
      attributes: ['data-testid'],
      include: './src/*.(ts|tsx)',
    }),
  ],
});
