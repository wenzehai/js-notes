//调用全局数据
// var globalData = getApp();
// console.log(globalData.globalData);
Page({
  data: {
    goodsArray: [{
      goodsId: 1,
      title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈',
      price: 39,
      url: "../../image/goods1.jpg"
    }, {
      goodsId: 2,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods2.jpg"
    }, {
      goodsId: 3,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods3.jpg"
    }, {
      goodsId: 4,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      goodsId: 5,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      goodsId: 6,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      goodsId: 7,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }]
  },
  goodsLink: function (e) {
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?goodsId=' + e.currentTarget.id,
    })
  }
})
