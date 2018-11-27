const fs = require('fs');

streamFile = function(filename) {
	return fs.createReadStream(filename);
}

module.exports = {
	streamFile
}
