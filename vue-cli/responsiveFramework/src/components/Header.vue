<template>
  <header>
    <el-menu theme="dark" mode="horizontal">
      <el-menu-item class="header-navicon" index = "1">
          <el-button type="text" @click="openSidebar">
            <i class="el-icon-tickets">menu</i>     <!--对字体图标做了修改，忽略掉google字体-->
          </el-button>
      </el-menu-item>
      <span class="header-title">{{title}}</span>
      <el-submenu class="header-menu" index="3">
        <template slot="title">
          <el-menu-item index="4-1"></el-menu-item>
          <el-menu-item index="4-2"></el-menu-item>
          <el-menu-item index="4-3"></el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </header>
</template>
<script>
export default {
  name:'Header',
  props:['openSidebar','title']
}
</script>
<style>
  body {
    font-family: '微软雅黑', sans-serif; }

  html, body {
    width: 100%;
    height: 100%; }

  header {
    z-index: 6;
    background: #fff;
    border-bottom: 1px solid #dbe2e8;
    box-shadow: inset 0 0 0 0 #dbe2e8, 0 2px 1px 0 rgba(47, 61, 73, 0.05);
    color: #2e3d49;
    position: fixed;
    transform-style: preserve-3d;
    will-change: transform;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform;
    width: 100%;
    height: 60px;
  }
  @media only screen and (min-width: 481px) {
    header {
      transform: translate3d(0, 0, 0) !important; } }
  @media only screen and (max-width: 480px) {
    header {
      transform: translate3d(0, 0, 0) !important; } }
  @media only screen and (min-width: 1025px) {
    header {
      width: calc(100% - 260px);
      transform: translate3d(260px, 0, 0) !important; } }
  header .el-menu {
    border-radius: 0; }
  header.no_sidebar {
    transform: translate3d(0, 0, 0) !important;
    width: 100%; }
  header .header-navicon {
    display: flex;
    align-items: center;
    align-content: center;
  }
  @media only screen and (min-width: 1025px) {
    header .header-navicon {
      display: none; }
  }
  header .header-navicon i {
    color: #fff !important;
    font-size: 2rem !important;
  }
  header .header-menu {
    float: right !important;
  }
  header .header-title {
    font-size: 24px;
    color: #fff;
    margin-left: 0;
    line-height: 60px;
  }

  @media only screen and (min-width: 1025px) {
    header .header-title {
      margin-left: 24px; }
  }































</style>
