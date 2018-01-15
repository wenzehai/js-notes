<template>
    <div id="sidebar" :class="{'open': active}">
    <el-menu theme="light" router>
        <div class="logo-container">
            <img class="logo" src="../../assets/img/templogo.png" />
        </div>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/search">查询</el-menu-item>
          <el-menu-item index="/create">新建</el-menu-item>
         <el-submenu index="1">
           <template slot="title">
               查询项目
           </template>
           <el-menu-item-group title="菜单头部">
             <el-menu-item index="/post/1">二级菜单#1</el-menu-item>
             <el-menu-item index="/post/2">二级菜单#2</el-menu-item>
           </el-menu-item-group>
           <el-menu-item-group title="菜单头部">
             <el-menu-item index="/post/3">二级菜单#3</el-menu-item>
           </el-menu-item-group>
           <el-submenu index="1-4">
             <template slot="title">三级菜单</template>
             <el-menu-item index="/post/4">四级菜单#4</el-menu-item>
           </el-submenu>
         </el-submenu>
         <el-menu-item index="/about">关于我们</el-menu-item>
       </el-menu>
   </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['active'],
  computed () {
      active: () => {
          console.log(this)
          return this.active
      }
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
