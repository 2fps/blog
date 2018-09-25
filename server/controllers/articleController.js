let Article = require('../models/articleModel');
let express = require('express');
let router = express.Router();

let tagDB = require('../dataDB/tagData');
let catalogDB = require('../dataDB/catalogData');

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

    // tags搜索
    if (params.hasOwnProperty('tags')) {
        filter.tags = params.tags;
    }

    // catalog搜索
    if (params.hasOwnProperty('catalogs')) {
        filter.catalogs = params.catalogs;
    }

    // 全局搜索，模糊匹配字符串
    if (params.hasOwnProperty('search')) {
        filter.name = new RegExp(params.search);
    }

    Article.find(filter).skip(from).limit(offset).exec(function(err, result) {
        let data = {};

        // 后面增加错误处理
        if (err) {
            return console.log(err);
        }
        data.list = result;

        // 查询总的数量
        Article.countDocuments(filter, function(cErr, count) {
            if (cErr) {
                return console.log(cErr);
            }
            data.count = count;
            res.json(data);
        });
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
    let ids = req.query.id,
        idArr = ids.split(','),     // 存放所有id
        code = -1;

    if (!idArr) {
        return console.log('数据error');
    }

    // 开始去删除数据
    Article.deleteMany({
        _id: {
            $in: idArr
        }
    }, function(err) {
        if (err) {
            code = 1;
        } else {
            code = 0;
        }
        res.json({
            code: code
        });
    });
});

// 新增文章
router.post('/', (req, res) => {
    let params = req.body.data,
        art = null;

    art = new Article({
        name: params.name,
        content: params.content,
        tags: params.tags,
        catalogs: params.catalogs,
        author: params.author,
        date: params.date,
        state: params.state
    });

    // 新增文章的标签和分类需要加一处理
    tagDB.addOne(params.tags);
    catalogDB.addOne(params.catalogs);

    art.save(function(err) {
        if (err) {
            return console.log(err);
        }
        res.json({
            code: 0
        });
    });
});

module.exports = router;