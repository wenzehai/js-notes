<template>
  <div id="app">
    <!--<Loading></Loading>-->
    <h3>welcome vue-loading</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能点击" @click="clickOdd">
    <input type="button" value="点击异步" @click="clickAsync">          <!--异步请求-->


    <div class="show">
      现在的数字为：{{count}}，是{{isOdd}}                       <!--不建议{{$store.state.count}}-->
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from  'vuex'

export default {
  //这样子写起来很难维护，将所有methods进行打包--》mapActions(),管理所有行为
  //mapGetters()  用于获取数据，要不然需要一个个去一引入this.$route.xxxx
  //下面是原来的写法
  /*methods:{
    increment(){

    }
    increment1(){

    }
  }*/

  //mapActionss管理方式
  methods: mapActions([
    'increment','decrement','clickOdd','clickAsync'
  ]),
  computed:mapGetters([
    //获取数据，整个store都导出来了
    'count','isOdd'                                //建议获取count，它需要自己再去定义
  ])

  }
</script>

<style>

</style>
