//这段代码用来展示hide和show(speed,callback)方法,其中里面的1000数字代表速度，后面还可以加callback为隐藏货显示完成后所执行的函数名称
$(function(){
    $("#hide").click(function() {
        $("p").hide(1000);
    });
    $("#show").click(function() {
        $("p").show(2000);
    });
});



//通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。
$(function() {
    $("#toggle").click(function() {
        $("#p_toggle").toggle();
    });
});