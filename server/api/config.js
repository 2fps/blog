let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = Mock.mock({
        'config': {
            'name': "@name(1,2)",
            'words': '@cparagraph(1, 3)',
            "imgSrc":"http://www.zhuyuntao.cn/wp-content/uploads/2016/07/tx-1.jpg"
        }
    });
    res.send(JSON.stringify(data));
});


module.exports = router;