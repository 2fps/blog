let mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
    name: String,           // 文章标题
    content: String,        // 文章内容
    tags: Array,            // 文章包含的tag
    catalogs: Array,        // 文章包含的catalog
    author: String,         // 作者
    date: {
        type: Date,
        default: Date.now
    },
    commentNum: {           // 评论数
        type: Number,
        default: 0
    },
    viewNum: {              // 查看数
        type: Number,
        default: 0
    },
    likeNum: {              // 赞数
        type: Number,
        default: 0
    },
    comments: {             // 文章评论
        type: Array,
        default: []
    },
    state: 0                // 文章状态，0表示已发布，1表示草稿，2表示待审核
});


module.exports = articleSchema;