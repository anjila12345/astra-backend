const post = require('../models/Post')

exports.searchPost = (function (req, res) {
    let postPattern = new RegExp("^"+req.body.query)
    post.find({title:{$regex:postPattern}})
    .select("_id title")
    .then(function(spost) {
        console.log(spost)
        console.log('searching')
        res.json(spost)
    }).catch(function(e) {
        res.send(e)
    })
})