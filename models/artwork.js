const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    name: {
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
    size: {
        type: String,
        required: true
    },
    typeOfArt: {
        type: String,
        required: true
    },
    available: {
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available'
    }, 
    // favorites: [{
    //     type:Schema.Types.ObjectId,
    //     ref: 'User'
    // }]
}, {
    timestamps: true
});

module.exports = mongoose.model("artwork", artworkSchema);