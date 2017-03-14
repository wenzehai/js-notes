//用remove（）方法移除元素和子元素内容
$(function() {
    $("#btn1").click(function() {
        $("#div1").remove();
    });
});

//用empty（）方法移除子元素内容
$(function() {
    $("#btn2").click(function() {
        $("#div2").empty();
    });
});

//通过给remove()方法添加参数，来过选择需要删除掉的元素
$(function() {
    $("#btn3").click(function() {
        $("p").remove(".italic");
    });
});
