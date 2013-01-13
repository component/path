var slice = require('sliced')

exports.basename = basename 
function basename (path){
  return path.split('/').pop();
}

exports.dirname = function(path){
  return path.split('/').slice(0, -1).join('/') || '.'; 
};

exports.extname = function(path){
  var base = basename(path);
  if (!~base.indexOf('.')) return '';
  var ext = base.split('.').pop();
  return '.' + ext;
}

/**
 * Concatenate a sequence of path segments to generate one flat path
 * 
 * @param {String} [...]
 * @return {String}
 */

exports.join = function() {
  return normalize(slice(arguments).filter(function(p, index) {
    return p
  }).join('/'));
};

/**
 * Flatten a path so it is as direct as possible. Also removes
 * any double slashes. i.e //
 *
 *   normalize('/foo//baz/quux/..') // => '/foo/baz'
 *
 * @param {String} path
 * @return {String}
 */

exports.normalize = normalize 
function normalize (path) {
  var isAbsolute = path[0] === '/'
    , res = []
  path = path.split('/')

  for (var i = 0, len = path.length; i < len; i++) {
    var seg = path[i]
    if (seg === '..') res.pop()
    else if (seg && seg !== '.') res.push(seg)
  }

  return (isAbsolute ? '/' : '') + res.join('/')
}