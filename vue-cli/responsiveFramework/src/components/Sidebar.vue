<template>
  <div id="sidebar" :class="{'open': active}">
    <el-menu theme="light" router>
      <div class="logo-container">
        <img class="logo" src="https://vuejs.org/images/logo.png" />
      </div>
      <el-menu-item index="/">Dashboard</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          Categories
        </template>
        <el-menu-item-group title="JS Posts">
          <el-menu-item index="/post/1">Post #1</el-menu-item>
          <el-menu-item index="/post/2">Post #2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Python Posts">
          <el-menu-item index="/post/3">Post #3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">Archived Posts</template>
          <el-menu-item index="/post/4">Post #4</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/about">About</el-menu-item>
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

  html, body {
    width: 100%;
    height: 100%; }

  #sidebar {
    z-index: 5;
    width: 260px;
    border-right: 1px solid #dbe2e8;
    box-shadow: inset 0 0 0 0 #dbe2e8, 0 2px 1px 0 rgba(47, 61, 73, 0.05);
    height: 100%;
    visibility: visible !important;
    overflow-x: hidden;
    will-change: transform;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform;
    position: fixed; }
  #sidebar.open {
    z-index: 11111;
    transform: translate3d(0, 0, 0) !important; }
  @media only screen and (min-width: 481px) {
    #sidebar {
      z-index: 10000;
      transform: translate3d(-260px, 0, 0) !important; } }
  @media only screen and (max-width: 480px) {
    #sidebar {
      z-index: 10000;
      transform: translate3d(-260px, 0, 0) !important; } }
  @media only screen and (min-width: 1025px) {
    #sidebar {
      transform: translate3d(0, 0, 0) !important; } }
  #sidebar .el-menu {
    height: 100%;
    display: flex;
    flex-direction: column; }
  #sidebar .logo-container {
    text-align: center;
    width: 100%; }
  #sidebar .logo-container .logo {
    width: 215px;
    height: 215px; }
</style>
