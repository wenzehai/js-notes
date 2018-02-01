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
*jade中如果单标签元素包裹其他元素，都会报错
* jade中的所有的自定义标签都默认为双标签
*
*
* 单标签是html独有的，xml
*
* 让jade识别内容，而不是当做标签，这个元素就是|
*
* 大段代码输出，不用|，可以用.,代表所有下一级内容都会原样输出
*
* include引入文件 include a.js
*
* 嵌入变量 div 我的名字是：#{name}
*
* 通过传入json和arr，再将值赋给模板内的style和class，生成模板
*
*-后面接的代码
* -var a = 12;
* -var b=5;
* div结果是：#{a+b}
*
*
* div=arr[i]   将结果输出到div  <div>arr1</div>
* 循环
*-for(var i=0; i<arr1.length; i++)
*           div=arr[i]
*
*div!=content => <div><h2>你好</h2><div>ksjfkslfsjlkfj</div></div>            html转义输出
*
*if
*
*
* */
const jade = require('jade');
const fs = require('fs');


var str1 = jade.renderFile('./views/6.jade',{pretty:true,name:'zehai',
    json:{width:'200px',height:'200px',background:'red'},
    arr1:['aaa','bbbb','cccc','dddd']
});              //渲染文件

fs.writeFile('./build/2.html',str1,function (err) {
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})

