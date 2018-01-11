<template>
  <div class="hello">
    
    <el-container>
      <!-- 整站导航 -->
        <el-header class="siteNav" height="30px">
          <div class="container">
            <ul class="menu">
              <li><router-link to="/">登录</router-link></li>
              <li><router-link to="/" >注册</router-link></li>
              <li><router-link to="/" >帮助</router-link></li>
              <li><router-link to="/" >设置</router-link></li>
            </ul>
          </div>
        </el-header>
      <!-- 主导航 -->
        <el-header class="mainNav" height="75px">
          <div class="container">
            <el-row>
              <!-- logo -->
              <el-col :span="4">
                <img src="../assets/images/Logo.png" alt="" class="logo">
              </el-col>
              <!-- 菜单 -->
              <el-col :span="8" :offset="12">
                <el-menu :default-active="activeIndex" class="mainMenu" mode="horizontal" @select="handleSelect">
                  <el-menu-item index="1">处理中心</el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-submenu>
                   <el-menu-item index="3">订单中心</el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-header>

        <!-- 主体内容 -->
        <el-main class="main">
          <div class="container">
            <el-row class="panel">
              <el-col :col="24">
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                  <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                  <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                  <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                  <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>
            <el-row class="panel">
              <el-col class="panel_hd">
                <h1 class="panelTitle">搜索选项<i class="el-icon-warning"></i></h1>
              </el-col>  
              <el-col class="panel_bd">

                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="活动名称">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="sizeForm.type">
      <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
      <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
      <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="sizeForm.resource" size="medium">
      <el-radio border label="线上品牌商赞助"></el-radio>
      <el-radio border label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

              </el-col>  
            </el-row>
            <el-row class="panel">
              <el-col :col="24">
                <el-row class="panel_hd">
                    <el-col :col="24">
                      <h1 class="panelTitle">数据表格<i class="el-icon-warning"></i></h1>
                    </el-col>
                </el-row> 
                <el-row class="panel_bd">
                    <el-col :col="24">
                      <el-table :data="tableData">
                          <el-table-column prop="date" label="日期" width="140">
                          </el-table-column>
                          <el-table-column prop="name" label="姓名" width="120">
                          </el-table-column>
                          <el-table-column prop="address" label="地址">
                          </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :col="24">
                      <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                      </el-pagination>
                    </el-col>
                </el-row> 
              </el-col>
            </el-row>  
              
            
        </div>


      </el-main>

  </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      activeIndex: "1",
      activeIndex2: "1",
      tableData: Array(20).fill(item),
      sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        activeName2: 'first'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit() {
        console.log('submit!');
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>

<style scoped >
/* 测试 */

/* 正式 */
/* .container {
  width: 800px;
} */
.siteNav {
  background: #333;
}
/* .container {
  width: 1200px;
  margin: 0 auto;
} */
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

/* 主导航 */
.mainNav {
  /* background: #f6f6f6; */
  border-bottom: 1px solid #f6f6f6;
}
.logo {
  width: 70px;
  height: 70px;
}
.mainMenu {
  margin-top: 5px;
  border-bottom: none;
}


/* 主体内容 */
.main {
  background: #f6f6f6;
}

.panel {
  margin-bottom: 25px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
}
.panelTitle {
  font-size: 16px;
  font-weight: bold;
}
.panel_hd {
  margin-bottom: 25px;
}


</style>
