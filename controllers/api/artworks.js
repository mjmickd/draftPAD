const Art = require('../../models/artwork');
const CHICAGO_API_URL='https://api.artic.edu/api/v1/artworks';


module.exports={
    index,
    show,
    searchApi,
    addToFavorites,
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

async function searchApi(req,res) {
    try {
        const results = await fetch(`${CHICAGO_API_URL}?title=${req.query.q}`);
        const data = await results.json()
        res.json(data.data);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function addToFavorites(req,res) {
    try { 
        const artworkInDb = await Collection.exists({art: req.body.cocktailId})
        if(artworkInDb) {
            Art.findOne({artId: req.body.artId}, function(err, cocktail) {

                if (art.favorites.some(f => f.equals(req.user._id))) {
                    res.redirect('/c/landing');
                } else {
                    cocktail.favorites.push(req.user._id)
                    cocktail.save(function(err) { 
                        if (err) return res.redirect ('/cocktails/search');
                        res.redirect('/cocktails/landing');
                })
                }
            })
        } else {
            const cocktail = new Cocktail(req.body);
            cocktail.favorites.push(req.user._id)
            cocktail.save(function(err) { 
                if (err) return res.redirect ('/cocktails/search');
                res.redirect('/cocktails/landing');
            })
        }
    } catch(err) {
    }
}