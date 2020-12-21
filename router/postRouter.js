const express = require("express")
const auth = require('../middleware/auth');
const router = express.Router()
const upload = require('../controller/uploadfile');
const postController = require("../controller/postcontroller")

router.post("/createpost", [upload], postController.addpost)



module.exports = router