const express = require("express")
const auth = require('../middleware/auth');
const router = express.Router()

const applicationsController = require("../controller/applicationsController")


router.post("/postapplication", applicationsController.addapplication)

router.get('/getapplicationsbypostid/:id', applicationsController.findApplicantsByPostId)
router.get("/findallapplicants", applicationsController.findapplicants)
router.delete("/deleteapplicants/:id", applicationsController.deleteapplicants)


module.exports = router