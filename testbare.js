import proj4 from './dist/esbare/bareindex.js';

import './dist/esbare/laea.js';
import './dist/esbare/merc.js';
import def3035 from './defs/epsg3035.js';
import def3857 from './defs/epsg3857.js';

import runtest from './runtest.js';

proj4.defs('EPSG:3857', def3857);

runtest(proj4, def3035);
