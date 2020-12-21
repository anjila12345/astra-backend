const express = require("express");
const router = express.Router();
const Users = require('../models/User')
const auth = require('../middleware/auth1');
const UserController = require('../controller/usercontroller')
const upload = require('../controller/uploadfile');

router.post("/register", UserController.adduser)

router.post("/login", UserController.login)

router.get("/logincheck", auth, UserController.logincheck)

router.get("/finduser", UserController.finduser)

router.get("/userprofile/:_id", UserController.profile)

router.delete("/delete/:id", UserController.delete)

router.put("/userupdate/:id", UserController.update)

router.post("/userlogout", auth, UserController.logout)

router.put("/upload/:id", [upload], UserController.updates)

router.get("/admin_dashboard", auth, UserController.admin)






module.exports = router