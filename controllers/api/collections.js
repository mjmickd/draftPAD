 Collection = require('../../models/collection');
// const CHICAGO_API_URL = 'https://api.artic.edu/api/v1/artworks'





module.exports = {
   addArtToCollection,
   viewCollection, 
}

async function addArtToCollection(req,res) {
    try {
        const userCollection = await Collection.findOne({user: req.user._id});
        console.log(userCollection, "add to art collection")
        userCollection.myCollection.push(req.params.aid)
        await userCollection.save()
        res.json(userCollection);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
    
}

async function viewCollection(req, res) {
    try {
        const allCollection = await Collection.find({user: req.user});
        console.log(viewCollection)
        

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}

// async function addToFavorites(req,res) {
//     try { 
//         const artworkInDb = await Collection.exists({artId: req.body.artId})
//         if(artworkInDb) {
//             Art.findOne({artId: req.body.artId}, function(err, art) {

//                 if (art.favorites.some(f => f.equals(req.user._id))) {
//                     res.redirect('/');
//                 } else {
//                     cocktail.favorites.push(req.user._id)
//                     cocktail.save(function(err) { 
//                         if (err) return res.redirect ('/cocktails/search');
//                         res.redirect('/cocktails/landing');
//                 })
//                 }
//             })
//         } else {
//             const cocktail = new Cocktail(req.body);
//             cocktail.favorites.push(req.user._id)
//             cocktail.save(function(err) { 
//                 if (err) return res.redirect ('/cocktails/search');
//                 res.redirect('/cocktails/landing');
//             })
//         }
//     } catch(err) {
//     }
// }