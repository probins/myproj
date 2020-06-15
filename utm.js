import utm from '../proj4js/lib/projections/utm.js';
import proj4 from '../proj4js/lib/index.js';

proj4.Proj.projections.add(utm);
