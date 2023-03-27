const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    artist:{
        type: String,
        required: true, 
    },
    yearCreated: {
        type: Number,
        required: true,
    }, 
})

module.exports = mongoose.model("artwork", artworkSchema);