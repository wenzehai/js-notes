<template>
  <div id="nav">
    <ul>
      <router-link to="/home" tag="li" active-class="active">
        <a href="javascript:;">首页</a>
      </router-link>
      <router-link to="/user" tag="li" active-class="active">
        <a href="javascript:;">栏目</a>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    name:'nav',
    data(){
      return {
        show: true
      }
    }

  }
</script>

<style scoped>
ul {
  list-style: none;

}
</style>
