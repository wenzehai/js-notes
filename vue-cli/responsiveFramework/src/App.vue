<template>
  <div id="app">
    <div class="page-layout">
      <sidebar-component :active="sidebarOpened" />
      <div class="page-layout-inner">
        <header-component :openSidebar="openSidebar" :title="title" />
        <main>
          <div class="main-content">
            <el-row class="container">
              <router-view></router-view>
            </el-row>
          </div>
        </main>
      </div>
      <dimmer :active="obfuscatorActive" :closeSidebar="closeSidebar" />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Sidebar from './components/Sidebar.vue'
  import Dimmer from './components/Dimmer.vue'
  import { mapActions, mapState } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions(['handleResize', 'openSidebar', 'closeSidebar'])
  },
  computed: {
    ...mapState({
    sidebarOpened: state => {
        return state.ui.sidebarOpened
      },
      obfuscatorActive: state => {
        return state.ui.obfuscatorActive
      },
      title: state => {
        return state.route.meta.title
      }
    })
  },
  components: {
    'header-component': Header,
    'sidebar-component': Sidebar,
    Dimmer
  },
  created: function () {
    window.addEventListener('resize', this.handleResize)
  }
}
</script>

<style>
  body {
    font-family: '微软雅黑', sans-serif; }

  html, body {
    width: 100%;
    height: 100%; }

</style>
