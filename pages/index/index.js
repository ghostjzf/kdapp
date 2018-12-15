//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        id: 0,
        name: "美食诱惑",
        desc: "汇集各种美食"
      },
      {
        id: 1,
        name: "健康养生",
        desc: "养生之道乐在其中"
      },
      {
        id: 2,
        name: "休闲娱乐",
        desc: "放空一下自己"
      },
      {
        id: 3,
        name: "亲子游乐",
        desc: "亲子开心乐园"
      },
      {
        id: 4,
        name: "精美礼物",
        desc: "超赞节日礼物"
      },
      {
        id: 4,
        name: "小城酒店",
        desc: "舒适干净定位"
      }
    ],
    src: "../../static/images/bg.jpg",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
