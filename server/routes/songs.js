const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const compose = require('compose-middleware').compose

const filesystemRepository = require('../repositories/filesystem');
const lastfmRepository = require('../repositories/lastfm');
const initRepository = require('../repositories/init');

const lookups = compose([
	initRepository.lookupSong,
	filesystemRepository.lookupSong,
	lastfmRepository.lookupSong
]);

const lists = compose([
	initRepository.getSongs,
	filesystemRepository.getSongs,
	lastfmRepository.getSongs
])

router.get('/', lists, (req, res, next) => {
	res.send(res.locals.songs);
});

router.get('/:id', lookups, (req, res, next) => {
	if (res.locals.songs.length === 0) {
		next()
	} else {
		// future development should aggregate information about a song
		// from different sources in a common format
		res.send(res.locals.songs[0]);
	}
});


module.exports = router;
