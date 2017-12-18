<template>
  <div id="app">
    <router-view></router-view>
    <MainMenuView></MainMenuView>
  </div>
</template>

<script>
  import NavView from './components/Nav.vue'
  import MainMenuView from './components/MainMenu.vue'


export default {
  name: 'app',
  components: {
    NavView,MainMenuView
  }
}
</script>

<style>


</style>



