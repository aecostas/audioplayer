const songs = require('../data/metainfo');

function lookupSong(req, res, next) {
	req.song = 'mysong';
	next();
}

function getSongs(req, res, next) {
	req.songs = songs;
	next();
}

module.exports = {
	lookupSong,
	getSongs
}
