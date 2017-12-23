var app = getApp();


Page({
  data: {
    name:"wenzehai",
    pass:""
  },
  onLoad:function(options){
    this.setData({
      pass: app.globalData.pass
    })
  }
})