//下面这段代码展示SlideDown（）方法
$(function() {
    $("#flip").click(function() {
        $("#panel").slideDown();
    });
});


//下面这段代码展示SlideToggle（）方法
$(function() {
    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
    });
});
