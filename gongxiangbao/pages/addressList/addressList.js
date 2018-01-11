var app = getApp();
Page({
  data: {
    addressInfo: []
  },
  onShow: function () {
    console.log(app.globalData.addList)
    this.setData({
      addressInfo: app.globalData.addList
    })
  },
  editFn: function (e) {
    // console.log(e)
    console.log(e.currentTarget.id)
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
  }
})