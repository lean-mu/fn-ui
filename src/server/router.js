var express = require("express")
var router = express.Router()

const baseurl = process.env.VUE_APP_BASE_URL || ""

console.log("baseurl=" + baseurl)

router.get(baseurl + "/", require("./controllers/index.js"))
router.use(baseurl + "/api/apps", require("./controllers/apps.js"))
router.use(baseurl + "/api/fns", require("./controllers/functions.js"))
router.use(baseurl + "/api/info", require("./controllers/info.js"))
router.use(baseurl + "/api/stats", require("./controllers/stats.js"))

module.exports = router
