var contentPath = require('./path')
var rimraf = require('rimraf')

module.export = rm
function rm (cache, address, cb) {
  rimraf(contentPath(cache, address), cb)
}