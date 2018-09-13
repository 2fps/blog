let mongoose = require('mongoose'),
    DBUrl = 'mongodb://127.0.0.1:27017/data';

// 连接
mongoose.connect(DBUrl);

// 连接成功
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DBUrl);
});

// 连接异常
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

// 连接断开
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;