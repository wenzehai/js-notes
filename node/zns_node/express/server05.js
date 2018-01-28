/*
*
*
*
*
* */



const express = require('express');
const bodyParser = require('body-parser');

let server = express();
//两步监听同一个地址，添加next参数，构成链式操作
server.use('/',function (req,res,next) {
    console.log(1);
    //调用next
    next();
});
server.use('/', function (req, res) {
    console.log(2);
});

//next参数构成链式操作



server.listen(8080)
