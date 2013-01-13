# path

  Path utilities.

# API
   - [.extname(path)](#extnamepath)
   - [.basename(path)](#basenamepath)
   - [.dirname(path)](#dirnamepath)
   - [.join(path)](#joinpath)
   - [.normalize(path)](#normalizepath)
   - [.split(path)](#splitpath)
<a name=""></a>
 
<a name="extnamepath"></a>
# .extname(path)
should return the extension.

```js
p.extname('png').should.equal('');
p.extname('.png').should.equal('.png');
p.extname('foo.png').should.equal('.png');
p.extname('foo/bar/baz.png').should.equal('.png');
p.extname('foo/bar.bar.baz/raz.png').should.equal('.png');
```

<a name="basenamepath"></a>
# .basename(path)
should return the last path segment.

```js
p.basename('foo/').should.equal('');
p.basename('foo').should.equal('foo');
p.basename('foo/bar/baz').should.equal('baz');
p.basename('foo/bar/baz').should.equal('baz');
p.basename('foo/bar/baz.png').should.equal('baz.png');
```

<a name="dirnamepath"></a>
# .dirname(path)
should return the leading segments.

```js
p.dirname('').should.equal('.');
p.dirname('foo').should.equal('.');
p.dirname('foo/bar/baz').should.equal('foo/bar');
p.dirname('foo/bar/baz/').should.equal('foo/bar/baz');
p.dirname('foo/bar/baz.png').should.equal('foo/bar');
```

<a name="joinpath"></a>
# .join(path)
should join segements sequencially.

```js
p.join('foo').should.equal('foo')
p.join('foo', 'bar').should.equal('foo/bar')
```

should normalize the result.

```js
p.join('/foo', 'bar', '/baz/asdf', 'quux', '..').should.equal('/foo/bar/baz/asdf')
```

<a name="normalizepath"></a>
# normalize(path)
should iron out the path.

```js
p.normalize('/foo/bar//baz/asdf/quux/..').should.equal('/foo/bar/baz/asdf')
```

should only return an absolute path if its given one.

```js
p.normalize('foo/bar').should.equal('foo/bar')
```

<a name="splitpath"></a>
# split(path)
return an ordered array of segments.

```js
p.split('/a/b/c/d').should.deep.equal(['a', 'b', 'c', 'd'])
p.split('a/b/c/d').should.deep.equal(['a', 'b', 'c', 'd'])
p.split('a/b/c/d/').should.deep.equal(['a', 'b', 'c', 'd'])
```
## Running the tests

To run in node just run `$ make test`

To run in a browser you first need to build by running `$ make test/built.js`. Then navigate your browser to the test directory of the repo.

## License 

(The MIT License)

Copyright (c) 2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.