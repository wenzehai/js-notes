/*
* 操作文件夹
*       创建文件夹
*           mkdir   异步方式
*               fs.mkdir(path,callBack)
*                   path    文件路径
*                   callBack    回调函数
*                       参数(err)
*                           null    创建成功
*                           对象      创建失败，对象里放的是错误信息
*
*          mkdirSync    同步方式
*               fs.mkdirSync(path)
*                   path        文件路径
*
*       删除文件夹
*           rmdir       异步方式
*               fs.rmdir(path,callBack)
*                   path    文件路径
*                   callBack    回调函数
*                       参数(err）
*                           null    删除成功
*                           对象     删除失败，对象里放的是错误信息
*           rmdirSync   同步方式
*               fs.rmdir(path)
*                   path    文件路径
*
*       读取文件夹
*           readdir         异步方式
*               fs.readdir(path,callBack)
*                   path    文件路径
*                   callBack    回调函数
*                       参数（err)
*                           null    读取成功
*                           对象      读取失败，对象里放的是错误信息
*                       参数（files)
*                           数组  当前文件夹里所有文件
*           readdirSync         同步方式
*               fs.readdir(path)
*                   path    文件路径
* */

let fs = require('fs');
/*fs.mkdir('15',function (err) {
    console.log(err);
});*/

/*let result = fs.mkdirSync('15');
console.log(result);   */         //undefined,成功，没有返回值

//
fs.rmdir('15',function (err) {
    console.log(err);
});
