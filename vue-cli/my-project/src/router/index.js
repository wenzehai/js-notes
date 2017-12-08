import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import User from '@/components/User'
import UserDetail from '@/components/UserDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children:[
        {
          path:':username/age/:age',
          name:'UserDetail',
          component: UserDetail
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
