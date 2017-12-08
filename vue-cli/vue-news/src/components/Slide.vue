<template>
  <div id="slide">
    <div class="slide">
      <a href="#">
        <img src="../assets/images/img_1.jpg" alt="">
      </a>
    </div>

  </div>
</template>
<script>
  export default {
    mounted() {      //首页加载时加载一段代码
      //this.slider();        //调用slider()方法
    },
    mthods: {
      /*slider() {
        $(function () {
          var mySwipe = Swipe($('.banner')[0], {
            atuo: 2000,
            continuous: true,
            stopPropation: true,
            callback: function (index, element) {
              $('.banner ol li').removeClass('active');
              $('.banner ol li').eq(index).addClass('active');
            }
          });
        }
      }*/
    }
  }
</script>
