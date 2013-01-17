var slice = require('sliced')

function basename (path){
  return path.split('/').pop();
}

function dirname (path){
  return path.split('/').slice(0, -1).join('/') || '.'; 
}

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

/**
 * Split a path into its components
 *
 * @param {String} path 
 * @return {Array}
 */

function split (path) {
  if (path[0] === '/') path = path.slice(1)
  if (path[path.length - 1] === '/') path = path.slice(0, -1)
  return path.split('/')
}

/**
 * Find the lowest common ancestor between several absolute paths
 *
 * @param {String} paths... pass as many as you like
 * @return {String}
 */

function commonDir (first) {
  if (first instanceof Array) return commonDir.apply(null, first)
  if (!first) return '/'
  first = dirname(first)
  if (first === '.') return '/'
  first = split(first)

  for (var i = 1, len = arguments.length; i < len; i++) {
    first = compare(first, split(arguments[i]))
  }

  return '/' + first.join('/')
}

/**
 * Find the closest common ancestor between two paths
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 * @api private
 */

function compare (a, b) {
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] !== b[i]) {
      return a.slice(0, i)
    }
  }
  return a
}

exports.commonDir = commonDir
exports.split = split
exports.normalize = normalize 
exports.basename = basename 
exports.dirname = dirname 