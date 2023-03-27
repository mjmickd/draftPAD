const Art = require('../../models/artwork');
const CHICAGO_API_URL='https://api.artic.edu/api/v1/artworks';


module.exports={
    create
};

function create(req, res) {
    Art.find({})
    res.send("working");
}