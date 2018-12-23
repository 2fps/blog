let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

// 获取个人配置信息
router.get('/', (req, res) => {
    var data = {
        error_code: 0,
        data: [{
            articleId: 123,  // 文章id
            title: "我是文章名",
            author: "作者名",
            publishTime: 22434, // 文章发布时间戳
            reg_time: "1436864169",
            classifyName: ["分类名称"],
            commentNums: 123,  // 评论数量
            readNums: 123,   // 阅读数量
            likeNums: 123,  // 点赞数量
            brief: "文章的简略内容"
        }]
    };
    res.send(JSON.stringify(data));
});


module.exports = router;