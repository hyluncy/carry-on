const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 

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

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next(); 
    }

    try {
        const saltRounds = 10; 
        this.password = await bcrypt.hash(this.password, saltRounds); 
        next(); 
    } catch(err) {
        next(err); 
    }
})

module.exports = mongoose.model('User', userSchema); 