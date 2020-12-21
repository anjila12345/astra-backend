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
