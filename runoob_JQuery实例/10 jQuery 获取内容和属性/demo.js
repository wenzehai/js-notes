//jQuery获取内容和属性

//第一条显示纯文本；第二条显示文本带有html标签；

$(function() {
    $("#btn1").click(function() {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function() {
        alert("HTML: " + $("#test").html());
    });
});


//获取表单value
$(function () {
    $("#btn3").click(function() {
        alert("Value: " + $("#text").val());
    });
});



//获取属性
$(function() {
    $("#btn4").click(function() {
        alert("属性为： " + $("#test2").attr("href"));
    }) ;
});