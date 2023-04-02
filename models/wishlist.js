const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const wishlistSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId, ref:"User",
    },
    myWishlist: [{
        type: Schema.Types.ObjectId, ref:"Artwork"}]
}, {
    timestamps: true
});

module.exports = mongoose.model("Wishlist", wishlistSchema);

