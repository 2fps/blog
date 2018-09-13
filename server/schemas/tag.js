let mongoose = require('mongoose');

let tagSchema = new mongoose.Schema({
    name: String,           // tag名称
    num: Number             // 包含该tag的文章数量
});


module.exports = tagSchema;