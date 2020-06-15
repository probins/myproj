import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: ['../proj4js/lib/index.js',
    './laea.js', './lcc.js', './merc.js', './omerc.js', './sterea.js',
    './tmerc.js', './utm.js'
  ],
  output: {
      dir: "dist/es",
      format: "es",
      sourcemap: true,
      plugins: [
        terser()
      ]
  },
  plugins: [
    json(),
    replace({
       __VERSION__: pkg.version
     }),
    nodeResolve()
  ]
};
