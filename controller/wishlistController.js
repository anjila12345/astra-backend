const user = require("../models/User");

exports.addToWishlist = (function (req, res) {
    user.findByIdAndUpdate(req.body.user_id, {$push:{wishlist: req.body.post_id}}, {new:true})
    .then(function(){
        res.send("added to wishlist")
    }).catch(function(e) {
        res.send("not done")
    })
})

exports.deleteFromWishlist = (function(req, res) {
    user.findByIdAndUpdate(req.params.postid, {$pull:{wishlist: req.post.id}}, {new:true})
    .then(function() {
        res.send("deleted from the wishlist")
    }).catch(function(e) {
        res.send(e)
    })
})