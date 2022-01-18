const express = require("express");

const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    Album:{
        type:"string",
        require:true,
    },
    genre:{
        type:"string",
        require:true,
    },
    year:{
        type:"number",
        require:true,
    }
});

const Albums = mongoose.model("album",albumSchema);

module.exports = Albums;