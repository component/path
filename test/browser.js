var mocha = require('mocha')

mocha.setup('bdd')

require('./path.js')

mocha.run(function () {
   console.log('Done!')
})