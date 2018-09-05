var express = require('express');
var router = express.Router();

router.post('/user', function (req, res) {
	res.send('Hello World!');
});

module.exports = router;