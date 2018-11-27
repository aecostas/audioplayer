const songs = require('../data/metainfo');

function lookupSong(req, res, next) {
	const selectSong = (song) => song.id === parseInt(req.params.id);

	res.locals.songs = res.locals.songs.concat(songs.filter(selectSong));
	next();
}

function getSongs(req, res, next) {
	res.locals.songs = res.locals.songs.concat(songs);
	next();
}

module.exports = {
	lookupSong,
	getSongs
}
