const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    yearCreated: {
        type: Number,
        required: true
    }, 
    styleTitle: {
        type: String, 
        required: true
    },
    mediumDisplay: {
        type: String, 
        required: true
    },
    size: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Artwork", artworkSchema);