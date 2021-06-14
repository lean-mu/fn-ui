// logger.js
const pino = require("pino")

var logLevel = process.env.FN_LOG_LEVEL
if (!logLevel) {
  logLevel = process.env.NODE_ENV === "production" ? "info" : "debug"
}

// Create a logging instance
const logger = pino({
  level: logLevel,
})

module.exports.logger = logger
