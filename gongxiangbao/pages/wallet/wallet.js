Page({
  data: {
    
  },
  tradLinkFn:function(){
    wx.navigateTo({
      url: '/pages/tradingDetails/tradingDetails'
    })
  },
  modalFn:function(){
    wx.showModal({
      title: '余额提现',
      content: '确认要将押金和余额提现吗？提现后需0~1个工作日到账，请耐心等候',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  }
})