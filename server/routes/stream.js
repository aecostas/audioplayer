const fs = require('fs');
const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const compose = require('compose-middleware').compose;

const filesystemRepository = require('../repositories/filesystem');
const lastfmRepository = require('../repositories/lastfm');
const initRepository = require('../repositories/init');

router.get('/', (req, res, next) => {
	next();
});

router.get('/:id', (req, res, next) => {
	let stream;

	// this function gets a nodejs stream and pipes it
	// to the http response. This stream will come from
	// an abstration layer that read the actual file from
	// the filesystem, d3, or any other remote storage

	stream = fs.createReadStream('./data/billiejean.mp3');
	stream.on('error', () => {
		// TODO: log to the logging system
		console.warn('error reading stream');
		next();
	});
	stream.on('end', () => {
		// TODO: 
	});
	stream.pipe(res);
});


module.exports = router;
