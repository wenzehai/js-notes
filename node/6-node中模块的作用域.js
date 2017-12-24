/*
* 由于每个文件就是一个模块。每个模块都是一个单独的作用域。所以在一个模块里面定义的变量、函数、
* 类，都是私有的，对其他文件不可见
* 访问其他模块变量的方法
*       1、把变量作为global对象的一个属性（不推荐，它是一个全局变量）
*       2、把变量定义在module.exports上
*               模块内module变量代表当前模块。它是一个对象，他有一个exports属性时对外的接口。加载
*               某个模块，其实是加载该模块的module.exports属性
*               exports对象与module.exports指的是同一个对象
*               注意：这两个对象一定不要修改它
*
*       module里的属性意思
*       module.id   模块的识别符，通常是带有绝对路径的模块文件名
*       module.filename     模块的文件名，带有绝对路径。
*       module.loaded   返回一个布尔值，表示模块是否已经完成加载。
*       module.parent   返回一个对象，表示调用该模块的模块。
*       module.children     返回一个数组，表示该模块要用到的其他模块。
*       module.exports      表示模块对外输出的值。
*
* */

//require('./test.js');
//console.log(a);                 //报错，访问不到a

// console.log(name);                  //不推荐

let result = require('./test.js');
console.log(result);                            //{ name: 'hahahahahahahah' }

result.showName();                              //调用模块中的方法


console.log(module);


