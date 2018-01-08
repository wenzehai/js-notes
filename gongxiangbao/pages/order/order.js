Page({
  data: {
    hasAdd:false,
    noAdd:true,
    addressInfo: {
      name: '哈利油',
      tel: 15080755770,
      address: "岳麓区麓谷新长海中心B1栋501室"
    },
    goodsInfo: [{                       //数据为假数据，正确数据应该为本地缓存的数据或者网络请求的数据
      goodsId: 2,
      title: 'OPPO 时尚单品自拍杆 天蓝色',
      price: '￥39.00',
      color: '晴空蓝',
      imageUrl: '../../image/goods1.jpg'
    }],
    num: 1,
    express: [
      { name: '申通', value: '申通', checked: 'true' },
      { name: '圆通', value: '圆通' }
    ]
  },
  radioChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  chooseFn: function () {
    wx.navigateTo({
      url: '/pages/addressList/addressList'
    })
  },
  onLoad: function (options) {
    //获取立即购买的商品id，此处还没有向网络发出请求，做的假数据
    // console.log(options.id)
  }
})