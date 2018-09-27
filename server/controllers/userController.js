let User = require('../models/userModel');
let express = require('express');
let router = express.Router();
let crypto = require('crypto');

router.post('/', function (req, res) {
    let username = req.body.username,
        password = req.body.password,
        md5 = crypto.createHash("md5"),
        newPas = md5.update(password).digest("hex");

    User.findOne({
        username: username
    }, function (err, doc) {
        let code = 0;

        if (err) {
            console.log(err);
            
            return res.json({
                code: 5
            });
        }
        if (doc && doc.password === newPas) {
            // 密码正确，
            code = 6;
        } else {
            // 无该用户，提示密码或用户名错误
            code = 5;
        }
        return res.json({
            code: code
        });
    });
});

module.exports = router;