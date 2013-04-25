
var normalize = require('./normalize')

/**
 * Concatenate a sequence of path segments to generate one flat path
 * 
 * @param {String} [...]
 * @return {String}
 */

module.exports = function(path){
	for (var i = 1, len = arguments.length; i < len; i++) {
		path += '/' + arguments[i]
	}
  return normalize(path)
}