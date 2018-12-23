let express = require('express');
let router = express.Router();
let Mock = require('mockjs');
var url = require('url');

// 文章简略信息
router.get('/', (req, res) => {
    let params = url.parse(req.url, true).query;
    console.log(params);
    if (params.articleId) {
        return res.send(JSON.stringify({
            error_code: 0,
            data: {
                articleId: params.articleId,
                title: "第一篇文章",
                author: "作者名",
                publishTime: 22434, // 文章发布时间戳
                reg_time: "1436864169",
                classifyName: ["分类名称"],
                commentNums: 123,  // 评论数量
                readNums: 123,   // 阅读数量
                likeNums: 123,  // 点赞数量
                contents: '11111111111111111'
            }
        }));
    }
    var data = {
        error_code: 0,
        data: [{
            articleId: 23,  // 文章id
            title: "第一篇文章",
            author: "作者名",
            publishTime: 22434, // 文章发布时间戳
            reg_time: "1436864169",
            classifyName: ["分类名称"],
            commentNums: 123,  // 评论数量
            readNums: 123,   // 阅读数量
            likeNums: 123,  // 点赞数量
            brief: "文章的简略内容"
        }, {
            articleId: 100,  // 文章id
            title: "第二篇文章",
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