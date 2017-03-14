//下面这段代码展示的fadeIn和fadeOut效果，先要有display:none;才有fadeIn
$(function() {
    $("#btn_fade").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn();
        $("#div3").fadeIn();
    });
    $("#btn_fadeOut").click(function() {
        $("#div1").fadeOut();
        $("#div2").fadeOut();
        $("#div3").fadeOut();
    });
});


//下面展示fadeToggle()效果；fade效果其实分为两部分，先变不透明度，然后再变display属性，突然消失；
$(function() {
    $("#btn_fadeToggle").click(function() {
        $("#div4").fadeToggle(500);
        $("#div5").fadeToggle("fast");
        $("#div6").fadeToggle("slow");
    });
});

//下面展示fadeTo()方法；
$(function() {
    $("#btn_fadeTo").click(function() {
        $("#div7").fadeTo(3000,0.15);
        $("#div8").fadeTo("fast",0.5);
        $("#div9").fadeTo("slow",0.8);
    });
});