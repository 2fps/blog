let mongoose = require('mongoose');

let tagSchema = new mongoose.Schema({
    name: String,           // tag名称
    num: {                  // 包含该tag的文章数量
        type: Number,
        default: 0
    }
});


module.exports = tagSchema;