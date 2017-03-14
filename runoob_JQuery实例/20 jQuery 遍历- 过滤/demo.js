//下面的例子选取首个 <div> 元素内部的第一个 <p> 元素
//注意，如果没有div p，而仅仅有一个div，则会选择div本身
//$(function() {
//    $("div p").first().css("background-color","yellow");
//});

//下面的例子选取后一个 <div> 元素内部的最后一个 <p> 元素,他会选取后一个div中的p
//$(function() {
//    $("div p").last().css("background-color","yellow");
//});

//eq() 方法返回被选元素中带有指定索引号的元素。
//索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。下面的例子选取第二个 <p> 元素（索引号 1）：
//第一个p元素的index为0；
//$(function() {
//    $(".index p").eq(1).css("background-color", "yellow");
//});

//filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
//$(function() {
//    $("p").filter(".url").css("background-color","red");
//});

//not() 方法返回不匹配标准的所有元素。
$(function() {
    $("p").not(".url").css("background-color","red");
});












