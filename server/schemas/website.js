let mongoose = require('mongoose');

let websiteSchema = new mongoose.Schema({
    name: String,           // 站点名称
    subName: String,        // 副标题
    domain: String,         // 域名
    author: String,         // 作者名
    words: String,          // 
    profileUrl: String,     // 头像url
    numInpage: Number       // 一页多少篇文章
});


module.exports = websiteSchema;