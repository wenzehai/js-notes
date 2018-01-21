//1.引入模块
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');		

//2.创建服务器
var server = http.createServer(function (req,res) {
	//4.根据不同类型的请求，做出不同类型的响应
	//GET
	var obj = urlLib.parse(req.url,true);

	var url = obj.pathname;
	const GET = obj.query;		//一般只读，所以定义成常量

	//POST
	var str = '';
	req.on('data',function(data){
		str+=data;
	})

	req.on('end',function(){
		var POST = querystring.parse(str);
		// console.log(url,GET,POST);
	})

	// 得到我们想要的最重要的三个数据
	/*
	url 	要什么
	GET 	get什么数据
	POST 	post什么数据
	*/



	//文件请求
	var file_name = './www'+url  			//请求的文件地址

	fs.readFile(file_name,function(err,data){
		if(err){
			res.write('404');
		}else{
			res.write(data);

		}
		//5.结束
		res.end();
	});

	


	

});

//3.监听端口
server.listen(8080);