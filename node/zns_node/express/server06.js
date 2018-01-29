/*
* cookie & session
*
*cookie:在浏览器保存一些数据，每次请求都会带过来
* 不安全，有容量限制
*读取——cookie-parser   向上可以解析
* 发送——
*
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
server.use(cookieParser());

server.use('/',function (req, res) {
    console.log(req.cookies)        //引用了cookie-parser之后，会多一个cookies属性

    res.send('ok');
});

/*server.use('/',function (req, res) {

    //发送cookie
    res.cookie('user','cool',{path:'/aaa',maxAge:30*24*3600*1000});
    //往前台发送cookie，key和值;path代表在哪个目录下可以访问cookie，maxAge代表cookie保留时间长短

    res.send('ok');         //如果想访问成功，需要保留这段话
});*/


server.listen(8080);
