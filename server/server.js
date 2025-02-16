require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/auth');
// const mongoose = require('mongoose');
const connectDB = require('./utils/db');
app.use(express.json());

app.use('/', router); // Use only one base route
const port = 4000;


connectDB().then(() => {
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    
});

