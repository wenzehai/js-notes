<template>
    <div>
         <el-row class="panel">
          <el-col :col="24">
            <el-row class="panel_hd">
                <el-col :col="24">
                  <h1 class="panelTitle">数据表格一<el-tooltip class="item" effect="light" content="这个表格里展示的是销售数据" placement="right-end"><i class="iconTips el-icon-warning"></i></el-tooltip></h1>
                </el-col>
            </el-row> 
            <el-row class="panel_bd">
                <el-col :col="24">
                  <img src="../../assets/img/graphTable1.png" alt="">
                </el-col>
            </el-row> 
          </el-col>
        </el-row>  
        <el-row class="panel">
          <el-col :col="24">
            <el-row class="panel_hd">
                <el-col :col="24">
                  <h1 class="panelTitle">数据表格二<el-tooltip class="item" effect="light" content="这个表格里展示的是销售数据" placement="right-end"><i class="iconTips el-icon-warning"></i></el-tooltip></h1>
                </el-col>
            </el-row> 
            <el-row class="panel_bd">
                <el-col :col="24">
                  <img src="../../assets/img/graphTable2.png" alt="">
                  </el-col>
              </el-row> 
            </el-col>
          </el-row>
    </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {}
};
</script>
<style scoped>
.main {
  height: 100%;
}
.panel {
  margin-bottom: 25px;
  background: #fff;
  border-radius: 4px;
  padding: 0 10px;
}
.panelTitle {
  font-size: 16px;
  font-weight: bold;
  color: #303133;
}
.iconTips {
  margin-left: 10px;
  color: #d4d4d4;
}
.panel_hd {
  padding-bottom: 10px;
}
.underline {
  border-bottom: 1px solid #d4d4d4;
}
</style>
