
var dirname = require('./dirname')
  , split = require('./split')

module.exports = common

/**
 * Find the first common dirname between several paths
 *
 *   common('/a/b/c', '/a/b/d') // => '/a/b'
 *
 * @param {String|Array} paths...
 * @return {String}
 */

function common(first){
  if (!first) return '/'
  if (first instanceof Array) return common.apply(this, first)
  first = dirname(first)
  if (first === '.') return '/'
  first = split(first)

  for (var i = 1, len = arguments.length; i < len; i++) {
    first = compare(first, split(arguments[i]))
  }

  return '/' + first.join('/')
}

/**
 * Find the first common ancestor between two segment lists
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 * @api private
 */

function compare(a, b){
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] !== b[i]) return a.slice(0, i)
  }
  return a
}