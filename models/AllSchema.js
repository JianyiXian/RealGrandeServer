const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Create the house schema
const HouseSchema = new mongoose.Schema({
    "_id": Number,
    "address": String,
    "county": String,
    "description": String,
    "price": Number,
    "photo": String
})

const EnquirySchema = new mongoose.Schema({
    ename: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    remarks: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    house: {
        type: String
    }

})

const UserSchema = new mongoose.Schema({
    "name": {
        type: String,
        require: true
    },
    "email": {
        type: String,
        require: true,
        unique: true
    },
    "password": String,
    "gender": {
        type: String,
        enum: ['Male', 'Female', 'Rather Not to Say'],
        default: 'Rather Not to Say'
    },
    "role": {
        type: String,
        enum: ['customer', 'realtor'],
        default: 'customer'
    }
})

UserSchema.plugin(uniqueValidator);


// Use the studentSchema to create the students collection
const Houses = mongoose.model('House', HouseSchema);
const Users = mongoose.model('User', UserSchema);
const Enquiries = mongoose.model('Enquiry', EnquirySchema);

module.exports = { Houses, Users, Enquiries };