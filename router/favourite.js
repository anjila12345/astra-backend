const express = require("express");
const router = express.Router();
const FavouriteController = require('../controller/FavouriteController')

router.put("/addToFavourite", FavouriteController.addToFavourite);
router.put("/deleteFromFavourite", FavouriteController.deleteFromFavourite);



module.exports = router