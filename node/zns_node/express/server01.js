/*
* node express笔记
*
* res.send();相当于res.write(),只不过可以直接输出json
* res.send({'a':12,'b':34});
*
* 3种方法
* .get('/',function(req,res){});            //负责接收用户的get请求
* .post('/',function(req,res){});           //负责接收用户的POST请求
* .use('/',function(req,res){});            //get和post都可以接收
*
*
*
*
* */

const express = require('express');

let server = express();

server.use('/a.html',function(req,res){
    res.send({'a':12,'b':34});
    res.end();
});

server.use('/b.html',function(req,res){
    res.send('123');
    res.end();
});



server.listen(8080);