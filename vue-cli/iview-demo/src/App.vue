<template>
  <div id="app">
    <div class="layout">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
          </MenuItem>
        </div>
      </Menu>
      <Menu mode="horizontal" active-name="1">
        <div class="layout-assistant">
          <MenuItem name="1">选项1</MenuItem>
          <MenuItem name="2">选项2</MenuItem>
          <MenuItem name="3">选项3</MenuItem>
        </div>
      </Menu>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="#">首页</BreadcrumbItem>
          <BreadcrumbItem href="#">项目</BreadcrumbItem>
          <BreadcrumbItem>IView</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">内容部分</div>
      </div>
      <div class="layout-copy">
        2011-2016 &copy; TalkingData
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    margin-right: 20px;
    background: #5b6270;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav {
    background: pink;
    width: 420px;
    margin: 0 auto;
  }
  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  .layout-breadcrumb {
    padding: 10px 15px 0;
  }
  .layout-content {
    min-height: 600px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .layout-content-main {
    padding: 10px;
  }
  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
