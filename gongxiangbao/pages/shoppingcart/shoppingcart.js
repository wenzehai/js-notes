Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: {
      name: '哈利油',
      tel: 15080755770,
      address: "岳麓区麓谷新长海中心B1栋501室"
    },
    goodsList: [
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '粉红色',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
      {
        id:'1',
        title: 'OPPO时尚单品自拍杆 晴空蓝哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        price: 39.00,
        color: '晴空蓝',
        url:'../../image/goods.png',
        checkValue: 'true',
        checked:'false'        
      },
    ],
    items: [
      { name: 'USA', value: '美国', checked: 'true' },
      { name: 'CHN', value: '中国' }
    ]
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  buyNowFn:function(){
    wx.navigateTo({
      url: '../../pages/order/order',
    })
  }
})