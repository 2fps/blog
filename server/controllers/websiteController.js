let Website = require('../models/websiteModel');
let express = require('express');
let router = express.Router();

// 获取web站点配置信息
router.get('/', (req, res) => {
    Website.findOne({}, function(err, doc) {
        if (err) {
            return console.log(err);
        }
        res.json(doc);
    });
});

// 更新web站点信息
router.put('/', (req, res) => {
    let params = req.query;

    Website.updateOne({}, params, function(err, doc) {
        if (err) {
            return console.log(err);
        }
        res.json({
            code: 0
        });
    });
});

module.exports = router;