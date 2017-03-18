function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    //循环所有列表，查找匹配项
    for (i = 0; i< li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.indexOf(filter)> -1) {
            li[i].style.display ="";
        } else {
            li[i].style.display = "none";
        }
    }
}