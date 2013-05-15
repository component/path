
/**
 * get the filename with its any parent segments
 *
 * @param {String} path
 * @return {String}
 */

module.exports = function(path){
	var i = path.lastIndexOf('/')
	if (i < 0) return path
	return path.slice(i + 1)
}
