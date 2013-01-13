var p = require('..')
  , should = require('chai').should()

describe('.extname(path)', function(){
  it('should return the extension', function(){
    p.extname('png').should.equal('');
    p.extname('.png').should.equal('.png');
    p.extname('foo.png').should.equal('.png');
    p.extname('foo/bar/baz.png').should.equal('.png');
    p.extname('foo/bar.bar.baz/raz.png').should.equal('.png');
  })
})

describe('.basename(path)', function(){
  it('should return the last path segment', function(){
    p.basename('foo').should.equal('foo');
    p.basename('foo/bar/baz').should.equal('baz');
    p.basename('foo/bar/baz').should.equal('baz');
    p.basename('foo/bar/baz.png').should.equal('baz.png');
  })
})

describe('.dirname(path)', function(){
  it('should return the leading segments', function(){
    p.dirname('').should.equal('.');
    p.dirname('foo').should.equal('.');
    p.dirname('foo/bar/baz').should.equal('foo/bar');
    p.dirname('foo/bar/baz.png').should.equal('foo/bar');
  })
})

describe('.join(path)', function () {
  it('should join segements sequencially', function () {
    p.join('foo').should.equal('foo')
    p.join('foo', 'bar').should.equal('foo/bar')
  })
  it('should normalize the result', function () {
    p.join('/foo', 'bar', '/baz/asdf', 'quux', '..').should.equal('/foo/bar/baz/asdf')
  })
})

describe('normalize(path)', function () {
  it('should iron out the path', function () {
    p.normalize('/foo/bar//baz/asdf/quux/..').should.equal('/foo/bar/baz/asdf')
  })
  it('should only return an absolute path if its given one', function () {
    p.normalize('foo/bar').should.equal('foo/bar')
  })
})

describe('split(path)', function () {
  it('return an ordered array of segments', function () {
    p.split('/a/b/c/d').should.deep.equal(['a', 'b', 'c', 'd'])
    p.split('a/b/c/d').should.deep.equal(['a', 'b', 'c', 'd'])
    p.split('a/b/c/d/').should.deep.equal(['a', 'b', 'c', 'd'])
  })
})