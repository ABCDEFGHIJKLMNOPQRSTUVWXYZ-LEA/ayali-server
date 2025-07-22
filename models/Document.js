const mongoose = require('mongoose');
const documentSchema = new mongoose.Schema({
date:String,
by:{
        type: String,
        enum: ["אילי", "רבקה"]
    },
des:String
})
module.exports = documentSchema;