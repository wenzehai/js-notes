<template>
  <div id="userInfo">
    <div class="content">
      <div class="header">
        <h2><img src="../assets/images/portrait.png" alt=""></h2>
        <div class="user-box"><a href="login_user.html">登录</a>/<a href="login_register.html">注册</a></div>
        <ul class="clearfix">
          <li>
            <span>0</span>
            <p>关注</p>
          </li>
          <li>
            <span>0</span>
            <p>粉丝</p>
          </li>
        </ul>
      </div>
      <div class="doclist">
        <ul>
          <li class="gk-text">
            <i></i>
            <p>公开博文</p>
            <b></b>
          </li>
          <li class="mm-text">
            <i></i>
            <p>私密博文</p>
            <b></b>
          </li>
          <li class="cg-text">
            <i></i>
            <p>草稿箱</p>
            <b></b>
          </li>
          <li class="sc-text">
            <i></i>
            <p>收藏夹</p>
            <b></b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .header {
    width: 100%;
    background: #9f9895;
    position: relative;
    text-align: center;
    padding: 30px 0;
  }
  .header h3 {
    margin-top: 30px;
  }
  .header img {
    width: 120px;
    height: 120px;
  }
  .header ul {
    position: relative;
    width: 70%;
    margin: 0 auto;
  }
  .header ul li{
    float: left;
    width: 50%;
    text-align: center;
  }


  /*列表部分*/
  .doclist {
    position: relative;
    width: 100%;
    background: #f5f5f5;
    padding-top:20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }
  .doclist ul {
    /*margin-top: 20px;*/
  }
  .doclist ul li{
    background: #FFFFFF;
    border-bottom: 1px solid #d4d4d4;
  }
  .doclist ul li p {
    display: inline-block;
    line-height:40px;
  }
  .doclist ul li i {
    display: inline-block;
    width: 40px;
    height: 40px;
    vertical-align: top;

  }
  .doclist ul li.gk-text i{
    background: url("../assets/images/article.png") no-repeat center center;
    background-size: 70%;
  }
  .doclist ul li.mm-text i{
    background: url("../assets/images/lock.png") no-repeat center center;
    background-size: 60%;
  }
  .doclist ul li.cg-text i{
    background: url("../assets/images/draft.png") no-repeat center center;
    background-size: 60%;
  }
  .doclist ul li.sc-text i{
    background: url("../assets/images/love.png") no-repeat center center;
    background-size: 60%;
  }

</style>
