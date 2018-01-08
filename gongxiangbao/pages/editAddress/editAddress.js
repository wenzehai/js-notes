var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '海淀区'],
    customItem: '不限',
    focus: false,
    addressValue:null,
    addId:null
  },  
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      // region: e.detail.value
    })
  },
  bindTextAreaBlur: function(e) {
    // console.log(e.detail.value)
  },
  onLoad:function(e){
    // console.log(e);
    this.setData({
      addressValue: app.globalData.addList[e.id-1],
      addId: e.id-1

    })   
  },
  saveFn:function(){
    //
  },
  saveFn:function(){
    //
    // this.formSubmit()
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // console.log(app.globalData.addList[this.data.addId].name)
    app.globalData.addList[this.data.addId].name = e.detail.value.name
    app.globalData.addList[this.data.addId].tel = e.detail.value.phoneNum
    app.globalData.addList[this.data.addId].region = e.detail.value.region
    app.globalData.addList[this.data.addId].address = e.detail.value.address
  }
})
