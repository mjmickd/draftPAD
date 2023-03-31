const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    apiID: {
        type: String,
        required: true
    },
    artist: {
        type: String,
    },
    yearCreated: {
        type: Number,
    }, 
    styleTitle: {
        type: String, 
    },
    mediumDisplay: {
        type: String, 
    },
    size: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Artwork", artworkSchema);