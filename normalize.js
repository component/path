
/**
 * Clean up a messy path
 *
 *   normalize('/foo//baz/quux/..') // => '/foo/baz'
 *
 * @param {String} path
 * @return {String}
 */

module.exports = function(path){
  var isAbsolute = path[0] === '/'
  var res = []
  path = path.split('/')

  for (var i = 0, len = path.length; i < len; i++) {
    var seg = path[i]
    if (seg === '..') res.pop()
    else if (seg && seg !== '.') res.push(seg)
  }

  return (isAbsolute ? '/' : '') + res.join('/')
}