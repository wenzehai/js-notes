/* 模块化
*
* 1.系统模块：http、querystring、url
* 2.自定义模块
* 3、包管理器
* ————————————————————————
* 1.系统模块
* AssertTesting  断言测试，判断深度相等之类的。
* Buffer  二进制模块
* C/C++Addons   C/C++扩展，将一些 C/C++的函数打入nodejs中
* Child Processes  子进程
* Cluster 进程
* Crypto  加密 密码用户名加密，类似于做MD5加密后再放入数据库
* DNS   域名解析
* Errors  nodejs中可能跑出的错误
* Events  事件
* Net  进行网络操作，例如发送邮件
* OS  跟操作系统交互
* Path  处理文件路径用，例如返回目录名字，文件扩展名等。
* Process  进程信息，配合cluster使用
* REPL  nodejs的命令行
* stream  流操作，一点点读入内存，一点点发送
*         readFile，全部读入内存，整体发送，效率不高。
* Timer  定时器
* TTY  命令行
* UDP/Datagram UDP协议
* util 工具汇总
* V8 V8引擎类的信息
* VM 虚拟机
* ZLIB 压缩
*
*————————————————————————
* npm
*常用命令
* npm install xxxx
* npm uninstall xxxx
*
*上传自己的npm包
* 1.注册
* 2.npm login
* Username: xxx你的用户名
* Password: 你的密码
* Email: 你的邮箱
*
* 3.node whoami             //找出用户名
*
* 4.node init               //初始化信息
* 填写package.json信息
*
* 5.npm publish
*
*
*6.当修改了文件，需要提交时(覆盖原来的版本)，仍然是npm publish ，只不过需要更新版本号，否则报错
*
*7.更新文件updata
*
* 8.npm unpublish 删除发布
* 确认删除 --force
*  此时，版本回滚到上一个版本。如果要全部删除，需要一个个删除
*
*
*提交自己的模块
*
*
*
*
*
*/

//写个自己的模块
//文件名为定义好的main入口文件名

exports.sum = function () {
    var res = 0;
    for(var i = 0; i < arguments.length; i++ ) {
        res+= arguments[i];
    }
    return res;

}
exports.div = function (a, b) {
    return a/b;
}


//那边引用
const mode = require('index');

console.log(mode.sum(14,57,12,32));

