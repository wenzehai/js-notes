/*
* 模板引擎
* jade——破坏式、侵入式、强依赖
*
* ejs——温和、非侵入式
*
*1.先下载一个jade
*
*jade.render('html');              //渲染字符串
*jade.renderFile('./views/1.jade',{pretty:true});              //渲染文件
*jade文件用缩进来搭建结构，有开头没有结尾，属性用括号括起来，逗号隔开
*
*
*
*
*
* */
const jade = require('jade');

var str = jade.render('html');              //渲染字符串
var str1 = jade.renderFile('./views/1.jade',{pretty:true});              //渲染文件

console.log(str1);                   //<html></html>
