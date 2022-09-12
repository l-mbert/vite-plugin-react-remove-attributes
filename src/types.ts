import { FilterPattern } from '@rollup/pluginutils';

export interface Options {
  attributes: string[];
  enabled?: boolean;
  include?: FilterPattern;
  exclude?: FilterPattern;
}
