<template>
    <div id="_mainNav">
        <el-header class="mainNav" height="75px">
          <div class="container">
            <el-row>
              <!-- logo -->
              <el-col :span="2">
                <router-link to="/home" class="link"><img src="../assets/images/templogo.png" alt="" class="logo"></router-link>
              </el-col>
              <!-- 菜单 -->
              <el-col :span="20">
                <el-menu :default-active="activeIndex" class="mainMenu" mode="horizontal" @select="handleSelect">
                  <el-menu-item index="1"><router-link to="/home" class="link">首页</router-link></el-menu-item>
                  <el-menu-item index="2"><router-link to="/search" class="link">查询</router-link></el-menu-item>
                  <el-submenu index="3">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="3-1"><router-link to="/home" class="horizLink">选项1</router-link></el-menu-item>
                    <el-menu-item index="3-2"><router-link to="/home" class="horizLink">选项2</router-link></el-menu-item>
                    <el-menu-item index="3-3"><router-link to="/home" class="horizLink">选项3</router-link></el-menu-item>
                  </el-submenu>
                   <el-menu-item index="4"><router-link to="/create" class="link">新增</router-link></el-menu-item>
                </el-menu>
              </el-col>
              <el-col :span="2">
                <router-link to="/create" class="link"><el-button type="primary" icon="el-icon-circle-plus-outline" size="small" class="createBtn">新建</el-button></router-link>
              </el-col>
            </el-row>
          </div>
        </el-header>
    </div>
</template>

<script>
export default {
    name: 'mainNav',
    data: function() {	
        return {
            activeIndex: "1",
            activeIndex2: "1"
        }
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClick(tab, event) {
        console.log(tab, event);
        }
    }
}
</script>

<style scoped>
.mainNav {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 30px;
  width: 100%;
  border-bottom: 1px solid #f6f6f6;
  background: #fff;
}
.logo {
  width: 70px;
  height: 70px;
}
.mainMenu {
  margin-top: 5px;
  border-bottom: none;
}
.link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
}
.horizLink {
  text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
}
.createBtn {
  margin-top: 18px;
}

</style>