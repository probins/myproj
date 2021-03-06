export default function(proj4, def3035) {
  proj4.defs('EPSG:3035', def3035);

  console.log(JSON.stringify(proj4.defs('EPSG:3035'), null, 2));

  console.log(proj4('EPSG:3035', [-2, 55]));
  console.log(proj4('EPSG:3035', 'EPSG:4326', [3556882.464751255, 3607614.5878257155]));

  let forward = proj4('EPSG:3035').forward;
  console.log(forward([-2, 55]));
  let inverse = proj4('EPSG:3035').inverse;
  console.log(inverse([3556882.464751255, 3607614.5878257155]));

  console.log(proj4('EPSG:3857', [-2, 55]));
  console.log(proj4('EPSG:3857', 'EPSG:4326', [-222638.98158654713, 7361866.113051185]));

  forward = proj4('EPSG:3857').forward;
  console.log(forward([-2, 55]));
  inverse = proj4('EPSG:3857').inverse;
  console.log(inverse([-222638.98158654713, 7361866.113051185]));

  console.log(proj4);
}
