var express = require('express');
var router = express.Router();

var filesystemRepository = require('../repositories/filesystem');

router.get('/', filesystemRepository.getSongs, (req, res, next) => {
	res.send(req.songs);
});

module.exports = router;
