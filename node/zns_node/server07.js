/*
登录注册功能
1.定义接口
接口：
/user?act=reg&user=aaa&pass=123456
		{"ok":false,"msg":"原因"}

/user?act=login&user=aaa&pass=123456
		{"ok":true,"msg":"原因"}

对文件的访问
http://www.wenzehai.com:8080/1.html
http://www.wenzehai.com:8080/ajax.js
http://www.wenzehai.com:8080/1.jpg
//对接口的访问
http://www.wenzehai.com:8080/user?act=reg&name=abc...	//这里请求的是一个接口



*/
//2.引入模块
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');		

var users = {};		//用一个json来代理数据库{"blue":"123","zhangsan":"456"} 一关闭文件，数据就消失，所以需要数据库

//3.创建服务器
var server = http.createServer(function (req,res) {
	//4.解析请求数据
	var str = '';
	req.on("data",function(data){
		str+=data;
	});
	req.on("end",function(){
		var obj = urlLib.parse(req.url,true);

		const url = obj.pathname;
		const GET = obj.query;
		const POST = querystring.parse(str);

		//5.要分析请求的内容的形式，先做区分
		//区分接口和文件，先笼统的认为访问user的都是接口，其他的都是文件
		if(url == '/user'){	//访问接口
			//6.接口有两种，一种注册，一种登录，还有错误的情况
			switch (GET.act) {
				case 'reg':
					//注册的时候发生的事情，进行注册验证
					//1.检查用户名是否已经有了
					if(users[GET.user]){	
						res.write('{"ok":false,"msg":"此用户已存在"}');
					}
					else {
						//2.插入users
						//要顺藤摸瓜，一步步去寻找，还有理解目标对象的数据格式。
						users[GET.user] = GET.pass;				//{"zhangsan":"123"}因为走到这一步，说明users[GET.user]不存在，此时GET.pass唯一，所以可以赋值进去，而不会替换掉。
						res.write('{"ok":"true","msg":"注册成功"}');
					}					
					break;
				case 'login':
					//1.检查用户是否存在
					if(users[GET.user] == null) {
						res.write('{"ok":false,"msg":"此用户不存在"}');
					}else if(users[GET.user]!=GET.pass){
						//2.检查用户密码
            			res.write('{"ok": false, "msg": "用户名或密码有误"}');
					} else {
						res.write('{"ok": true, "msg": "登录成功"}');
					}					
					break;
				default:
					res.write('{"ok":false,"msg":"未知的act"}');
			}
			//7.记得结束命令
			res.end();
		} else {	//访问文件
			//读取文件
			var file_name = './www' + url;
			fs.readFile(file_name,function(err,data){
				if(err){
					res.write('404');
				}else {
					res.write(data);
				}
				res.end();
			})
		}
		
	});
	

});

//3.监听端口
server.listen(8080);
