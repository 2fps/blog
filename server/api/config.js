let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = Mock.mock({
        'list|2': [{
            'name': "@name(1,2)",
            'admonition': '@cparagraph(1, 3)',
            'numOnePage': 10,
            "userImage":""
        }]
    });
    res.send(JSON.stringify(data));
});


module.exports = router;