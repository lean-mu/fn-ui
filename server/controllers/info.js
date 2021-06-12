var express = require("express")
var url = require("url")
var router = express.Router()

router.get(process.env.VUE_APP_BASE_URL + "/api-url", function (req, res) {
  var apiUrl = req.app.get("api-url")
  res.json({ url: url.format(apiUrl) })
})

module.exports = router
