
const express = require('express');
const app = express();

const routes = require('./routes/userRoutes.js');

// Middleware to parse incoming requests as JSON (optional, based on your needs)
app.use(express.json());

app.use('/', routes); 


const PORT = 3000;
app.listen(PORT, (error) =>{
    if(!error) console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else console.log("Error occurred, server can't start", error);
    }
);