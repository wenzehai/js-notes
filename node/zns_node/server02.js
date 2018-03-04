/*
服务器优化，解决几个问题
1.不用case
2.不用重启服务器
3.文件返回

解决思路，通过server.js来操作磁盘文件，需要什么文件，直接把磁盘路径
返回出去。


文件操作命令
异步，多个操作可以同时尽进行，服务器多异步操作
同步，一个个来

readFile(文件名，回调函数（err,data）)
fs.readFile()		//读文件

writeFile(文件名，内容，回调函数（err）)
fs.writeFile()		//写文件



*/


// 1.引入http系统模块
var http = require('http');
//5.引入文件操作模块
var fs = require('fs');





//2.http新建一台服务器，每当有访问时，执行回调函数
//req代表请求，浏览器请求的信息
//res代表响应，服务器返回的信息
var server = http.createServer(function(req,res){
	//查看浏览器的请求地址，也就是请求了哪些东西
	console.log(req.url);		//  /a.html

	//通过url来区分浏览器请求的具体内容，再返回响应的内容
	// switch(req.url) {
	// 	case '/1.html':   				//这是个绝对路径
	// 		res.write('1111111');
	// 		break;
	// 	case '/2.html':   				
	// 		res.write('2222222');
	// 		break;
	// 	default:
	// 		res.write('404');
	// 		break;
	// }

	//需求：
	//req.url => '/更改滚动条样式.html'
	//读取=> './www/更改滚动条样式.html'
	//'./www'+req.url

	//6.开始操作文件
	var file_name = './www'+req.url;

	fs.readFile(file_name,function(err,data){	//注意，这里是异步操作，发送完readFile请求之后，就直接res.end()了，所以res.end()要放在回调函数里面。
		//判断读写情况
		if(err){
			console.log('404');
		}else{
			res.write(data);		//注意这里的data是对象
		}
		//7.结束操作
		res.end();
	});


	//4.向前台返回东西
	// res.write("abc");		//输出	
	
});



//3.监听端口
server.listen(8080);

/*//读取文件
fs.readFile('./www/aaa.txt',function(err,data) {
	 console.log(err);
	//err	找到对应的文件了，返回null；没有找到，通常会报错{ Error: ENOENT: no such file or directory, open 'C:\Users\Administrator\Desktop\node\aaa.txt'
	 console.log(data);
	//data  找到的文件中对应的二进制信息

	if(err){
		console.log('读取失败'+err);
	}else{
		console.log(data.toString());		//将二进制转化为字符
	}
})

//写文件
fs.writeFile("./www/aaa.txt","wenzehai",function(err){
	console.log(err);	
})

*/













