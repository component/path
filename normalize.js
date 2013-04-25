
/**
 * Clean up a messy path
 *
 *   normalize('/foo//baz/quux/..') // => '/foo/baz'
 *
 * @param {String} path
 * @return {String}
 */

module.exports = function(path){
  var segs = path.split('/')
  if (segs.length <= 1) return path
  var res = [segs[0]]

  for (var i = 1, len = segs.length; i < len; i++) {
    var seg = segs[i]
    if (seg === '' || seg === '.') continue
    if (seg === '..') res.pop()
    else res.push(seg)
  }

  return res.join('/')
}