import type { Plugin } from 'vite';
import type { Options } from './types';

export default function VitePluginReactRemoveAttributes(options: Options): Plugin {
  return {
    name: 'vite-plugin-react-remove-attributes',
    apply: 'build',
    transform(src) {
      options.attributes.forEach((attribute) => {
        const attributeMatcher = new RegExp(
          `(,\\s*\\"${attribute}\\" *: *\\".*\\"|(?=\\s*\\}))|(\\s*\\"${attribute}\\" *: *\\".*\\"(,|(?=\\s*\\})))`,
          'g'
        );

        src = src.replaceAll(attributeMatcher, '');
      });

      return {
        code: src,
      };
    },
  };
}
