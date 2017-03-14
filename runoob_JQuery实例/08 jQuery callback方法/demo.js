//callback回调函数的使用，放在方法里，会在动画完成后执行；如果没有回调
//函数，则会在动画还没完前执行；

//有回调函数
$(function() {
    $("#btn1").click(function() {
        $("#p1").hide("slow",function() {
            alert("段落现在被隐藏了");
        });
    });
});

//没有回调函数
$(function() {
    $("#btn2").click(function() {
        $("#p2").hide("slow");
        alert("段落现在被隐藏了");
    });
});