/*
get解析数据
1.自己切
2.querystring
3.urlLib		最简单的方式



*/

const http = require('http');
const urlLib = require('url');		//url解析模块

http.createServer(function(req,res){

	var obj = urlLib.parse(req.url,true);

	var url = obj.pathname;
	var GET = obj.query;

	console.log(url,GET);
	res.end();

}).listen(8080);



/*
url模块

var obj = urlLib.parse("http://www.wenzehai.com/index?a=12&b=15",true);

console.log(obj.pathname, obj.query);


Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.wenzehai.com',
  port: null,
  hostname: 'www.wenzehai.com',
  hash: null,
  search: '?a=12&b=15',
  query: 'a=12&b=15',
  pathname: '/index',
  path: '/index?a=12&b=15',
  href: 'http://www.wenzehai.com/index?a=12&b=15' }


//带了参数true之后，query会被解析成一个对象
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.wenzehai.com',
  port: null,
  hostname: 'www.wenzehai.com',
  hash: null,
  search: '?a=12&b=15',
  query: { a: '12', b: '15' },
  pathname: '/index',
  path: '/index?a=12&b=15',
  href: 'http://www.wenzehai.com/index?a=12&b=15' }


*/