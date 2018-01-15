import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'
import Post from 'views/Post'
import About from 'views/About'
import Search from 'views/Search'
import Create from 'views/Create'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: {
      title: '控制面板'
    }
  }, {
    path: '/post/:id',
    component: Post,
    meta: {
      title: '菜单项一'
    }
  }, {
    path: '/search',
    component: Search,
    meta: {
      title: '搜索'
    }
  }, {
    path: '/create',
    component: Create,
    meta: {
      title: '新建'
    }
  }, {
    path: '/about',
    component: About,
    meta: {
      title: '关于我们'
    }
  }
]
export const router = new Router({ mode: 'history', routes })

// /:id
