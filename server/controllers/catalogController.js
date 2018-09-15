let Catalog = require('../models/catalogModel');
let express = require('express');
let router = express.Router();

// 获取分类目录信息
router.get('/', (req, res) => {
    let params = req.query,
        from = 0,
        offset = 10;
    
    if (0 !== Object.keys(params)) {
        from = params.from;
        offset = params.offset;
    }
    
    Catalog.find({}).skip(from).limit(offset).exec(function(err, result) {
        if (err) {
            return console.log(err);
        }

        res.json(result);
    });
});


// 获取分类目录长度
router.get('/length', (req, res) => {
    Catalog.estimatedDocumentCount((err, count) => {
        if (err) {
            return console.log(err);
        }

        res.json({
            count: count
        });
    })
});

// 新增分类目录数据
router.post('/', (req, res) => {
    let newName = req.body.name;

    // name唯一性校验
    Catalog.isExist(newName, function(err, count) {
        // 不存在则添加
        if (!count) {
            let newCatalog = new Catalog({
                name: req.body.name
            });
            // 保存
            newCatalog.save(function(err) {
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
                code: -1
            });
        }
    });
});

// 分类目录删除
router.delete('/', (req, res) => {
    let deleteNames = req.query.name.split(','),
        code = 0;

    Catalog.deleteMany({
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