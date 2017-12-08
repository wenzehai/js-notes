<template>
  <div class="hello">
    <h1>我是用户{{$route.params}}</h1>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'username',
  data () {
    return {
      news: ['新闻1','新闻2','新闻3','新闻4','新闻5']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
