const express = require('express');
const app = express();
const router = require('./routes/auth');

app.use('/profile', router); // This means all routes inside `router` are prefixed with `/profile`

const port = 6000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



