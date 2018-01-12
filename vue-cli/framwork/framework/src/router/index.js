import Vue from 'vue'
import Router from 'vue-router'
import HelloVue from '../components/Home.vue'
import Search from '../components/Search.vue'
import Create from '../components/Create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
