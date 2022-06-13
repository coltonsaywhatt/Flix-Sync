const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/check-token
router.get('/nowPlaying', ensureLoggedIn, moviesCtrl.getNowPlaying);
router.get('/popular', ensureLoggedIn, moviesCtrl.getPopular);
router.get('/topRated', ensureLoggedIn, moviesCtrl.getTopRated);
router.get('/upcoming', ensureLoggedIn, moviesCtrl.getUpcoming);
router.post('/search', ensureLoggedIn, moviesCtrl.getSearch);
router.post('/details', ensureLoggedIn, moviesCtrl.getDetails);
router.post('/', ensureLoggedIn, moviesCtrl.addToWatchList);
router.get('/', ensureLoggedIn, moviesCtrl.getWatchList);

// router.delete('/:id', ensureLoggedIn, moviesCtrl.deleteMovie);

module.exports = router;