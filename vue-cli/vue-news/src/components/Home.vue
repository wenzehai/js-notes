<template>
  <div id="home">    <!-- id可以不加-->
    <div class="content">
      <SlideView></SlideView>
      <!--<div class="banner">
        <ul class="clearfix">
          <li><img src="./assets/images/img_1.jpg" alt="">
            <div class="text-box">
              <h2>还可以降低首付款健身房</h2>
              <p>刘德华11/文</p>
            </div>
          </li>
          <li><img src="./assets/images/img_2.jpg" alt="">
            <div class="text-box">
              <h2>还可以降低首付款健身房</h2>
              <p>刘德华11/文</p>
            </div>
          </li>
          <li><img src="./assets/images/img_3.jpg" alt="">
            <div class="text-box">
              <h2>还可以降低首付款健身房</h2>
              <p>刘德华11/文</p>
            </div>
          </li>
        </ul>
        <ol>
          <li class="active"></li>
          <li></li>
          <li></li>
        </ol>
      </div>-->

      <ul class="newsList">
        <li v-for="(item,index) in arr">
          <router-link :to="'/article/'+item.id">
            <h2>{{index}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  import SlideView from './Slide.vue'

  export default {
    data() {
      return {
        arr:[]
      }
    },
    mounted: function () {
      //加载完毕时调用下面函数，加载数据
      this.fetchData();
    },
    methods: {
      fetchData() {
        let that=this;
        this.$http.get('src/data/index.data').then(function (res) {
          that.arr = res.data;
        }).catch(function (err) {
          console.log('Home',err);
        })
      }
    },
    components: {
      SlideView
    }
  }

</script>
