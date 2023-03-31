const express = require('express');
const router = express.Router();
const artworkCtrl = require('../../controllers/api/artworks');
//const ensureLoggedIn = require('../../config/ensureLoggedIn')

//GET/ api/artworks (Get artwork from Database via id)
router.get('/', artworkCtrl.index)
//GET/ api/artworks (Get artwork from the database and add to your collection)
//router.get('/profile', ensureLoggedIn, artworkCtrl.addToFavorites)
//GET/ api/artworks (Get artwork from Database via id)


router.get('/search', artworkCtrl.searchApi )

router.post('/', artworkCtrl.create)

//router.post('/profile', artworkCtrl.addToCollection)

module.exports = router; 