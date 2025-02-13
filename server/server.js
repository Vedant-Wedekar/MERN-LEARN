const express = require('express');

 const app = express();

 app.get("/",(req,res)=>{
    res.status(200).send('hello world ');
 })
const port = 6000 ; 
 app.listen(port,()=>{
     console.log(`server is running on port ${port}  `);
 })