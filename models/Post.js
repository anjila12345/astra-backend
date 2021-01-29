const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    image: {
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
    experience: {
        type: String,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    salary: {
        type: String,
        require: true
    },
    favourite: [{
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        uniqueItems: true
    }],
})
const post = mongoose.model('postdetail', postSchema)

module.exports = post