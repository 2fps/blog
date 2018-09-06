let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = Mock.mock({
        "classify": [
            {
                "id": '2018年9月',
                "name": '2018年9月',
                "number|0-100": 10,
                "url": "@url()"
            }, {
                "id": '2018年8月',
                "name": '2018年8月',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "id": '2018年7月',
                "name": '2018年7月',
                "number|0-20": 10,
                "url": "@url()"
            }, {
                "id": '2018年6月',
                "name": '2018年6月',
                "number|0-20": 10,
                "url": "@url()"
            }
        ]
    });
    res.send(JSON.stringify(data));
});


module.exports = router;