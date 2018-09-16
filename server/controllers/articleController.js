let Article = require('../models/articleModel');
let express = require('express');
let router = express.Router();

// 获取文章
router.get('/', (req, res) => {
    let params = req.query,
        from = 0,
        offset = 10,
        filter = {};     // 当前文章的状态
    
    if (0 !== Object.keys(params)) {
        from = params.from;
        offset = params.offset;
    }

    // 是查询全部还是其他状态下的文章
    if (params.hasOwnProperty('state')) {
        filter.state = params.state;
    }

    Article.find(filter).skip(from).limit(offset).exec(function(err, result) {
        if (err) {
            return console.log(err);
        }

        res.json(result);
    });
});

// 获取对应条件下的文章数量
router.get('/length', (req, res) => {
    let filter = {};

    if (params.hasOwnProperty('state')) {
        filter.state = params.state;
    }

    Article.estimatedDocumentCount(filter, (err, count) => {
        if (err) {
            return console.log(err);
        }

        res.json({
            count: count
        });
    })
});

// 文章删除
router.delete('/', (req, res) => {

});

module.exports = router;