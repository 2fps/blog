module.exports = function(app){
    // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
    let config = require('../api/config');
    let tags = require('../api/tags');
    let subjectCatalog = require('../api/subjectCatalog');

    app.use('/api/config', config);
    app.use('/api/tags', tags);
    app.use('/api/subjectCatalog', subjectCatalog);
};

