/*
* 通过express来读取文件，需要借助中间件
*
*
* */


const express = require('express');
const expressStatic = require('express-static');

let server = express();

server.use(expressStatic('./www'));         //去哪里读文件访问路径里的文件是什么就访问对应的文件

server.listen('8081');