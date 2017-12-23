Page({
  data: {
    addressInfo: {
      name: '哈利油',
      tel: 15080755770,
      address: "岳麓区麓谷新长海中心B1栋501室"
    }
  },
  changeAddFn:function(){
    wx.navigateTo({
      url: '/pages/editAddress/editAddress',
    })
  },
  addAddressFn:function(){
    wx.navigateTo({
      url: '/pages/editAddress/editAddress',
    })
  }
})