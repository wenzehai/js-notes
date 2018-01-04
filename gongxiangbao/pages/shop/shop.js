//调用全局数据
// var globalData = getApp();
// console.log(globalData.globalData);
Page({
  data: {
    test:'测试数据',
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    },
    goodsArray: [{
      id: 1,
      title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈',
      price: 39,
      url: "../../image/goods1.jpg"
    }, {
      id: 2,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods2.jpg"
    }, {
      id: 3,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods3.jpg"
    }, {
      id: 4,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      id: 5,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      id: 6,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }, {
      id: 7,
      title: 'OPPO时尚单品自拍杆 晴空蓝',
      price: 45,
      url: "../../image/goods.png"
    }]
  },
  goodsLink: function () {
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id=1',
    })
  },
  onLoad:function(){
    console.log(this.data.test);
  },
  onShow:function(){
    //页面加载时打印this中的数据，可删除
    // console.log(this.data.goodsArray[0].title);
  },
  viewTap:function(){
    this.setData({
      test:'哈哈哈哈'
    },
      //回调函数
      // function(){
      //   alert(1);
      // }
    )
  },
  onShareAppMessage:function(){
    return {
      title:'转发标题',
      path:'/pages/index?id=123'
    }
  }
})
