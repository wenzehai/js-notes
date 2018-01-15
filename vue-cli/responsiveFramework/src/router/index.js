import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../views/Dashboard'
import Post from '../views/Post'
import About from '../views/About'

Vue.use(Router)

// export default  router1 = new Router({
//   mode:'history',
//   routes: [
//     {
//       path: '/',
//       component: Dashboard,
//       meta: {
//         title: 'Dashboard'
//       }
//     }, {
//       path: '/post/:id',
//       component: Post,
//       meta: {
//         title: 'Post'
//       }
//     }, {
//       path: '/about',
//       component: About,
//       meta: {
//         title: 'About'
//       }
//     }
//   ]
// })
export const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: {
      title: 'Dashboard'
    }
  }, {
    path: '/post/:id',
    component: Post,
    meta: {
      title: 'Post'
    }
  }, {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  }
]

const router = new Router({ mode: 'history', routes });
console.log(router)
export default {
  router
}
