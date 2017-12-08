import Vue from 'vue'
// import Mint from 'mint-ui'
import VueRouter from 'vue-router'
// import 'mint-ui/lib/style.css'
import App from './App.vue'
import routerConfig from './router/router.config'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
  mode:'history',
  routes: routerConfig
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
