let mongoose = require('mongoose');

let catalogSchema = new mongoose.Schema({
    name: String,           // catalog名称
    num: Number             // 包含该catalog的文章数量
});


module.exports = catalogSchema;