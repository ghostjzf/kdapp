//index.js
import { list } from "./config/routes.js"
//获取应用实例
const app = getApp()

Page({
  data: {
    list: list,
    src: "../../static/images/bg.jpg"
  },
  navigage(e) {
    let index = e.currentTarget.dataset.index;

    wx.navigateTo({
      url: this.data.list[index].navpath,
    })
  },
  onLoad: function () {

  }
})
