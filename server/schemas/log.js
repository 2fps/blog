let mongoose = require('mongoose');

let logSchema = new mongoose.Schema({
    date: {                 // 生成日志的时间
        type: Date,
        default: Date.now
    },
    content: String,        // 日志内容
    type: Number            // 日志分类
    /**
     * 数字具体含义未定义
     */
});


module.exports = logSchema;