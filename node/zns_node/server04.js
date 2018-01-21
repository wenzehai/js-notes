const http = require('http');
const querystring = require('querystring');		//查询字符串模块

http.createServer(function(req,res){
	var GET = {};

	var arr = req.url.split('?');

	var url = arr[0];

	if(req.url.indexOf('?') != -1){

		GET = querystring.parse(arr[1]);		//将地址解析出来

	}

	console.log(url,GET);
	res.end();

}).listen(8080);