import './dist/es/laea.js';
import './dist/es/merc.js';
import proj4 from './dist/es/index.js';

proj4.defs('EPSG:3035', '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs');

console.log(proj4('EPSG:3035', [-2, 55]));
console.log(proj4('EPSG:3035', 'EPSG:4326', [3556882.464751255, 3607614.5878257155]));

console.log(proj4('EPSG:3035').forward.toString());
console.log(proj4('EPSG:3035').inverse.toString());

proj4.defs('EPSG:3857', "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

console.log(proj4('EPSG:3857', [-2, 55]));
console.log(proj4('EPSG:3857', 'EPSG:4326', [3556882.464751255, 3607614.5878257155]));

console.log(proj4('EPSG:3857').forward.toString());
console.log(proj4('EPSG:3857').inverse.toString());

console.log(proj4);
