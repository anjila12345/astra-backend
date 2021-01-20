const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    image:{
        type: String,
        required: false
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'agent',
        trim: true
    },
    title: {
        type: String,
        require: true,
        trim: true
    },

    description: {
        type: String,
        require: true
    },
    favourite:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
        uniqueItems: true
    }],
})
const post = mongoose.model('postdetail', postSchema)

module.exports = post