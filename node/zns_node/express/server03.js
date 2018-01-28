/*
* 登录注册
*
* 定义接口
 * /login?user=xxx&pass=xxx                 //必须是get方式的请求，要不然就没有数据
 * =>{ok:true/false,msg:原因}
*对不同的情况进行判断
*
*express中有一个req.query用于读取get中的数据，得到一个json对象{ user: 'zehai', pass: '123' }
*
*
* */

const express = require('express');
const expressStatic = require('express-static');

let server = express();

//假设用户的数据在json中
var users = {
    'blue':'123456',
    'zehai':'444555',
    'lisi':'7878987'
}

server.get('/login',function(req,res){
    //console.log(req.query);                         //{ user: 'zehai', pass: '123' }
    var user = req.query['user'];
    var pass = req.query['pass'];

    if(users[user]==null){
        res.send({'ok':false,'msg':'此用户不存在'});
    } else if (users[user] != pass){
        res.send({'ok':false,'msg':'密码错误'});
    } else {
        res.send({'ok':true,'msg':'成功'});
    }
    res.end();
});

//没有读取到login就默认为去读取文件
server.use(expressStatic('./www'));

server.listen(8080);