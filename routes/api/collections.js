const express = require('express');
const router = express.Router();
const collectionCtrl = require('../../controllers/api/collections');
//const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.put('/:aid/artwork', collectionCtrl.addArtToCollection);

router.get('/', collectionCtrl.viewCollection);

module.exports = router;