const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId, ref:"User",
    },
    myCollection: [{type: Schema.Types.ObjectId, ref:"Artwork"}]
}, {
    timestamps: true
});



module.exports = mongoose.model("Collection", collectionSchema);