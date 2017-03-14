/*
* jquery有四中添加内容 的方法，append,prepend,after,before
* append() - 在被选元素的结尾插入内容
 prepend() - 在被选元素的开头插入内容
 after() - 在被选元素之后插入内容
 before() - 在被选元素之前插入内容*
*
* */


//下面展示append效果，用prepend添加新元素
$(function() {
    $("#btn1").click(function() {
        $("p").append("<b>追加文本</b>");
    });
    $("#btn2").click(function() {
        $("ol").prepend("<li>追加列表项</li>");
    });
});


//通过 append() 和 prepend() 方法添加若干新元素,在括号内放置变量，用逗号隔开；
function appendText() {
    var txt1 = "<p>文本。</p>"         //使用HTML标签创建文本
    var txt2 = $("#test").text("文本。")  //使用jquery创建文本
    var txt3 = document.createElement("p");
    txt3.innerHTML = "文本。";         //使用DOM创建文本text with DOM
    $("body").append(txt1,txt2,txt3);   //追加新元素
}


//通过after（）before（）两种方法添加元素
$(function() {
    $("#btn_after").click(function() {
        $("#test1").after("<p>zhihou</p>");
    });
    $("#btn_before").click(function() {
        $("#test1").before("<p>zhiqian</p>");
    });
});

//用after和before添加若干新元素

function afterText(){
    var txt1="<b>I </b>";                    // 使用 HTML 创建元素
    var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
    var txt3=document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML="jQuery!";
    $("#test2").after(txt1,txt2,txt3);          // 在图片后添加文本
}

