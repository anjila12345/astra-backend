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
        require: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
    },
    univerisity: {
        type: String,
        require: true,
        trim: true
    },
    studylevel: {
        type: String,
        require: true,
        trim: true
    },
    year: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    },

    workplace: {
        type: String,
        require: true,
        trim: true
    },
    descp: {
        type: String,
        require: true,
        trim: true
    },
    start: {
        type: String,
        require: true,
        trim: true
    },
    end: {
        type: String,
        require: true,
        trim: true
    }

})

const applications = mongoose.model('applications', applicationsSchema)

module.exports = applications