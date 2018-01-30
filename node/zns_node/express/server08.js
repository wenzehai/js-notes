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
*中间件，一般不用加密
* cookie-encrypter用来给cookies加密
*
*
*
* session：保存在服务器的数据。不能独立存在，以利于cookie
* 安全，无限
*cookie-session
*1.读取
* 2.写入
*
*
*
*
*
* */
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

//session加密的keys密钥组,循环使用

//读取cookie
server.use(cookieParser('wwwwww'));     //签名传入进去，进行解签
//任何一个都需要使用,一般放在cookieParser后面
server.use(cookieSession({
    keys:['aaa','bbb','ccc']
}));

//cookie加密
server.use('/',function (req, res) {
   console.log(req.session);

    res.send('ok');
});


server.listen(8080);
