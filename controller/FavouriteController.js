const post = require("../models/Post");

exports.addToFavourite = (function (req, res) {
    post.findByIdAndUpdate(req.body.post_id, {$push:{favourite: req.body.user_id}}, {new:true})
    .then(function(){
        res.send("added to Favourite")
    }).catch(function(e) {
        res.send("not done")
    })
})

exports.deleteFromFavourite = (function(req, res) {
    post.findByIdAndUpdate(req.body.post_id, {$pull:{favourite: req.body.user_id}}, {new:true})
    .then(function() {
        res.send("deleted from the Favourite")
    }).catch(function(e) {
        res.send("not done")
    })
})