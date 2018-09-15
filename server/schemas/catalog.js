let mongoose = require('mongoose');

let catalogSchema = new mongoose.Schema({
    name: String,           // catalog名称
    num: {                  // 包含该catalog的文章数量
        type: Number,
        default: 0
    }
});

// 判断当前name的是否有存在
catalogSchema.statics.isExist = function(name, fn) {
    return this.countDocuments({'name': name}, fn);
};


module.exports = catalogSchema;