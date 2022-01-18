const express = require("express");
const cors = require("cors");
const app = express()

const connect = require("./src/configs/db");

const albumController = require("./src/controller/album.controller");

app.use(express.json());
app.use(cors());

app.use("/album",albumController);

app.listen(3000,async() =>{
    await connect()
    console.log("Listening on port 3000");
});