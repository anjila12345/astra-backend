const express = require("express")
const auth = require('../middleware/auth');
const router = express.Router()

const {
    create,
    findApplicantsByPostId,
} = require('../controller/applicationsController');



// router.post('/apply/:post_id', create)

// router.get('/applicants/:post_id', findApplicantsByPostId)

// router.put('/updatestatus/:post_id/:user_id', updateApplicants)

/////// which is right? ///////

router.post('/applications/:id', create)

router.get('/getapplicationsbypostid/:id', findApplicantsByPostId)


module.exports = router