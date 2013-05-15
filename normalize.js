
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
  var res = []
  var up = 0

  for (var i = 0, len = segs.length; i < len; i++) {
    var seg = segs[i]
    if (seg === '' || seg === '.') continue
    if (seg === '..') up++, res.pop()
    else up--, res.push(seg)
  }

  if (up > 0) {
    if (path[0] == '/') return '/'
    res = '..'
    while (--up) res += '/..'
    return res
  }
  return path[0] == '/'
    ? '/' + res.join('/')
    : res.join('/') || '.'
}