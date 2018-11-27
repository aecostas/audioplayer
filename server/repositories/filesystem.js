const songs = require('../data/metainfo');

function lookupSong(req, res, next) {
	req.songs =  songs.filter(song => song.id === parseInt(req.params.id));;
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
