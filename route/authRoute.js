const authController = require("../controller/authController")
const express = require("express") 
const router = express.Router() 
router.post("/login",authController.login)
module.exports=router