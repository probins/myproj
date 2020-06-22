### Proj4js with ES-module output

#### Part 1: create modules for Proj4js defs
Proj4js currently uses a JSON representation of the traditional string definition for each projection. `dist/defs/` contains (uncompressed) modules consisting of a default export of this JS object for a given projection id, for example, `dist/defs/epsg3035.js` contains the def for the 'EPSG:3035' projection. These can then be imported using `jsDelivr` instead of defining the string in each app. It might be better to put these in a separate repo, as they do not normally change and so do not need updating whenever a new version of Proj4js is released.

#### Part 2: projections in separate modules
1. upgrade to latest version of `Rollup`
2. use latest version of `Rollup` plugins, now part of `@rollup`
3. replace `uglify` with `terser`
4. each projection type has a module in `projections` (currently only selection - could be generated in Gruntfile), in the format:
```javascript
import laea from '../../proj4js/lib/projections/laea.js';
import projections from '../../proj4js/lib/projections.js';
projections.add(laea);
```
5. copy `projs.js` to `proj4js/` (an empty function, as in custom default in Gruntfile)
6. clear `dist/es/`
7. `rollup -c` will then use `rollup-config.js` and create modules in `dist/es/`
8. once pushed to Github, these can then be imported in the browser from `dist/es` on `jsDelivr`. Until NodeJS supports importing from URL, the same code can be used by downloading the modules and then importing using a relative address (assuming the `package.json` contains `type:module`).

#### Part 3: 'bare' version with no convenience/undocumented options
The base module produced in Part 1 is still quite large, so a 'bare' version consisting of just the Proj4js code without any of the convenience options is created in `dist/esbare/`:

* the current Proj4js Readme documents only 2 functions: the main `proj4()` function (`core.js`) for transforming coordinates from one projection to another, and `proj4.def()` for adding a
projection based on its definition (`defs.js`). The exported `proj4` object, however, contains various other properties which are not documented
* the outdated aliases for Web Mercator can be left out
* Web Mercator (EPSG:3857) and EPSG:4269 are currently always added, whether you use them or not. These can also be left out, and added as any other projection/CRS.
* with projection definitions now available as modules, there is no longer any need to support traditional Proj strings and WKT definitions; this can be moved to independent modules converting to/from Proj4js objects.
* MGRS should also be separated out into its own module

Part of this can be done by:

* creating `bareindex.js` as a separate entry point with only the needed/documented functions imported
* Web Mercator and EPSG:4269 along with the outdated aliases for the former are defined in `global.js`, imported only into `defs.js`. This import could be moved to `index.js` (keeping BC) and left out of `bareindex.js`
* The `merc` projection is added in the `start` function of `projections.js`, run when `Proj.js` is first imported. This could also be moved to `index.js` (also keeping BC) and left out of `bareindex.js`. `lonlat` can be left in there.
* `defs.js` is imported into `index.js` and `parseCode.js`. Without support for String codes, `defs.js` just does `get`/`set` for definitions, and most of `parseCode.js` is not needed. In 'bare' mode, a new `baredefs.js` which only does `get`/`set` could be imported into `bareindex.js`, but `parseCode.js` is imported into `Proj.js`, which is more fundamental, so leaving it out is more complex.

It should however be possible to rearrange the code so that `index.js` would be the BC entry point, and would include the Web Mercator def and projection, and include support for Proj and WKT def strings. `bareindex.js` would be the cut-down entry point that does not include these. Alternatively, it might be simpler to make `bareindex.js` the default, and create a new breaking version.

For the moment, this repo contains `bareindex.js` and hacked versions of 3 other modules. So, to create `dist/esbare`:
* copy `bareindex.js` to `../proj4js/lib/`
* copy `defs.js`, `projections.js` and `parseCode.js` to `../proj4js/lib/` so they overwrite the existing ones
* run `rollup -c rollup.bareconfig.js` to create `dist/esbare`.

As with Part 2, this can be pushed to Github and the modules imported in the browser using `jsDelivr`. `test.html` shows an example of this, and `testbase.js` shows sample usage with relative addresses.

#### Build sizes
Current full build available on `cdnjs.com` is 76k. Base module from Part 2 (`dist/es/`) is 29k. Removing undocumented functions and treating `merc` as other projection types as described in Part 3 (`dist/esbare`) reduces this to 21k. Removing the parsing of Proj def and WKT strings reduces it further to 12k.