Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '海淀区'],
    customItem: '不限',
    focus: false
  },  
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindTextAreaBlur: function(e) {
    // console.log(e.detail.value)
  }
})
