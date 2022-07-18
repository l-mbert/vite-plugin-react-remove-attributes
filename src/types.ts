import { FilterPattern } from '@rollup/pluginutils';

export interface Options {
  attributes: string[];
  include?: FilterPattern;
  exclude?: FilterPattern;
}
