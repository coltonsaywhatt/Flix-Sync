const express = require('express');
const router = express.Router();
const tvshowsCtrl = require('../../controllers/api/tvshows');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/check-token
router.get('/airingToday', ensureLoggedIn, tvshowsCtrl.getAiringToday);
router.get('/onTv', ensureLoggedIn, tvshowsCtrl.getOnTv);
router.get('/popular', ensureLoggedIn, tvshowsCtrl.getPopular);
router.get('/topRated', ensureLoggedIn, tvshowsCtrl.getTopRated);

module.exports = router;