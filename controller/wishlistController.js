const user = require("../models/User");
const post = require("../models/Post")

exports.addToWishlist = (function (req, res) {
    user.findByIdAndUpdate(req.body.user_id, {$push:{wishlist: req.body.post_id}}, {new:true})
    .then(function(){
        res.send("added to wishlist")
    }).catch(function(e) {
        res.send("not done")
    })
})

exports.deleteFromWishlist = (function(req, res) {
    user.findByIdAndUpdate(req.body.user_id, {$pull:{wishlist: req.body.post_id}}, {new:true})
    .then(function() {
        res.send("deleted from the wishlist")
    }).catch(function(e) {
        res.send(e)
    })
})

// exports.getAllWishlist = (function(req, res) {
//     post.find({_id:{$in:req.user.wishlist}})
//     .populate('wishlist')
//     .then((whishlis) => {
//         console.log(whishlis);
//         res.send("list of all the wishlist")
//     })
//     .catch(function(e) {
//         res.send(e)
//     })
// })

exports.getAllWishlist = (function(req, res) {
    user.findOne(req.query)
    // .populate('wishlist')
    .populate({
        path:'wishlist',
        populate:{
            path:'user_id'
        }
    })
    .then((user) => {
        console.log(user.wishlist);
        res.json(user.wishlist)
        res.send("list of all the wishlist")
    })
    .catch(function(e) {
        res.send(e)
    })
})