
var basename = require('./basename')

/**
 * get the last ".x"
 *
 * @param {String} path
 * @return {String}
 */

module.exports = function(path){
  var base = basename(path);
  if (!~base.indexOf('.')) return '';
  var ext = base.split('.').pop();
  return '.' + ext;
}