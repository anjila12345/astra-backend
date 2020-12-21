const post = require("../models/Post")

//function for adding post
exports.addpost = (req, res) => {

    console.log(req.body)
    console.log(req.files)
    req.files.map(function (items) {
        const Post = new post({
            user_id: req.body.user_id,
            title: req.body.title,
            description: req.body.description,
        }
        )
        Post.save().then(function () {
            res.send("post has been added")
        }).catch(function (e) {
            res.send(e)
        })

    })

}
