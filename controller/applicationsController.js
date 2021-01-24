const Applications = require("../models/Applications")

exports.create = (req, res) => {
    const Application = new Applications(req.body)
    Application.save().then(()=>{
        res.send("Application Submitted")
    }).catch(()=>{
        res.send(e)
    })
}

exports.findApplicantsByPostId = async(req, res) => {
    Applicants.find({post_id: req.params._id}). populate('post_id').then(function(findAllApplicants){
        res.send(findAllApplicants).catch(function(e){
            res.send(e)
        })
    })
}



