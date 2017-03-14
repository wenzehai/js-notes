//遍历直接子元素
//$(function() {
//    $("div").children("p.1").css({"color":"red","border":"2px solid red"});
//    //children后面可以加参数进行过滤
//});

//遍历所有子元素
$(function() {
    $("div").find("span").css({"color":"red","border":"2px solid red"});
    //find后面可以加参数进行过滤，比方说div下面的所有span
});
