
var p = require('..');

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