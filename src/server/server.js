var express = require("express")
var path = require("path")
var url = require("url")
var bodyParser = require("body-parser")
const { logger } = require("./helpers/logger")
// var pino = require("express-pino-logger")()

var app = express()

var apiUrl = url.parse(process.env.FN_API_URL)
if (!apiUrl || !apiUrl.hostname) {
  logger.error(
    "API URL not set. Please specify Functions API URL via environment variable, e.g. FN_API_URL=http://localhost:8080 npm start"
  )
  process.exit(1)
}

app.set("api-url", apiUrl)

//app.use(pino)

app.use(bodyParser.json())

const baseurl = "/ui"
app.use(baseurl, express.static("public"))

app.use(require("./router.js"))
app.disable("etag")

var port = process.env.PORT || 4000
app.listen(port, function () {
  logger.info("Using API url: " + apiUrl.host)
  logger.info("Server running on port " + port)
})
