const mongoose = require('mongoose');
require('dotenv').config(); 

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successful Database Connection!');
    } catch (error) {
        console.error('Could not connect to MongoDB:', error.message);
        throw error;
    }
};


module.exports = { connectToDB };
