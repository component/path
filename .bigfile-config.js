module.exports = function (config) {
	config.compileTime.handlers.push({
		if: /\/node_modules\/mocha\/index\.js$/,
		do: function (file) {
			var browerVersion = file.path.replace(/index\.js$/, 'mocha.js')
			var src = require('fs').readFileSync(browerVersion, 'utf-8')
			console.log('replacing mocha')
			file.text = src +='\nmodule.exports = mocha'
			return file
		}
	})
	config.resolveTime.fileTypes.unshift({
		if: /\/node_modules\/mocha\/index\.js$/,
		make: function Module (file) {
			var location = file.path
			var path = require('path')
			this.path = location
			this.base = path.dirname(location)
			this.ext = path.extname(location)
			this.name = path.basename(location, this.ext)
			this.text = file.text
			this.lastModified = file['last-modified']
			this.requires = function () {
				return []
			}
		}
	})
}
