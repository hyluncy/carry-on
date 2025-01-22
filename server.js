const http = require('http'); 
const express = require('express'); 
const db = require('./config/database.js');

const app = express();  
const PORT = process.env.PORT || 3000; 

app.use(express.json()); 
app.use(cors()); 

db.connectToDB();   // Connect to MongoDB

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
})