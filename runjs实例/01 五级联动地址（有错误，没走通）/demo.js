/*
 **    ====================================
 **    类名：CLASS_LIANDONG_YAO
 **    功能：多级连动菜单
 **
 **/
function CLASS_LIANDONG_YAO(arry) {
    //数组，联动的数据源
    this.array = Array;
    this.indexName = '';
    this.obj = '';
    //设置子SELECT
    //参数：当前onchange的SELECT ID,要设置的SELECT ID
    this.subSelectChange = function(selectName1,selectName2) {
        var obj1 = document.all[selectName1];
        var obj2 = document.all[selectName2];
        var objName = this.toString();
        var me = this;
        obj1.onchange = function() {
            me.optionChange(this.options[this.selectedIndex].value,obj2.id)
        }
    };
    //设置第一个SELECT
    //参数：indexName指选中项，selectName指select的ID
    this.firstSelectChange = function(indexName,selectName) {
        this.obj = document.all[selectName];
        this.indexName = indexName;
        this.optionChange(this.indexName,this.obj.id);
    };
    //indexName指选中项，selectName指select的ID
    this.optionChange = function(indexName,selectName) {
        var obj1 = document.all[selectName];
        var me = this;
        obj1.length = 0;
        obj1.options[0] =new Option("请选择",'');
        for(var i = 0; i<this.array.length; i++) {
            if(this.array[i][1] == indexName) {
                obj1.options[obj1.length] = new Option(this.array[i][2],this.array[i][0]);
            }
        }
    };
}

//数据源
var array2 = new Array();           //数据格式 ID 父级ID  名称
array2[0] = new Array("华中地区","中国","华中地区");
array2[1] = new Array("华北地区","中国","华北地区");
array2[2] = new Array("长沙","华中地区","长沙");
array2[3] = new Array("保定","华北地区","保定");
array2[4] = new Array("天心区","长沙","天心区");
array2[5] = new Array("南市区","保定","南市区");
array2[6] = new Array("新开街道","天心区","新开街道");
array2[7] = new Array("长城街道","南市区","长城街道");
array2[8] = new Array("竹塘西路","新开街道","竹塘西路");
array2[9] = new Array("建设南路","长城街道","建设南路");
array2[10] = new Array("莲花小区","竹塘西路","莲花小区");
array2[11] = new Array("河北农大","建设南路","河北农大");
array2[12] = new Array("13栋","莲花小区","13栋");
array2[13] = new Array("24栋","河北农大","24栋");

//这是调用代码
//设置数据源
var liandong2 = new CLASS_LIANDONG_YAO(array2);
//设置第一个选择框
liandong2.firstSelectChange("根目录","x1");
//设置子选择框
liandong2.subSelectChange("x1","x2");
liandong2.subSelectChange("x2","x3");
liandong2.subSelectChange("x3","x4");
liandong2.subSelectChange("x4","x5");