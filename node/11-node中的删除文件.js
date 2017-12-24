/*
* 删除文件
*   unlink      异步方式
*       fs.unlink(path,callBack)
*           path    文件路径
*           callBack    回调函数
*               参数（err)
*                   null    删除文件成功
*                   对象      删除文件不成功，对象里放的是错误信息
*
*   unlinkSync      同步方式
*       fs.unlinkSync(path);
*           path        文件路径
*
* */
let fs = require('fs');
fs.writeFile('12.txt','zehai',function (err) {
    if(err){
        console.log('创建文件失败');
    }else {
        console.log('创建文件成功');
    }
});

/*
fs.unlink('12.txt',function (err) {
    console.log(err);
})
*/

let result = fs.unlinkSync('12.txt');
console.log(result);










