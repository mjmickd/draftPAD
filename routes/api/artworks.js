const express = require('express');
const router = express.Router();
const artworkCtrl = require('../../controllers/api/artworks');

router.get('/artworks', artworkCtrl.create);

module.exports = router; 