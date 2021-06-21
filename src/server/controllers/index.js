const { logger } = require("../helpers/logger")
const es6Renderer = require("express-es6-template-engine")

// const text = "${engineName} - The fastest javascript template string engine in the whole ${place}!"
// const precompiled = es6Renderer(text, "engineName, place")
// const index = precompiled("ES6 Renderer", "multiverse")

var indexpath = require("file-loader!./index.html")
var indexhtml

const baseurl = "/ui"
logger.info("Server running on baseurl " + baseurl)

es6Renderer(
  "./build/" + indexpath,
  {
    locals: {
      baseurl: baseurl,
    },
  },
  (err, content) => {
    if (err) logger.error(err)
    else {
      indexhtml = content
      logger.debug(indexhtml)
    }
  }
)

var f = function (req, res) {
  res.send(indexhtml)
}

module.exports = f
