<template>
  <div class="hello">
        <el-main class="main">
          <div class="container">
            <el-row class="panel">
              <el-col class="panel_hd">
                <!-- <h1 class="panelTitle">搜索选项<i class="iconTips el-icon-warning"></i></h1> -->
              </el-col>  
              <el-col class="panel_bd">
                <el-form :inline="true" ref="form" :model="sizeForm" label-width="80px" size="mini">
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
                  <el-button size="medium" type="primary" @click="onSubmit">立即创建</el-button>
                  <el-button size="medium">取消</el-button>
                </el-form-item>
            </el-form>

              </el-col>  
            </el-row>
            <el-row class="panel">
              <el-col :col="24">
                <el-row class="panel_hd">
                    <el-col :col="24">
                      <h1 class="panelTitle">数据表格<el-tooltip class="item" effect="light" content="这个表格里面是一些地址信息数据" placement="right-end"><i class="iconTips el-icon-warning"></i></el-tooltip></h1>
                    </el-col>
                </el-row> 
                <el-row class="panel_bd">
                    <el-col :col="24">
                      <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                          type="selection"
                          width="55">
                        </el-table-column>
                        <el-table-column
                          label="日期"
                          width="120">
                          <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="姓名"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="地址"
                          show-overflow-tooltip>
                        </el-table-column>
                      </el-table>
                      <div style="margin-top: 20px">
                        <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
                        <el-button @click="toggleSelection()">取消选择</el-button>
                      </div>
                    </el-col>
                    <el-col :col="24">
                      <div class="paginationBox">
                        <el-pagination class="pagination"
                        layout="prev, pager, next"
                        :total="50">
                        </el-pagination>
                      </div>
                    </el-col>
                </el-row> 
              </el-col>
            </el-row>  
        </div>


      </el-main>
  </div>
</template>

<script>


export default {
  name: "HelloVue",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
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
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  },
    components: {
      // siteNavView
    }
};
</script>

<style >
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
