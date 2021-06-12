var express = require("express")
var router = express.Router()

router.use(process.env.VUE_APP_BASE_URL + "/api/apps", require("./controllers/apps.js"))
router.use(process.env.VUE_APP_BASE_URL + "/api/fns", require("./controllers/functions.js"))
router.use(process.env.VUE_APP_BASE_URL + "/api/info", require("./controllers/info.js"))
router.use(process.env.VUE_APP_BASE_URL + "/api/stats", require("./controllers/stats.js"))

module.exports = router
