var app = getApp();
Page({
  data: {
    addressInfo: []
  },
  editFn: function (e) {
    // console.log(e)
    wx.navigateTo({
      url: '/pages/editAddress/editAddress?id='+e.currentTarget.id,
    })
  },
  addAddressFn: function () {
    wx.navigateTo({
      url: '/pages/editAddress/editAddress',
    })
  },
  changeFirstAdd: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail)
  },
  onLoad:function(){
    this.setData({
      addressInfo: this.data.addressInfo.concat(app.globalData.addList)
    })
  }
})