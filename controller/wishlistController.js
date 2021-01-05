const user = require("../models/User");

exports.addToWishlist = (function (req, res) {
    user.findByIdAndUpdate(req.params.postid, {$push:{wishlist: req.post.id}}, {new:true})
    .then(function(){
        res.send("add to wishlist")
    }).catch(function(e) {
        res.send(e)
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