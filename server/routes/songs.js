var express = require('express');
var createError = require('http-errors');
var router = express.Router();

var filesystemRepository = require('../repositories/filesystem');

router.get('/', filesystemRepository.getSongs, (req, res, next) => {
	res.send(req.songs);
});

router.get('/:id', filesystemRepository.lookupSong, (req, res, next) => {
	if (req.songs.length === 0) {
		next()
	} else {
		// future development should aggregate information about a song
		// from different sources in a common format
		res.send(req.songs[0]);
	}
});


module.exports = router;
