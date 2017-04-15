/**
 * Created by 文泽海 on 2017/4/15.
 */

//清除数据
document.getElementById("clear").addEventListener("click",function() {
    document.getElementById("display").value = "";
});

//将取到的值传递给输出框
function get(value) {
    document.getElementById("display").value += value;
}

//计算
function calculates() {
    var result = 0;
    result = document.getElementById("display").value;
    document.getElementById("display").value = "";
    document.getElementById("display").value = eval(result);
}