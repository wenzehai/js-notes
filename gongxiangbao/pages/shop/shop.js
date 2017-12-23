Page({
  data: {
    goodsArray: [{
      id:1,
      title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈',
      price: 39,
      url: "../../image/goods1.jpg"
    }, {
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods2.jpg"
    }, {
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods3.jpg"
    }, {
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }]
  },
  goodsLink:function(){
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id=1',
    })
  }
})
