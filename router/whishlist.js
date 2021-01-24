const express = require("express");
const router = express.Router();
const wishlistController = require('../controller/wishlistController')

router.put("/addToWishlist", wishlistController.addToWishlist);
router.put("/deleteFromWishlist", wishlistController.deleteFromWishlist);
router.get("/getAllWishlist",wishlistController.getAllWishlist);



module.exports = router