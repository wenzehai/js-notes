//为元素添加样式
$(function() {
    $("#btn1").click(function() {
        $("h1,h2,p").addClass("blue");
        $("#div1_1").addClass("important blue");
    });
});

//移除元素样式
$(function() {
    $("#btn2").click(function() {
        $("h1,h2,p").removeClass("blue");
    });
});

//toggle元素样式
$(function() {
    $("#btn3").click(function() {
        $("h1,h2,p").toggleClass("blue");
    });
});