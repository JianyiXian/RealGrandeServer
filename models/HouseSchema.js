const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "address": String,
    "county": String,
    "description": String,
    "price": Number,
    "photo": String
})

// Use the studentSchema to create the students collection
const houseData = mongoose.model('house', HouseSchema);

module.exports = houseData;