import proj4 from './dist/es/index.js';

import './dist/es/laea.js';
import def3035 from './defs/epsg3035.js';

proj4.defs('EPSG:3035', def3035);

console.log(JSON.stringify(proj4.defs('EPSG:3035'), null, 2));

console.log(proj4('EPSG:3035', [-2, 55]));
console.log(proj4('EPSG:3035', 'EPSG:4326', [3556882.464751255, 3607614.5878257155]));

console.log(proj4('EPSG:3035').forward.toString());
console.log(proj4('EPSG:3035').inverse.toString());

console.log(proj4('EPSG:3857', [-2, 55]));
console.log(proj4('EPSG:3857', 'EPSG:4326', [3556882.464751255, 3607614.5878257155]));

console.log(proj4('EPSG:3857').forward.toString());
console.log(proj4('EPSG:3857').inverse.toString());

console.log(proj4);
