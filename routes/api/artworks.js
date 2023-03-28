const express = require('express');
const router = express.Router();
const artworkCtrl = require('../../controllers/api/artworks');

//GET/ api/artworks (Get artwork from Database via id)
router.get('/', artworkCtrl.index)
//GET/ api/artworks (Get artwork from Database via id)


router.get('/search', artworkCtrl.searchApi )

module.exports = router; 