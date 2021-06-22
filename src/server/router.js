var express = require("express")
var router = express.Router()

router.get("/ui", require("./controllers/index.js"))
router.use("/ui" + "/api/apps", require("./controllers/apps.js"))
router.use("/ui" + "/api/fns", require("./controllers/functions.js"))
router.use("/ui" + "/api/info", require("./controllers/info.js"))
router.use("/ui" + "/api/stats", require("./controllers/stats.js"))

module.exports = router
