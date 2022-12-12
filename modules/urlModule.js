const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    urlName:{
        type: String,
        required: true,
        trim: true
    },
    urlLink:{
        type: String,
        required: true,
        trim: true
    }
});

//Model Creation

module.exports = mongoose.model("url",urlSchema);