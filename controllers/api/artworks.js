const Art = require('../../models/artwork');
const CHICAGO_API_URL='https://api.artic.edu/api/v1/artworks';


module.exports={
    index,
    show,
    search
};

async function index(req, res) {
    try {
        const allArt = await Art.find({});
        res.json(allArt);
    } catch (err) {
        res.status(400).json(err);
    }
};

async function show(req, res) {
    console.log('Show is working')
}

// async function search(req,res) {
//     try {
//         const results = await fetch(`${CHICAGO_API_URL}${req.body.search}`);
//         const data = await results.json()
//         res.render('')
//     }
// }