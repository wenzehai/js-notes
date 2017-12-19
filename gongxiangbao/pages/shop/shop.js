Page({
  data: {
    screenWidth: 0,
    screenHeight: 0,
    a:0,
    b:1,
    imgwidth: 0,
    imgheight: 0,
    goodsArray: [{
      title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈',
      price: 39,
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
  onLoad: function () {
    //页面载入时执行函数
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
  },
  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,    //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = 500,           //设置图片显示宽度，  
      viewHeight = 500 / ratio;    //计算的高度值     
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  } 
})
