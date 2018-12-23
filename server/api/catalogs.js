let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = {
        data: [{
            "id": 23,
            "name": "Web前端",
            "alias": "web",
            "nums": 123
        }]
    };
    res.send(JSON.stringify(data));
});


module.exports = router;