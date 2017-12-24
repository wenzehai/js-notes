/*
文件模块    fs
* 读取文件
* readFile          用异步的方式读取文件
*   fs.readFile(path,callBack)
*       path        文件路径
*       callBack    回调函数
*           参数1（err)
*                   null:读取文件成功
*                   对象：读取文件失败，对象里放的是错误信息
*           参数2（buffer)
*                   当读取文件失败的时候为undefined，成功的时候为一个Buffer对象
*                   调用toString()方法可以把二进制转化为字符串
*
* readFileSync   用同步的方式读取文件
*   fs.readFileSync(path,char)
*       path    文件路径
*       char    编码（如果省略的话返回一个Buffer对象）
*
* */

//引入
let fs = require('fs');


/*
//从fs对象身上调用readFile方法
fs.readFile('a.txt',function (err, buffer) {
    // console.log(err);               //读取成功为null
    // console.log(buffer);               //<Buffer e6 96 87 e6 b3 bd e6 b5 b7>二进制数据，存的就是你读取到的内容

    if(err){
        console.log('读取文件失败');
    }else {
        console.log(buffer.toString());
    }
});

console.log(1);             //异步的方式，会先出1，再出读取到的数据，到function那里就不管了
*/



//同步
let str = fs.readFileSync('a.txt','utf-8');             //当加上编码的时候，就自动转化为字符串了
//如果找不到文件，会报错，下面代码不执行。

console.log(str);