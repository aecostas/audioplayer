
function lookupSong(req, res, next) {
	res.locals.songs = [];
	next();
}

function getSongs(req, res, next) {
	res.locals.songs = [];
	next();
}

module.exports = {
	lookupSong,
	getSongs
}
