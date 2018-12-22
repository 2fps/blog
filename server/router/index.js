module.exports = function(app){
    let user = require('../api/config');
    // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
    let website = require('../api/config');
    let tags = require('../api/tags');
    let catalogs = require('../api/catalogs');
    // let classify = require('../api/classify');
    let articles = require('../api/articles');

    app.use('/api/user', user);
    app.use('/api/website', website);
    app.use('/api/tags', tags);
    app.use('/api/catalogs', catalogs);
    // app.use('/api/classify', classify);
    app.use('/api/articles', articles);
};

