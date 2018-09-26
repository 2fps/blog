let Catalog = require('../models/catalogModel');

/**
 * 对catalog数据进行加一处理
 * @param {Array} names 需要加一更新的name（数据）
 */
exports.addOne = function(names) {
    Catalog.update({
        name: {
            $in: names
        }
    }, {
        $inc: {
            num: 1
        }
    }, function(err) {
        if (err) {
            return console.log(err);
        }
    })
};

exports.reduceOne = (names) => {
    Catalog.update({
        name: {
            $in: names
        }
    }, {
        $inc: {
            num: -1
        }
    }, function(err) {
        if (err) {
            return console.log(err);
        }
    });
};