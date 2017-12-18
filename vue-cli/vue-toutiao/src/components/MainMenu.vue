<template>
  <div id="mainMenu">
    <ul class="menu">
      <li>
        <router-link to="/home"><span class="icon home"></span><h6>首页</h6></router-link>
      </li>
      <li>
        <router-link to="/home"><span class="icon xigua"></span><h6>西瓜视频</h6></router-link>
      </li>
      <li>
        <router-link to="/home"><span class="icon weitoutiao"></span><h6>微头条</h6></router-link>
      </li>
      <li>
        <router-link to="/home"><span class="icon xiaoshipin"></span><h6>小视频</h6></router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style scoped>
  .menu {
    background: #f9f9f9;
    border-top: 1px solid #dcdcdc;
    position: relative;
    height: 1.17rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

  }

  .menu li {
    list-style: none;
    float: left;
    width: 2.5rem;
    font-size: 9px;
    text-align: center;
  }

  [data-dpr="2"] .menu li {
    font-size: 18px;
  }

  [data-dpr="3"] .menu li {
    font-size: 27px;
  }
  .menu li h6 {
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: #323232;
  }

  .icon {
    display: inline-block;
    width: 0.587rem;
    height: 0.587rem;

  }

  .home {
    background: url("../assets/img/menu_icon_home.png") no-repeat center center;
    -webkit-background-size: contain;
    background-size: contain;
  }

  .xigua {
    background: url("../assets/img/menu_icon_xigua.png") no-repeat center center;
    -webkit-background-size: contain;
    background-size: contain;
  }

  .weitoutiao {
    background: url("../assets/img/menu_icon_weitoutiao.png") no-repeat center center;
    -webkit-background-size: contain;
    background-size: contain;
  }

  .xiaoshipin {
    background: url("../assets/img/menu_icon_xiaoshipin.png") no-repeat center center;
    -webkit-background-size: contain;
    background-size: contain;
  }
</style>
