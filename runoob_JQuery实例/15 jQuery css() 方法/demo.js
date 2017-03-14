//返回 CSS 属性
$(function() {
    $("#btn1").click(function() {
        alert("背景颜色= " + $("p").css("background-color"));
    });
});

//设置 CSS 属性，并且设置多个属性.注意设置多个属性时，各个属性的排布方式；
$(function() {
    $("#btn2").click(function() {
        $("p").css({"background-color":"yellow","font-size":"40px"});
    });
});