/*
写好的nodeJs文件需要在终端（控制台、命令行）中运行，node server.js。

cd 文件路径
clear 清除界面
ls 展开所有文件
d: 切换盘符 
tab 帮助补全命令（2.js ，输入2就可以了）

浏览器发出请求，服务端收到后在终端或浏览器显示相应的操作反馈

一台服务器可以跑很多服务，web，邮件，游戏等等，所以访问服务
时需要区分，解决方法是通过端口来区分。
访问地址中带上需访问端口，server.js中监听对应的端口，二者对应上。


*/
/*
// 1.引入http系统模块
var http = require('http');

//2.http新建一台服务器，每当有访问时，执行回调函数
//req代表请求，浏览器请求的信息
//res代表响应，服务器返回的信息
var server = http.createServer(function(req,res){
	console.log('有人来了');


	//4.向前台返回东西
	res.write("abc");		//输出
	res.end();				//5.输出完毕
});



//3.监听端口
server.listen(8080);

*/


// 1.引入http系统模块
var http = require('http');

//2.http新建一台服务器，每当有访问时，执行回调函数
//req代表请求，浏览器请求的信息
//res代表响应，服务器返回的信息
var server = http.createServer(function(req,res){
	//查看浏览器的请求地址，也就是请求了哪些东西
	console.log(req.url);		//  /a.html

	//通过url来区分浏览器请求的具体内容，再返回响应的内容
	switch(req.url) {
		case '/1.html':   				//这是个绝对路径
			res.write('1111111');
			break;
		case '/2.html':   				
			res.write('2222222');
			break;
		default:
			res.write('404');
			break;
	}


	//4.向前台返回东西
	res.write("abc");		//输出
	res.end();				//5.输出完毕
});



//3.监听端口
server.listen(8080);


//服务器优化，解决几个问题
//1.不用case
//2.不用重启服务器
//3.文件返回


