<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FootView></FootView>
  </div>
</template>

<script>
  import NavView from './components/Nav.vue'
  import HomeView from './components/Home.vue'
  import FootView from './components/Foot.vue'
  import Loading from './components/Loading/Loading.vue'

  import {mapGetters,mapActions} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      NavView,HomeView,FootView,Loading
    },
    computed:mapGetters([
      'headerShow','loading'
    ]),
    watch:{       //事件监听，只要通过路由做了任何变动，都会触发下面的函数
      /*$route(){
          alert(1);     //跳转页面都会弹出一个1
      }*/
      $route(to,from){            //to,from两个对象中有path就是路径
          //console.log(to.path);
          if(to.path == '/home' || to.path == '/follow' || to.path == '/column'){
            this.$store.dispatch('showHeader');
          }else {
            this.$store.dispatch('hideHeader');
          }
      }
    }

  }
</script>

<style >

  @import "./assets/css/index.css";

</style>
