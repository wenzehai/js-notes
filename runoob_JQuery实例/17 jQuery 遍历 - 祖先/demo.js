//jQuery 遍历 - 祖先
//parent()方法，返回父元素
/*
 $(function() {
 $("span").parent().css({"color":"red","border":"2px solid red"});
 });
 */


//parents()方法，返回所有祖先元素，一直到html
/*
* $(function() {
 $("span").parents("ul").css({"color":"red","border":"2px solid red"});
 //可以通过给parents()方法设置参数来停止遍历，比方说上面的ul标签就是过滤
 });*
*
* */


//parentsUtil()方法，返回所有祖先元素，一直到你设置的那个参数
$(function() {
    $("span").parentsUntil(".ancestors").css({"color":"red","border":"2px solid red"});
    //
});

