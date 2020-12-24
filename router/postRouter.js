const express = require("express")
const auth = require('../middleware/auth');
const router = express.Router()
const upload = require('../controller/uploadfile');
const postController = require("../controller/postcontroller")

router.post("/createpost", [upload], postController.addpost)
router.get("/findblogbyuserid/:_id",postController.findPostByUserId)
router.delete("/deleteblog/:id",postController.deleteById)
router.put("/blogupdate/:id",postController.updatepost)
router.get("/singleblog/:id",postController.getSingleFeed)
router.get("/findallpost", postController.findAllPost)



module.exports = router