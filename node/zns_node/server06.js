/*
POST 请求数据解析
POST数据比GET大得多
*/

const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res){

	//接收数据用，到时候重新拼起来,但是不是很好
	var str = '';

	//类似于事件，每当发生这个事件时就会执行这个函数
	//数据到达的时候发生一次，可以发生多次
	req.on('data',function(data){

		//拼起来
		str+=data;
	});
	
	//数据全部到达的时候执行一次
	req.on('end',function(){

		// console.log(str);

		var POST = querystring.parse(str);
		console.log(POST);

	});


}).listen(8080);

