<template>
  <div id="article">
    <div class="content">
      <div class="header">
        <a href="#"><i onclick="window.history.go(-1)"></i></a>
      </div>
      <div class="main">
        <div class="hd">
          <p><img :src="articleData.author_face" alt=""><span class="category">艾瑞数据</span></p>
          <h3>{{articleData.title}}</h3>
          <span class="date">{{articleData.time | normalTime}}</span>
        </div>
        <div class="bd" v-html="articleData.content">
        </div>
        <div class="ft">
          <ul>
            <li><i></i><span>0</span></li>
            <li><i></i><span>0</span></li>
            <li><i></i><span>0</span></li>
            <li><i></i><span>0</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        articleData:{}          //注意，这里获取到的数据是一个json格式，因为只是取了数组中的一部分
      }
    },
    mounted() {
      //获取链接地址中的id
      let reg = /\/article\/(\d+)/;
      let id = this.$route.path.match(reg)[1];
//      alert(this.$route.path.match(reg)[1]);        //将链接地址中的id解析出来
//      console.log(this.$route.path)       //获取链接地址
      this.fetchData(id)
    },
    methods: {
      fetchData(id) {       //把文章id传给fetchData，就可拿到那篇文章的数据
        let that = this;
        this.$http.get('../src/data/article.data').then(function (res) {
          that.articleData = res.data[id-1];
        }).catch(function (err) {
          console.log('文章详情页', err);
        })
      }
    }
  }
</script>
<style>
  @import "../assets/css/conText.css";

  .bd p {
    margin-top: 1em;
    text-indent: 2em;
  }
</style>
