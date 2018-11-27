
function lookupSong(req, res, next) {
	// TODO: search in last.fm API
	res.locals.songs = res.locals.songs.concat([]);
	next();
}

function getSongs(req, res, next) {
	// TODO: search in last.fm API
	res.locals.songs = res.locals.songs.concat([]);
	next();
}

module.exports = {
	lookupSong,
	getSongs
}
