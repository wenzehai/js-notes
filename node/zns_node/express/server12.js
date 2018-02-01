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
*jade里面的内容，空一格接着往后写
*
* style有两种写法
*div(style="width:200px;height: 200px;background:red;")                 //正常样式
 div(style={width:'200px',height:'200px',background:'red'})             //json，动态传参时可以用json
*
*class有两种写法
* div(class='aaa bbb cc')
*div(class=['aaa','bbb','ccc'])
*
*div.aaa        => <div class='aaa'></div>
* div#bbb          => <div id='bbb'></div>
*
*普通属性后面加json格式的属性串，不常用
* div&attributes({title:'aaa',id:'div'})
* div&attributes({title:'aaa',id:'div'})
*
*
* */
const jade = require('jade');
const fs = require('fs');


var str1 = jade.renderFile('./views/2.jade',{pretty:true});              //渲染文件

fs.writeFile('./build/2.html',str1,function (err) {
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})
