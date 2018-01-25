var http = require('http');
var fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var users = {};

var server = http.createServer(function(req,res){

    var str = '';

    req.on('data',function(data){
        str += data;
    });
    req.on('end',function () {
        var POST = querystring.parse(str);

        var obj = urlLib.parse(req.url,true);

        var url = obj.pathname;
        var GET = obj.query;

        if(url == '/login'){
            switch(GET.act) {
                case 'reg':
                   if(GET.user){
                       res.write('{"ok":false,"msg":"此用户已存在"}');
                   } else {
                       users[GET.user]=GET.pass;
                       res.write('{"ok":true,"msg":"注册成功"}');
                   }
                   break;
                case 'login':
                    if(users[GET.user] == null ){
                        res.write('{"ok":false,"msg":"此用户不存在"}');
                    } else if(uses[GET.user] != GET.pass) {
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                    } else {
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }
                 break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
            }
            res.end();
        }else {
            var file_name = './www' + url;
            fs.readFile(file_name,function (err, data) {
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            })
        }

    });
    res.end();
});

server.listen(8080);