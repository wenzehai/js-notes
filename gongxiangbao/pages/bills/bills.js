Page({
  data: {
    isShow: true,
    currentTab: 0,
  },
  tabNav: function (e) {
    console.log(e.target.dataset.current, 111, this.data.currentTab)
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {

      var showMode = e.target.dataset.current == 0;

      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  }
})