const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true
    }, 

    phoneNo: { // Match regex used for phone number validation including international numbers
        type: String, 
        required: true,
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    }, 

    password: {
        type: String, 
        required: true
    }, 

    DOB: {
        type: Date, 
        required: true
    }, 

    driversLicense: {
        type: String, 
        required: true
    }
}); 

module.exports = mongoose.model('User', userSchema); 