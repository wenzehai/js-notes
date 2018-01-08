var app = getApp();
Page({
  data: {
    goodsArr:[{
      id: 1,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: '￥40.00',
      color: '晴空蓝',
      url: [
        '../../image/goods1.jpg',
        '../../image/goods2.jpg',
        '../../image/goods3.jpg'
      ],
      detailUrl: [
        '../../image/goods1.jpg',
        '../../image/goods2.jpg',
        '../../image/goods3.jpg'
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      size: '10rpx'
    }],
    goodsId:null    
  },
  onLoad:function(options) {
    this.setData({
      goodsId:options
    })
  },
  addCartFn: function () {
    app.globalData.cartList.push(this.data.goodsId)
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
    // console.log(app.globalData.cartList)         // 购物车列表为全局数组
  },
  buyNowFn: function () {
    wx.navigateTo({
      url: '/pages/order/order?goodsId='+this.data.goodsId.goodsId,
    })
  }

})