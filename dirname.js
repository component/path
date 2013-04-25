/**
 * get the parent directory path
 *
 * @param {String} path
 * @return {String}
 */

module.exports = function(path){
  return path.split('/').slice(0, -1).join('/') || '.'; 
}