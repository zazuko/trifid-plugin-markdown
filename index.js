const marked = require('marked')

function init (router) {
  router.locals.m = marked
}

module.exports = init
