let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = Mock.mock({
        "catalogs": [
            {
                "name": 'Web前端',
                "number|0-100": 10,
                "url": "@url()"
            }, {
                "name": 'Web后端',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": '日记',
                "number|0-20": 10,
                "url": "@url()"
            }
        ]
    });
    res.send(JSON.stringify(data));
});


module.exports = router;