<template>
  <div id="app">
    
      <siteNavView></siteNavView>
      <mainNavView></mainNavView>
        <router-view></router-view>
      <footerView></footerView>
  </div>
</template>

<script>
import siteNavView from "./components/siteNav.vue"
import mainNavView from "./components/MainNav.vue"
import footerView from "./components/siteFooter.vue"

export default {
  name: 'app',
  components: {
      siteNavView,mainNavView,footerView
    }
}
</script>

<style>
#app {
  padding-top: 105px;
  background: #f6f6f6;
  height: 100%;
}



</style>
