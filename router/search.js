var express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const searchController = require('../controller/SearchController')

// var searchController = express.Router();
// searchController.use(bodyParser.json({limit:'50mb', extended: true}));
// // router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// searchController.use(express.json());

router.post("/searchPost", searchController.searchPost);

module.exports = router