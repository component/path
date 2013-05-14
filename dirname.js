
/**
 * get the parent directory path
 *
 * @param {String} path
 * @return {String}
 */

module.exports = function(path){
	var i = path.lastIndexOf('/')
	if (i < 0) return '.'
	return path.slice(0, i) || '/'
}
