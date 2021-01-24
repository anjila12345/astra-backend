const mongoose = require('mongoose')
const User = require('./User')
const postdetail = require('./Post')

const applicationsSchema = new mongoose.Schema({
    post_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'postdetail',
        trim: true,
    },
   user_id:{
       type: mongoose.Schema.ObjectId,
       ref: 'User',
       trim: true,
   },
   citizenshipnumber:{
       type: String,
       required: true,
   },
   phone: {
       type: String,
       required: true,
   },
   email: {
       type: String,
       required: true,
   },
   cv:{
       type: String,
       required: true,
   }

   
}) 

const applications = mongoose.model('applications', applicationsSchema)

module.exports = applications