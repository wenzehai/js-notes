/*
* cookie & session
*
*cookie:在浏览器保存一些数据，每次请求都会带过来
* 不安全，有容量限制
*
* 发送——res.cookie('user','wenzehai',{path:'/',maxAge:1000,signed:true})
*
*读取——cookie-parser   向上可以解析，能读底下，不能读上面
*server.use(cookieParser('wwwwww'));  //签名传入进去，进行解签
* 使用属性
*req.signedCookies
* req.cookies
*
* 删除cookie
* res.clearCookie(名字);
*
*
* session：保存在服务器的数据
* 安全，无限
*cookie-session
*
* */
const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

//读取cookie
server.use(cookieParser('wwwwww'));     //签名传入进去，进行解签
//cookie加密
server.use('/',function (req, res) {
    //发送cookie，现在没有加密
    // res.cookie('user','wenzehai');

    req.secret='wwwwww';    //设置秘钥
    res.cookie('user','haizeilamian',{signed:true});    //{signed:true}设置标记，签名，不能加密，可以防止篡改

    console.log(req.signedCookies);     //加密后的cookies
    console.log(req.cookies);           //没有加密的cookies



    res.send('ok');
});


server.listen(8080);
