const Applications = require("../models/Applications")

exports.addapplication = (req, res) => {

    console.log(req.body.user_id)
    var mydata = new Applications(req.body);
    mydata.save().then(function () {
        res.send("CV has been added")
    }).catch(function (e) {
        res.send(e)
    })

}
exports.findApplicantsByPostId = async (req, res) => {
    Applications.find({ post_id: req.params._id }).populate('post_id').then(function (findAllApplicants) {
        res.send(findAllApplicants).catch(function (e) {
            res.send(e)
        })
    })
}


exports.findapplicants = async (req, res) => {
    console.log(req.params._id)
    Applications.find().populate('user_id').populate('post_id').then(function (findAllApplicants) {
        res.send(findAllApplicants).catch(function (e) {
            res.send(e)
        })
    })
}

exports.deleteapplicants = (function (req, res) {
    Applications.findByIdAndDelete(req.params.id).then(function () {
        res.send("deleted");
    }).catch(function () {
        res.send(e)
    })
});




// exports.findApplicantsByPostId = async (req, res) => {
//     console.log(req.params._id)
//     Applications.find({ user_id: req.params._id }).populate('user_id').then(function (findAllpost) {
//         res.send(findAllpost).catch(function (e) {
//             res.send(e)
//         })
//     })
// }


