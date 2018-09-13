let mongoose = require('mongoose');

let visitorSchema = new mongoose.Schema({
    date: {                 // 访问者的时间
        type: Date,
        default: Date.now
    },
    ip: String,             // IP地址
    isIpv4: Boolean,        // 是否是ipv4
    isIpv6: Boolean,        // 是否是ipv6
    browser: String,        // 何种浏览器
    path: Array             // 都访问了哪些路径
    /**
     * ......等等
     */
});


module.exports = visitorSchema;