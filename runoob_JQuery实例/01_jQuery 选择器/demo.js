/**
 * Created by Administrator on 2017/2/27 0027.
 */

//这个案例主要讲jquery中的选择器，点击button后段落会消失。

$(document).ready(function() {
    $("#pbtn").click(function() {
        $("p").hide();
    });
});



//下面的代码是用来展示id选择器的

$(document).ready(function() {
    $("#hbtn").click(function() {
        $("#header").hide();
    });
});

//下面的代码是用来展示类选择器的
$(function() {
    $("#pbtn_special").click(function() {
        $(".test").hide();
    });
});

//下面的代码是用来展示选取所有html元素的
$(function() {
    $("#btn_all").click(function(){
        $("*").hide();
    });
});

//下面的代码是用来展示用this选取html元素的
$(function() {
    $("#btn_this").click(function(){
        $(this).hide();
    });
});

//下面的代码是用来展示用p.test选取html元素的
$(function() {
    $("#btn_ptest").click(function() {
        $("p.test").hide();
    });
});

//下面的代码是用来展示用ul li:first选取html元素的，这里是选取第一个ul中的第一个li元素；
$(function() {
    $("#btn_ul_li_first").click(function() {
        $("ul li:first").hide();
    });
});

//下面的代码是用来展示用ul li:first-child选取html元素的，这里是选取每一个ul中的第一个li元素；
$(function() {
    $("#btn_ul_li_first_child").click(function() {
        $("ul li:first-child").hide();
    });
});

//下面的代码是用来展示用带有href属性选取html元素的
$(function() {
    $("#btn_href").click(function() {
        $("[href]").hide();
    });
});

//下面的代码是用来展示用属性为target="_blank"选取html元素的
$(function() {
    $("#btn_target_blank").click(function() {
        $("a[target='_blank']").hide();
    });
});

//下面的代码是用来展示用属性为target!="_blank"选取html元素的
$(function() {
    $("#btn_target_noblank").click(function() {
        $("a[target!='_blank']").hide();
    });
});

//	选取所有 type="button" 的 <input> 元素 和 <button> 元素
$(function() {
    $("#btn_disappear").click(function() {
        $(":button").hide();
    });
});


//表格奇数行特殊显示，第二段代码是偶数行特殊显示
$(function() {
    $("tr:even").css("background-color","yellow");
});
$(function() {
    $("tr:odd").css("background-color","red");
});
