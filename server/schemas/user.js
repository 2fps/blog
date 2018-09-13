let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: String,       // 用户名
    email: String,          // 注册邮箱
    registerTime: {         // 注册时间
        type: Date,
        default: Date.now
    },
    password: String        // 密码
}, {
    versionKey: false
});

module.exports = module;