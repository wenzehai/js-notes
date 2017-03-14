/**
 * Created by Administrator on 2017/2/27 0027.
 */
//下面这段代码展示段落点击时消失的事件
$(function() {
    $("#p_disappear").click(function() {
        $(this).hide();
    });
});

//下面这段代码展示段落双击时消失的事件
$(function() {
    $("#p_dblclick_disappear").dblclick(function() {
        $(this).hide();
    });
});


//下面这段代码展示mouseleave事件
/*
$(function() {
    $("#p_mouseleave").mouseleave(function() {
        alert("你的鼠标移出了段落！");
    });
});

 */

//下面这段代码展示mousedown事件，不区分左右键按下；
$(function() {
    $("#p_mousedown").mousedown(function() {
        alert("你的鼠标按下时弹窗");
    });
});


//下面这段代码展示hover事件，移入时触发一个函数，移出时触发另一个函数；注意，这两个
//函数互相并列，都放在hover里面
$(function () {
    $("#h2_hover").hover(
        function() {
        $("#h2_hover").css("background-color","yellow")
    },
        function() {
        $("#h2_hover").css("background-color","red")
    });
});

//下面这段代码展示focus事件,注意内部两个函数的位置关系不要乱掉了。
$(function() {
    $("input").focus(function() {
        $(this).css("background-color","#cccccc")
    });
    $("input").blur(function() {
        $(this).css("background-color","#ffffff");
    });
});