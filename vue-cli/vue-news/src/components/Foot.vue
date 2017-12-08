<template>
  <div id="foot">
    <div class="foot-btn">
      <ul>
        <!--<li class="home active"><a href="#">首页</a></li>-->
        <!--<li class="write"><a href="#">发布</a></li>-->
        <!--<li class="my"><a href="#">我的</a></li>-->
        <router-link tag="li" class="home" to="/home"><a href="#">首页</a></router-link>
        <router-link tag="li" class="write" to="/write"><a href="#">发布</a></router-link>
        <router-link tag="li" class="my" to="/user-info"><a href="#">我的</a></router-link>
      </ul>
    </div>
  </div>
</template>
