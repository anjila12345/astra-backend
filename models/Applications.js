const mongoose = require('mongoose')
const User = require('./User')
const postdetail = require('./Post')

const applicationsSchema = new mongoose.Schema({
    post_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'postdetail',
        trim: true,
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        trim: true,
    },
    citizenshipnumber: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    univerisity: {
        type: String,
        required: true,
    },
    studylevel: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

    workplace: {
        type: String,
        required: true,
    },
    descp: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    }

})

const applications = mongoose.model('applications', applicationsSchema)

module.exports = applications