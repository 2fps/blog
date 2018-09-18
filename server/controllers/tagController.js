let express = require('express');
let router = express.Router();
let Tag = require('../models/tagModel');

// 获取tags
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

// 获取tag长度
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

// 新增数据
router.post('/', (req, res) => {
    let newName = req.body.name;

    // name唯一性校验
    Tag.isExist(newName, function(err, count) {
        // 不存在则添加
        if (!count) {
            let newTag = new Tag({
                name: req.body.name
            });
            // 保存
            newTag.save(function(err) {
                let result = {};
                if (err) {
                    result.code = 1;
                } else {
                    result.code = 0;
                }
        
                res.json(result);
            });
        } else {
            // 提示已经存在了
            res.json({
                code: 2
            });
        }

    });

});


// tag删除
router.delete('/', (req, res) => {
    let deleteNames = req.query.name.split(','),
        code = 0;

    Tag.deleteMany({
        name: {
            $in: deleteNames
        }
    }, function(err) {
        if (err) {
            code = 1;
        } else {
            code = 0;
        }
    });
    res.json({
        code: code
    });
});

module.exports = router;