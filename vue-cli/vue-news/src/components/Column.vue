<template>
  <div id="column">    <!-- id可以不加-->
    <div class="content mt40">
      <ul class="newsList">
        <li v-for="item in arr">
          <a href="#">
            <h2>{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        arr: []
      }
    },
    mounted: function () {
      //加载完毕时调用下面函数，加载数据
      this.fetchData();
    },
    methods: {
      fetchData() {
        let that = this;
        this.$http.get('src/data/follow.data').then(function (res) {
          that.arr = res.data;
        }).catch(function (err) {
          console.log('Home', err);
        })
      }
    }
  }

</script>
<style scoped>
  .mt40 {
    margin-top: 55px;
  }
</style>
