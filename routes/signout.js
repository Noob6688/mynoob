/**
 * Created by Array on 2017/1/10.
 */
var express = require('express');
var router = express.Router();

var checkLogin = require('../middewares/check').checkLogin;

//登出
router.get('/', checkLogin, function (req, res, next) {
    //清空session中用户信息
    req.session.user = null;
    req.flash('success','登出成功');
    //登出成功跳转页面
    res.redirect('/posts');
});

module.exports = router;