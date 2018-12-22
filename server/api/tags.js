let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = {
        "error_code": 0,
        "data": [
            {
                "id": 1,
                "name": 'Electron',
                "alias": 'Electron',
                "nums": 10
            }
        ]
    };
    res.send(JSON.stringify(data));
});


module.exports = router;