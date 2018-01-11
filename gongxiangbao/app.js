//app.js
App({
  onLaunch: function (obj) {
    // console.log(obj);
    // console.log(obj.path);
    // console.log(obj.scene);
    // console.log(obj.query);
  },
  onShow: function (obj) {
    // console.log(obj);
  },
  // 这段代码为案例自带代码，可以删除掉
  /*
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  */
  globalData: {
    userInfo: null,
    codeNum: '1213',
    cartList: [],
    addList: [{
      id: 1,
      name: '哈利油',
      tel: 15080755770,
      region: ["湖南省", "长沙市","岳麓区"],
      address: "麓谷大道新长海中心B1栋501室"
    }, {
      id: 2,
      name: '李梦晨',
      tel: 15080755770,
      region: ["广东省", "佛山市", "顺德区"],
      address: "凤翔路新长海中心B1栋501室"
    }
    ]
  }

})