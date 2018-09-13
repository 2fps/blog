module.exports = function(app){
    // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
    let config = require('../api/config');
    let tags = require('../controllers/tagController');
    let catalogs = require('../api/catalogs');
    let classify = require('../api/classify');
    let articles = require('../api/articles');

    app.use('/api/config', config);
    app.use('/api/tags', tags);
    app.use('/api/catalogs', catalogs);
    app.use('/api/classify', classify);
    app.use('/api/articles', articles);
};

