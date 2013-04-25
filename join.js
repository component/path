
var normalize = require('./normalize')
  , slice = require('sliced')

/**
 * Concatenate a sequence of path segments to generate one flat path
 * 
 * @param {String} [...]
 * @return {String}
 */

module.exports = function(){
  return normalize(slice(arguments).join('/'));
}