//width和height方法

$(function() {
    $("#btn1").click(function() {
        var txt = "";
        txt+= "div的宽度是： " + $("#div1").width() + "<br/>";
        txt+= "div的高度是： " + $("#div1").height();
        $("#div1").html(txt);
    });
});

//innerWidth()  innerHeight()方法
$(function() {
    $("#btn2").click(function() {
        var txt = "";
        txt+= "div的inner宽度是： " + $("#div2").innerWidth() + "<br/>";
        txt+= "div的inner高度是： " + $("#div2").innerHeight();
        $("#div2").html(txt);
    });
});


//jQuery outerWidth() 和 outerHeight() 方法
$(function() {
    $("#btn3").click(function() {
        var txt = "";
        txt+= "div的outer宽度是： " + $("#div3").outerWidth() + "<br/>";
        txt+= "div的outer高度是： " + $("#div3").outerHeight();
        $("#div3").html(txt);
    });
});