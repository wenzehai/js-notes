Page({
  data: {
    addressInfo:{
      name:'哈利油',
      tel:15080755770,
      address:"岳麓区麓谷新长海中心B1栋501室"
    },
    title: 'OPPO 时尚单品自拍杆 天蓝色',
      price: 39.00,
      color:'晴空蓝',
      num:2,
      express: [
        { name: '申通', value: '申通', checked: 'true'},
        { name: '圆通', value: '圆通'}
      ]
  },
  radioChange: function(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  chooseFn:function(){
    wx.navigateTo({
      url: '/pages/addressList/addressList'
    })
  }
})