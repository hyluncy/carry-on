const http = require('http'); 
const express = require('express'); 
const cors = require('cors');
const db = require('./config/database.js');
const userRoutes = require('./routes/user'); 

const app = express();  
const PORT = process.env.PORT || 3000; 

app.use(express.json());  
app.use(cors()); 

app.use('/api/users', userRoutes);

(async () => {
    await db.connectToDB(); 
    app.listen(PORT, () => {
        console.log(`Server running on: ${PORT}`);
    });
})();  


