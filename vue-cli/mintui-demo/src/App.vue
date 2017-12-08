<template>
  <div id="app">
    <!--<HomeView></HomeView>-->
    <!--<router-view></router-view>-->
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
  </div>
</template>

<script>
  import HomeView from './components/Home.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HomeView
  }
}
</script>

<style>

</style>
