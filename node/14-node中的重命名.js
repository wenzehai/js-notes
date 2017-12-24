/*
* 重命名文件
* rename        异步方式
*   fs.rename(oldPath,newPath,callBack)
*       oldPath     被命名的文件
*       newPath     要命成的名字
*       callBack    回调函数
*           参数(err)
*               null    命名成功
*               对象      命名不成功，对象里放的是错误信息
*
* renameSync        同步方式
*   fs.renameSync(oldPath,newPath)
*       oldPath     被命名的文件
*       newPath     要命成的名字
*
* */

let fs = require('fs');

/*fs.writeFile('13.txt','zehai',function (err) {
    if(err){
        console.log('创建文件失败');
    }else {
        console.log('创建文件成功');
    }
});*/

fs.rename('13.txt','hahaha.txt',function (err) {
    console.log(err);                           //null      命名成功
});
