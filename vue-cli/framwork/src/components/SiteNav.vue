<div id="SiteNav">
    <div id="" class="siteNav">
      <ul>
        <li>
          <routerlink>登录</routerlink>
        </li>
        <li>
          <routerlink>登录</routerlink>
        </li>
        <li>
          <routerlink>帮助</routerlink>
        </li>
        <li>
          <routerlink>设置</routerlink>
        </li>
      </ul>
    </div>
    <p>{{message}}</p>
</div>


<script src="js/vue.js"></script>
<script>
    new Vue({
        el:'#app',
        data: {
            message: 'hello vue!'
        }
    });
</script>

<style>
.siteNav {
  background: #333;
  height: 30px;
}
</style>
