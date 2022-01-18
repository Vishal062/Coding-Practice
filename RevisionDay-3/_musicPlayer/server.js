const express = require("express");
const app = express()

const connect = require("./src/configs/db");

app.use(express.json());

app.listen(3000,async() =>{
    await connect()
    console.log("Listening on port 3000");
});