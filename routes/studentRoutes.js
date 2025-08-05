const express =  require("express")
const Router = express.Router()
const studentController = require("../controllers/studentController")

Router.get("/index",studentController.index)

module.exports = Router