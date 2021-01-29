const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const AgentController = require('../controller/agentcontroller')

const UserController = require('../controller/usercontroller')
const upload = require('../controller/uploadfile');

router.post("/agent/register", [upload], AgentController.adduser)
router.post("/agent/login", AgentController.login)
router.get("/agent/logincheck", auth, AgentController.logincheck)
router.get("/urs", AgentController.finduser)
router.get("/profile/:_id", AgentController.profile)
router.delete("/del/:id", AgentController.delete)
router.put("/agent/updates/:id", [upload], AgentController.update)
router.post("/agent/logout", auth, AgentController.logout)
router.put("/upload/:id", [upload], AgentController.updates)
router.get("/admin_dashboard", auth, AgentController.admin)
router.get("/getuser/:id", AgentController.getuserbyid)

module.exports = router