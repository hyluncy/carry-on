const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 
const User = require('../models/user'); 

const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "10d" }); 
}
const registerUser = async(req, res) => {
    try {
        const { email, password, phoneNo, DOB, driversLicense } = req.body;
        const existingUser = await User.findOne({ email }); 

        if (existingUser) {
            return res.status(400).json('User already exists'); 
        }

        const user = await User.create({
            email,
            phoneNo, 
            password, 
            DOB, 
            driversLicense,
        }); 

        if (user) {
            res.status(201).json({
                email: user.email, 
                phoneNo: user.phoneNo, 
                DOB: user.DOB, 
                driversLicense: user.driversLicense,
                token: generateToken(user.email)
            }); 
        }
        else {
            res.status(400).json({ message: 'Invalid data' }); 
        }
    } catch (err) {
        console.errror(err); 
        res.status(500).json({ message: 'Server error'}); 
    }
}

module.exports = {
    registerUser,
}