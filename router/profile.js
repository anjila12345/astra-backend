const express = require("express")
const auth = require('../middleware/auth');
const router = express.Router()
// const upload = require('../controller/uploadfile');
const profilecontroller = require("../controller/profilecontroller")

router.get("/myprofile", profilecontroller.myprofile);
router.get("/userprofile/:id", profilecontroller.userprofile);
router.get("/userpost/:id", profilecontroller.userpost);