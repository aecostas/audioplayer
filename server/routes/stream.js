const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const compose = require('compose-middleware').compose;

const filesystemStorage = require('../storage/filesystem');

router.get('/', (req, res, next) => {
	next();
});

router.get('/:id', (req, res, next) => {
	let stream;

	// this function gets a nodejs stream and pipes it
	// to the http response. This stream will come from
	// an abstration layer that read the actual file from
	// the filesystem, d3, or any other remote storage
	// First of all, the systems needs to know where is
	// the file. It may be a configuration option, if only
	// one storage systems is allowed, or something more dynamic

	// storage = getStorage()
	// stream = storage.streamFile(fileID)

	stream = filesystemStorage.streamFile('./data/billiejean.mp3');
	stream.on('error', () => {
		// TODO: log to the logging system
		console.warn('error reading stream');
		next();
	});
	stream.on('end', () => {
		// TODO: decide whether any action is needed here
	});
	stream.pipe(res);
});

module.exports = router;
