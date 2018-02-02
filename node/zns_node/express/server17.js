/*
* ejs
*输出一个变量<%= name %>
*<%= json.arr[0].name %>
*<%= 12+5 %>
*<%= 'jskdjfksdjf' %>
*
*写循环的时候，等号要去掉
*
* 自定义变量输出方式-
*<%
* var str = "<div></div>";
* %>
* <%- str %>
*
*include引入
*<% include ../a.txt %>
*
* 循环输出
*<% for(var i=0; i<5; i++) { %>
        <% include ../a.txt %>
    <% } %>
*
*inclue不是js中的语句，在写判断时需要用<%= %>断开
*inclue 不能引入变量，只能原生还原
*
* */

const ejs = require('ejs');

ejs.renderFile('./views/2.ejs',{
    json: {
    arr:[
        {user:'wenzehai',pass:'1234'},
        {user:'haizeilamian',pass:'4321'},
        {user:'zhangsanfeng',pass:'789456'}
        ],
    arr1:[
        {user:'wenzehai',pass:'1234'},
        {user:'haizeilamian',pass:'4321'},
        {user:'zhangsanfeng',pass:'789456'}
        ]
    }
},function (err, data) {
    console.log(data);
});
