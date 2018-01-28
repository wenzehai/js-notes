/*
* node express笔记
*
* res.send();相当于res.write(),只不过可以直接输出json
*
*
* */

const express = require('express');

let server = express();

server.use('/a.html',function(req,res){
    res.send('abc');
    res.end();
});

server.use('/b.html',function(req,res){
    res.send('123');
    res.end();
});



server.listen(8080);