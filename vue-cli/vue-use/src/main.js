import Vue from 'vue'
import App from './App.vue'
// import Loading from './components/Loading/index.js'
import store from './store.js'


// Vue.use(Loading);



new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
