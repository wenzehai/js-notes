var app = getApp();

Page({
  data: {
    region: ['北京市', '北京市', '海淀区'],
    customItem: '不限',
    focus: false,
    addressValue: null,
    addId: null
  },
  //页面加载时，从app.js加载地址数据，赋值到addressValue，并且渲染到页面
  onLoad: function (e) {
    // console.log(e);      //{id:1}
    this.setData({
      addressValue: app.globalData.addList[e.id - 1],
      addId: e.id - 1
    })
    // console.log(this.data.addressValue);
  },
  //收货人名称变更，更新addressValue并渲染到页面
  bindKeyInput: function (e) {
    this.data.addressValue.name = e.detail.value
    this.setData({
      inputValue: this.data.addressValue
    })
  },
  //电话号码变更，更新addressValue并渲染到页面
  bindNumInput: function (e) {
    this.data.addressValue.tel = e.detail.value
    this.setData({
      inputValue: this.data.addressValue
    })
  },
  //详细地址变更，更新addressValue并渲染到页面
  bindAddressInput: function (e) {
    this.data.addressValue.address = e.detail.value
    this.setData({
      inputValue: this.data.addressValue
    })
  },
  //region变更，更新addressValue并渲染到页面
  bindRegionChange: function (e) {
    var newarr = e.detail.value
    var obj = this.data.addressValue
    obj.region = []     //清空新对象中的数据
    obj.region = ([]).concat(newarr)    //将新对象中的数据与选择器获得的值进行整合
    this.setData({
      addressValue: obj
    })
  },
  //删除数据函数
  deleteFn:function(e){
    var that = this
    // console.log(e)
    wx.showModal({
      title: '提示',
      content: '是否删除本条地址信息',
      showCancel:true,      
      success:function(res){
        if (res.confirm) {
          app.globalData.addList.splice(that.data.addId, 1)
          wx.navigateBack({
            delta:1
          })
          // console.log(app.globalData.addList)
        } else if (res.cancel) {
          // console.log('用户点击取消')不做任何操作
        }        
      }
    })
  }, 
  //点击保存提交后，将全局地址数据进行更新
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // console.log(app.globalData.addList[this.data.addId].name)
    app.globalData.addList[this.data.addId].name = e.detail.value.name
    app.globalData.addList[this.data.addId].tel = e.detail.value.phoneNum
    app.globalData.addList[this.data.addId].region = e.detail.value.region
    app.globalData.addList[this.data.addId].address = e.detail.value.address
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1500,
      success: function () {
        setTimeout(function () {
          wx.navigateBack({
            delta: 1
          })
        }, 2500)
      }
    })
  }
})
