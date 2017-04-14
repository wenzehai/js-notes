/**
 * Created by wenzehai on 2017/2/27.
 */

/*
$(function() {
    alert(3);
});




*/

$(function() {
    //alert($('#box'));       //返回的jQuery对象
    //alert(document.getElementById('box'));      //返回的原生DOM对象
    alert($('#box').get(0));                //其中get是jquery中的方法，专门用来返回DOM对象的；后面的0参数代表了是第几个，如果是id就只有一个，如果是class就有可能有几个；
});