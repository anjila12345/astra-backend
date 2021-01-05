const post = require('../models/Post')

exports.searchPost = (function (req, res) {
    let postPattern = new RegExp("^"+req.body.query)
    post.find({title:{$regex:postPattern}})
    .select("_id title")
    .then(function() {
        console.log(user)
        res.json(user)
    }).catch(function(e) {
        res.send(e)
    })
})