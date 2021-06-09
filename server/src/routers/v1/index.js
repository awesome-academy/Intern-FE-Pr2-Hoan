const router = require("express").Router()

const makeUserRouter = require("./users")

makeUserRouter(router)

module.exports = router