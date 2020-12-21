const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    like: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        uniqueItems: true
    }],
    comments: [{
        text: String,
        user: { type: Schema.Types.ObjectId, ref: 'User' }
    }],
},
    {
        timestamps: true
    }
);

var Posts = mongoose.model('post', postSchema);
module.exports = Posts;