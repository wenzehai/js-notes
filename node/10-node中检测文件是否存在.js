/*
* 判断一个路径（文件）是否存在
* exists    异步的方式
*   fs.exists(path,callBack)
*       path        文件路径
*       callback    回调函数
*           参数（boolean)
*               true    文件存在
*               false   文件不存在
*
* existsSync    同步的方式
*   fs.existsSync(path)
*       path        文件路径
*
* */

let fs = require('fs');
/*fs.exists('91.txt',function (boolean) {
    console.log(boolean);               //true
    console.log(boolean);               //false     找不到文件的话，返回false
});*/

let result = fs.existsSync('9.txt');
console.log(result);                    //true有返回值

