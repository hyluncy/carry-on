const { MongoClient } = require('mongodb'); 
require('dotenv').config(); 
const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri); 

const connectToDB = async() => {
    try { 
        await client.connect(); 

        console.log('Connected to the Database'); 
    } catch (err) {
        console.error('Error connecting to the database: ', err.message); 
    } 
}

module.exports = { connectToDB }; 