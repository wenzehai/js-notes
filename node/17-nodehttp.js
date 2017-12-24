/*
* http模块
* 1.引入模块
* let http = require('http');
*
* 2.创建服务器对象
* http.createServer(callBack);
*   callback触发请求事件（客户端请求了，就会触发callback
*       参数(req)     客户端请求的一些信息
*       参数(res)     服务端向客户端返回的响应信息
*
* 3.监听网络
*   server.listen(port,hostname,backlog,callback)
*       port    端口
*       hostname    主机名（IP地址)
*       backlog     允许请求的数量
*       callback    监听成功后的回调函数
*
* */
//搭建服务器
// 1.引入模块
let http = require('http');

//2.创建服务器对象
let server = http.createServer(function (req, res) {
    // console.log('客户端有电话了，快接吧');
    // console.log(req);
    console.log(res);
});

//3.监听网络
server.listen(8080,'localhost');


// 走通需要客户端向服务器发送给一个请求



