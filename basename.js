/**
 * get the filename with its any parent segments
 *
 * @param {String} path
 * @return {String}
 */

module.exports = function(path){
  return path.split('/').pop();
}