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
const ejs = require('ejs');

// var str = jade.render('html');              //渲染字符串
var str1 = ejs.renderFile('./views/1.ejs',{name:'张三'},function (err,data) {
    if(err){
        console.log('fail');
    }else{
        console.log('success');
        console.log(data);                   //<html></html>
    }
});              //渲染文件

// 输出
/*
* success
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0" />
    <title>weUI的引入</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/weui/1.1.2/style/weui.css" />
</head>

<body>
    我的名字是：张三

</body>

</html>

*
*
*
* */