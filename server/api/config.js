let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = {
        data: {
            "siteName": "前端驿站",
            "subTitle": "我是副标题",
            "siteUrl": "http://127.0.0.1:8082/",
            "name": "zyt",
            "words": "我就是怕毛毛啊" ,
            "imgSrc": "http://www.zhuyuntao.cn/wp-content/uploads/2016/07/tx-1.jpg",
            "numInpage": 10, //一页多少个文章
            "CDNPath": "",
            "webRecord": "123456789"
        }
    };
    res.send(JSON.stringify(data));
});


module.exports = router;