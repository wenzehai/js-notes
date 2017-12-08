import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'

export default [
  {
    path:'/home',
    component: Home
  },{
    path:'/detail',
    component: Detail
  },{
    path:'*',
    redirect: '/home'
  }
]
