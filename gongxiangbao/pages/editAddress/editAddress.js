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
    items: [
      {name: 'USA', value: '5元'},
      {name: 'CHN', value: '10元', checked: 'true'},
      {name: 'BRA', value: '15元'},
      {name: 'JPN', value: '20元'},
      {name: 'ENG', value: '50元'},
      {name: 'TUR', value: '100元'},
    ]
  }
})