import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: ['../proj4js/lib/bareindex.js', './projections/merc.js',
  './projections/laea.js', './projections/lcc.js', './projections/omerc.js',
  './projections/sterea.js', './projections/tmerc.js', './projections/utm.js'
  ],
  output: {
    dir: "dist/esbare",
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
