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
    let newName = req.body.name;

    Tag.isExist(newName, function(err, count) {
        // 不存在则添加
        if (!count) {
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
        } else {
            // 提示已经存在了
            res.json({
                code: -1
            });
        }

    });

});


// tag删除
router.delete('/', (req, res) => {
    let params = req.query;

    Tag.isExist(params.name, function(err, count) {
        let code = 0;

        if (count) {
            // 有则删除
            Tag.remove({
                name: params.name
            }, function(err) {
                if (err) {
                    code = 1;
                } else {
                    code = 0;
                }
            })
        } else {
            // 无此数据
            code = 3;
        }
        res.json({
            code: code
        });
    });
})







module.exports = router;