<template>
  <div class="hello">
    <h1>我是新闻</h1>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <p>组件支持用户在具有路由功能的应用中（点击）导航。</p>
    <ul>
      <li v-for="(val,index) in news">{{val}}</li>
    </ul>
    <ol>
      <li><router-link to="/user/strive/age/10">Strive</router-link></li>
      <li><router-link to="/user/blue/age/25">Blue</router-link></li>
      <li><router-link to="/user/andy/age/26">Andy</router-link></li>
    </ol>
    <div>
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      news: ['新闻1','新闻2','新闻3','新闻4','新闻5']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
