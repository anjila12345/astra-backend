const post = require("../models/Post")
const Users = require("../models/User")

exports.myprofile = (req, res) => {
    Users.findById(req.users._id)
    .then((user) =>{
        res.json(user)
    }).catch((err) => console.log(err))
}

exports.userprofile = (req, res) => {
    Users.findById(req.params.userId)
    .then((user) => {
        res.json(user)
    }).catch((err) => console.log(err))
}

exports.userpost = (req, res) => {
    post.find({user:req.params.userId})
    .then(userpost =>{
        res.json({userpost})
    }).catch(err => {
        console.log(err)
    })
};