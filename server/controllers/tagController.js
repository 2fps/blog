let express = require('express');
let router = express.Router();
let Tag = require('../models/tagModel');

router.get('/', (req, res) => {
    Tag.find({}, function(err, result) {
        if (err) {
            return console.log(err);
        }

        res.json(result);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    let newTag = new Tag({
        name: req.body.name
    });

    newTag.save(function(err) {
        let result = {};
        if (err) {
            result.code = 1;
        } else {
            result.code = 0;
        }

        res.json(result);
    });
});








module.exports = router;