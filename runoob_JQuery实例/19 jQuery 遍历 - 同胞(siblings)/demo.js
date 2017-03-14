//siblings同胞遍历，可以给sibling设置参数来过滤
//$(function() {
//    $("h2").siblings("p").css({"color":"red","border":"2px solid red"});
//});

//jquery next（）方法，这个不能设置参数
//$(function() {
//    $("h2").next().css({"color":"red","border":"2px solid red"});
//});

//jquery nextAll（）方法，返回所有同胞元素，这个不能设置参数
//$(function() {
//    $("h2").nextAll().css({"color":"red","border":"2px solid red"});
//});

//jquery nextUntil（）方法，返回所有同胞元素，你设置参数的那一个是不会出现效果的
$(function() {
    $("h2").nextUntil("h5").css({"color":"red","border":"2px solid red"});
});
