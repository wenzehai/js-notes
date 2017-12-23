//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    
  },
  //事件处理函数
  linkLocation:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  linkShoplist: function () {
    wx.navigateTo({
      url: '/pages/nearbyShops/nearbyShops',
    })
  },
  linkModal:function(){
    wx.showActionSheet({
      itemList: ['常见问题', '联系客服'],
      success: function (res) {
        // console.log(res.tapIndex),       
        // console.log(res),
        //根据点击的序号来判断所点击的菜单项，并作出相应操作
        if(res.tapIndex == 0 ){
          wx.navigateTo({
            url: '/pages/questions/questions'
          })
        } else {
          wx.makePhoneCall({
            phoneNumber: '15080755770' //电话号码需要修改
          })
        }
        
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    });
  },
  //扫码
  scanFn: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        // console.log(res)
      }
    })
  },
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
