import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/'
import axios from 'axios'
import Loading from './components/Loading'
import filters from './filter/'


//过滤器里面添加东西
// Vue.filter(名字，函数)
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]))


//使用路由
Vue.use(VueRouter);
Vue.use(Loading);

//引入路由配置文件
import routerConfig from './router/router.config.js'


//配置路由
const  router = new VueRouter({
    mode: 'history',      //切换路径模式，变成history模式
    routes:routerConfig,
    scrollBehavior:()=>({y:0})    //滚动条滚动的行为，不加这个默认就回记忆原来滚动条的位置
});

//全局引入css
import './assets/css/base.css'
//require('./assets/css/base.css');     //全局引入，需要css-loader


//关于axios的配置
axios.interceptors.request.use(function (config) {      //配置发送请求信息
  store.dispatch('showLoading');
  return config;
  }
  ,function (error) {
  return Promise.reject(error);
});

//axios其他配置
// axios.defaults.baseURL = 'http://localhost:8080/';          //配置请求的根路径
//设置post默认头部
//axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

//把axios对象挂到Vue的原型对象上，方便调用
Vue.prototype.$http=axios;


axios.interceptors.response.use(function (response) {     // 配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
},
  function (error) {
    return Promise.reject(error);
  });




new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})


