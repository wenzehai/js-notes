/*
* express
* cookie session
* get post
* 模板引擎
*
*express express-static body-parser cookie-parser cookie-session jade ejs
*
* body-parser只能解析数据，不能解析文件
*
*multer中间件，用来处理multipart/form-data
*
*
* */


const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');          //解析post数据
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const jade = require('jade');
const ejs = require('ejs');

var server = express();


server.listen(8080);



//1.解析cookie
server.use(cookieParser('shdjhfjshfkshfsjkhfsjdkfhj')); //签名



//2.使用session
var arr = [];
for(var i=0; i<100000; i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name:'zns_sess_id',keys:arr,maxAge:20*24*3600*1000 }));


//3.post数据
server.use(bodyParser.urlencoded({extended:false}));

//用户请求
server.use('/',function (req, res, next) {

    console.log(req.query,req.body,req.cookies,res.session);
    res.send('ok');
});

//4.static数据
server.use(expressStatic('./www'));



















