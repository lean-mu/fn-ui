const { logger } = require("../helpers/logger")
const es6Renderer = require("express-es6-template-engine")

const baseurl = process.env.VUE_APP_BASE_URL || ""

logger.info("Server running on baseurl " + baseurl)

var indexhtml

// const text = "${engineName} - The fastest javascript template string engine in the whole ${place}!"
// const precompiled = es6Renderer(text, "engineName, place")
// const index = precompiled("ES6 Renderer", "multiverse")

var indexpath = require("file-loader!./index.html")

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
