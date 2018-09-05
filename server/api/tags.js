let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = Mock.mock({
        "tags": [
            {
                "name": 'Electron',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": 'jQuery',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": 'HTML5',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": 'tips',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": '工具',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": '浏览器',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": '设计模式',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": '内存泄漏',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": '源码解析',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "name": '算法',
                "number|0-20": 10,
                "url": "@url()"
            }
        ]
    });
    res.send(JSON.stringify(data));
});


module.exports = router;