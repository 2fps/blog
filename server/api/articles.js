let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = Mock.mock({
        "articles": [
            {
                "id": 0,
                "title": '@csentence()',
                "releaseTime": "@datetime",
                "number|0-100": 10,
                "catalogs": "Web前端",
                "commentsNum|1-100": 10,
                "viewsNum|0-100": 10,
                "likeNum|0-100": 10,
                // "content": "@cparagraph()",
                "summary": "@cparagraph(10)"
            }, {
                "id": 1,
                "title": '@csentence()',
                "releaseTime": "@datetime",
                "number|0-100": 10,
                "catalogs": "Web前端",
                "commentsNum|1-100": 10,
                "viewsNum|0-100": 10,
                "likeNum|0-100": 10,
                "summary": "@cparagraph(10)"
            }, {
                "id": 2,
                "title": '@csentence()',
                "releaseTime": "@datetime",
                "number|0-100": 10,
                "catalogs": "Web前端",
                "commentsNum|1-100": 10,
                "viewsNum|0-100": 10,
                "likeNum|0-100": 10,
                "summary": "@cparagraph(10)"
            }, {
                "id": 3,
                "title": '@csentence()',
                "releaseTime": "@datetime",
                "number|0-100": 10,
                "catalogs": "Web前端",
                "commentsNum|1-100": 10,
                "viewsNum|0-100": 10,
                "likeNum|0-100": 10,
                "summary": "@cparagraph(10)"
            }, {
                "id": 4,
                "title": '@csentence()',
                "releaseTime": "@datetime",
                "number|0-100": 10,
                "catalogs": "Web前端",
                "commentsNum|1-100": 10,
                "viewsNum|0-100": 10,
                "likeNum|0-100": 10,
                "summary": "@cparagraph(10)"
            }
        ]
    });
    res.send(JSON.stringify(data));
});


module.exports = router;