module.exports = function(app){
    // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
    let website = require('../controllers/websiteController');
    let tags = require('../controllers/tagController');
    let catalogs = require('../controllers/catalogController');
    let classify = require('../api/classify');
    let articles = require('../controllers/articleController');

    app.use('/api/website', website);
    app.use('/api/tags', tags);
    app.use('/api/catalogs', catalogs);
    app.use('/api/classify', classify);
    app.use('/api/articles', articles);
};

