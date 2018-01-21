
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import App from 'components/App' // require components using webpack alias
import { router } from './router' // Vue Router
import store from './store' // Vuex store
import 'element-ui/lib/theme-default/index.css'     // 饿了么基础样式
import 'normalize.css' // 浏览器样式重置
import 'styles/index.scss' // 全局基础样式

sync(store, router)
Vue.use(ElementUI)

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')

// 原来框架中的代码，注释后没有影响，暂时先保留
// enable progressive web app support (with offline-plugin)
// if (process.env.NODE_ENV === 'production') {
//   require('./pwa')
// }

// 原来框架中的代码，注释后没有影响，暂时先保留
// if (module.hot) {
//   module.hot.accept()
// }
