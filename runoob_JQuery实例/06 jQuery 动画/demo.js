//下面这段代码展示animate()方法,left从0变动到250px;
$(function() {
    $("#btn_left250").click(function() {
        $("#left250").animate({left:'250px'},"slow");
    });
});


//animate操作多个属性
$(function() {
    $("#btn_more").click(function() {
        $("#left250").animate({left:'250px',opacity:'0.5', width:'200px',height: '200px'},"slow");
    });
});


/*
* 可以用 animate() 方法来操作所有 CSS 属性吗？
 是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
 同时，色彩动画并不包含在核心 jQuery 库中。
*
*
* */

//使用相对值
$(function() {
    $("#btn_more").click(function() {
        $("#left250").animate({left:'250px',opacity:'0.5', width:'200px',height:'toggle'},"slow");
    });
});


//下面代码展示队列功能，队列就是动画一个接一个来展示；
$(function() {
    $("#btn_duilie").click(function() {
        var duilie = $("#duilie");
        duilie.animate({height:'300px',opacity:'0.4'},"slow");
        duilie.animate({height:'300px',opacity:'0.8'},"slow");
        duilie.animate({height:'100px',opacity:'0.4'},"slow");
        duilie.animate({height:'100px',opacity:'0.8'},"slow");
    });
});

//往右边移动了 100 像素，然后增加文本的字号
$(function() {
    $("#btn_duilie1").click(function() {
        var duilie = $("#duilie1");
        duilie.animate({left:'100px'},"slow");
        duilie.animate({fontSize:'3em'},"slow");
    });
});