var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeNum: null
  },
  modleFn:function(){
    wx.showModal({
      title: '押金提示',
      content: '您还未缴纳押金，需要交付99元押金才可使用哦！',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/choosePay/choosePay?id=1',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      codeNum: app.globalData.codeNum
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.num);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})