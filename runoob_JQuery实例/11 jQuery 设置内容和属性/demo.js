//jQuery获取内容和属性
/*
$(function() {
    $("#btn1").click(function() {
        $("#test1").text("hello world!");
    });
    $("#btn2").click(function() {
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function() {
        $("#test3").val("baidu");
    });
});
*/


//设置回调函数
$(function() {

    $("#btn5").click(function(){
        $("#test5").text(function(i,origText){
            return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")";
        });
    });
    $("#btn4").click(function(){
        $("#test4").html(function(i,origText){
            return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")";
        });
    });
});