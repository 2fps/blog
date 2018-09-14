let express = require('express');
let router = express.Router();
let Tag = require('../models/tagModel');

router.get('/', (req, res) => {
    let params = req.query,
        from = 0,
        offset = 10;
    
    if (0 !== Object.keys(params)) {
        from = params.from;
        offset = params.offset;
    }
    
    Tag.find({}).skip(from).limit(offset).exec(function(err, result) {
        if (err) {
            return console.log(err);
        }

        res.json(result);
    });
});

router.get('/length', (req, res) => {
    Tag.estimatedDocumentCount((err, count) => {
        if (err) {
            return console.log(err);
        }

        res.json({
            count: count
        });
    })
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