/*
* //GET
server.get('/',function (req, res) {
    console.log(req.query);
});
*
*
*
* //post
*
*
const express = require('express');
const bodyParser = require('body-parser');

let server = express();

//POST需要借助一个body-parser
server.use(bodyParser.urlencoded({}));

//GET
server.use('/',function (req, res) {
    console.log(req.body);
});

server.listen(8080);

//req.query     容纳GET数据
//req.body      容纳POST数据，不过先要到前面处理一下

body-parser有两个参数
extended:false,                    //扩展模式，一般没什么用
limit:  2*1024*1024               //限制


*
* 链式操作
* 
*
*
*
*
*
*
* */


const express = require('express');
const bodyParser = require('body-parser');

let server = express();

//POST需要借助一个body-parser
server.use(bodyParser.urlencoded({
    extended:false,                    //扩展模式，一般没什么用
    limit:  2*1024*1024               //限制
}));

//GET
server.use('/',function (req, res) {
    console.log(req.body);
});

server.listen(8080)

;