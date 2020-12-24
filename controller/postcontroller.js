const post = require("../models/Post")

//function for adding post
exports.addpost = (req, res) => {
    console.log(req.body.user_id)
    var mydata = new post(req.body);
    mydata.save().then(function () {
        res.send("post has been added")
    }).catch(function (e) {
        res.send(e)
    })

}
exports.findPostByUserId = async (req, res) => {
    console.log(req.params._id)
    post.find({ user_id: req.params._id }).populate('user_id').then(function (findAllpost) {
        res.send(findAllpost).catch(function (e) {
            res.send(e)
        })
    })
}

exports.deleteById = (function (req, res) {
    post.findByIdAndDelete(req.params.id).then(function () {
        res.send("deleted");
    }).catch(function () {
        res.send(e)
    })
});

exports.updatepost = (function (req, res) {
    post.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.send("updated")
    }).catch(function (e) {
        res.send(e)
    })
})

exports.getSingleFeed = (function (req, res) {
    console.log(req.params.id);

    post.findById(req.params.id).then(function (response) {
        console.log(response);

        res.send({ singleFeed: response })
    }).catch(function (e) {
        res.send(e)
    })
})

exports.findAllPost = (function (req, res, next) {
    post.find({})
        .then((user) => {
            res.statusCode = 200;
            res.setHeader('Content-type', 'applicaiton/json');
            res.json(users)
        }, (err) => next(err))
        .catch((err) => next(err));
});
