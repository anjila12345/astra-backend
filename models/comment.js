const mongoose = require('mongoose')
const comment = mongoose.model('comment', {

    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        trim: true
    },
    comment: {
        type: String,
        require: true,
        trim: true
    },
    post_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'postdetail'
    }

})

module.exports = comment