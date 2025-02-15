const express = require('express');
const app = express();
const router = require('./routes/auth');

app.use('/', router); // Use only one base route
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
