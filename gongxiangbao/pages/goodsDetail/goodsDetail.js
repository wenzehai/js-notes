Page({
  data: {
    url:[
      '../../image/goods1.jpg',
      '../../image/goods2.jpg',
      '../../image/goods3.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    price: 39.00,
    color:'晴空蓝',
    size: '10rpx'    
  },
  toastFn:function(){
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
  },
  buyNowFn:function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  }

})