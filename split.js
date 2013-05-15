
/**
 * Split a path into its components
 *
 * @param {String} path 
 * @return {Array}
 */

module.exports = function(path){
  if (path[0] === '/') path = path.slice(1)
  if (path[path.length - 1] === '/') path = path.slice(0, -1)
  if (!path) return []
  return path.split('/')
}