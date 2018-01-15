<template>
  <div id="home">
    <el-container>
    <el-main class="main">
      <div class="container">
        <el-row class="panel">
          <el-col :col="24">
            <el-row class="panel_hd">
                <el-col :col="24">
                  <h1 class="panelTitle">数据表格<i class="iconTips el-icon-warning"></i></h1>
                </el-col>
            </el-row> 
            <el-row class="panel_bd">
                <el-col :col="24">
                  <p>这里放置一些常用的报表数据，类似于这样的图表</p>
                  <img src="../assets/images/chart.png" alt="">
                </el-col>
            </el-row> 
          </el-col>
        </el-row>  
        <el-row class="panel">
          <el-col :col="24">
            <el-row class="panel_hd">
                <el-col :col="24">
                  <h1 class="panelTitle">数据表格<i class="iconTips el-icon-warning"></i></h1>
                </el-col>
            </el-row> 
            <el-row class="panel_bd">
                <el-col :col="24">
                  <p>这里放置一些常用的报表数据，类似于这样的图表</p>
                  <img src="../assets/images/charts2.png" alt="">
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
import SearchFormView from './SearchForm.vue'

export default {
  name: "home",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      activeName2: "first"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit() {
      console.log("submit!");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
    components: {
      SearchFormView
    }
};
</script>

<style >
.main {
  height: 100%;
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
  color: #303133;
}
.iconTips {
  margin-left: 10px;
}
.panel_hd {
  margin-bottom: 25px;
}
.paginationBox {
  width: 300px;
  margin: 0 auto;
}

</style>
