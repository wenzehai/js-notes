// 引入express模块
const express = require('express');
const expressStatic = require('express-static');

//创建服务器
var server = express();

//GET方式获得请求并响应请求
server.get('/login',function (req, res) {

    //res.send()可以直接发送json数据
    res.send();

    //一样要结束响应
    res.end();

});


//监听端口
server.listen(8080);

//如果访问的是文件
//采用express-static中间件返回静态文件
server.use(expressStatic('./www'));