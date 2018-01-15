<template>
<div>
     <el-row class="panel">
        <!-- <el-col class="panel_hd"> -->
        <!-- <h1 class="panelTitle">新建项目</h1> -->
        <!-- </el-col>   -->
        <el-col class="panel_bd">
        <el-form class="formBox" :inline="false" ref="form" :model="sizeForm" label-width="80px" :label-position="'top'">
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
        <el-form-item label="特殊资源">
                    <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入内容">
            </el-input>
            </el-form-item>
        <el-form-item size="large">
            <el-button size="medium" type="primary" @click="onSubmit">立即创建</el-button>
            <el-button size="medium">取消</el-button>
        </el-form-item>
    </el-form>

        </el-col>  
    </el-row>
</div>
</template>

<script>
export default {
  name: 'Create',
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄"
    };
    return {
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
  components: {}
}
</script>


<style>
.panel {
  background: #fff;
}
.panelTitle {
  font-size: 20px;
  font-weight: lighter;
  color: #303133;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px 0;
}
.iconTips {
  margin-left: 10px;
  color: #d4d4d4;
  font-size: 16px;
}
.panel_hd {
  margin-bottom: 25px;
}
.paginationBox {
  width: 300px;
  margin: 0 auto;
}
.formBox {
    max-width: 1000px;
}
</style>
