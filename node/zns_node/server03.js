/*
数据请求方式
前台=>	form、ajax、jsonp
后台=>  一样

请求方式：
1.GET		数据在url中
2.POST		数据在消息体content里面


百度搜索，GET
登录注册，POST



*/

// GET请求数据
//1.引入模块
const http = require('http');

//2.创建服务器，监听端口
http.createServer(function(req,res){
	//获取前台请求数据

	// console.log(req.url);		// /?user=cool&pass=123

	//4.准备一个空数据盒子 
	var GET = {};

	//5.为了避免favicon引发问题，做判断
	if(req.url.indexOf('?') != -1){		//如果有问号

		//6.解析url，将数据转化出来
		var arr = req.url.split('?');
		//arr[0] => '/aaa'
		//arr[1] => 'user=cool&pass=123'

		//将地址存储起来，方便查看
		var url = arr[0];

		//console.log(arr[1]);		//会报错是因为/favicon.ico请求

		var arr2 = arr[1].split('&');
		//arr2 => ['user=cool','pass=123']

		for(var i = 0; i<arr2.length; i++){
			var arr3=arr2[i].split('=');
			//arr3[0] => 名字  ‘user'
			//arr3[1] => 数据  'blue'
			

			//7.将数据填入GET
			GET[arr3[0]] = arr3[1];	

		}
	}else {					//如果没有问号
		var url = req.url;
	}


	

	console.log(url, GET);
	res.end();

}).listen(8080);





