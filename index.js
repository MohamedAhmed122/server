//import express
const express = require("express");

// generate new express app
const app = express();

app.get('/',(req, res)=>{
    res.send({message: 'hi, there'})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);