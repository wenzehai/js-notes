<template>
  <div id="_siteNav">
    <el-header class="siteNav" height="30px">
      <div class="container">
        <ul class="menu">
          <li><router-link to="/home">登录</router-link></li>
          <li><router-link to="/home" >注册</router-link></li>
          <li><router-link to="/home" >帮助</router-link></li>
          <li><router-link to="/home" >设置</router-link></li>
        </ul>
      </div>
    </el-header>
  </div>
  
</template>




<script>
    export default {
      data(){
        return {
          message: 'hello '
        }
      }
    }
</script>

<style scoped>
.siteNav {
  position: fixed; 
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  background: #333;
}
.menu {
  float: right;
  position: relative;
  list-style: none;
  margin: 0;
}
.menu li {
  float: left;
  margin-right: 20px;
}
.menu li a {
  color: #fff;
  text-decoration: none;
  line-height: 30px;
  font-size: 12px;
}
</style>
