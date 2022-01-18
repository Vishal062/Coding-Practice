const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("#url/playername");
}

module.exports = connect;