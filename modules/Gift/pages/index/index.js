// moudleFood/pages/index/index.js
import http from "../../../../utils/http/index.js";
import { API } from "../../../../utils/API/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    navlist: []
  },

  select(e) {
    const idx = e.currentTarget.dataset.idx;
    const type = e.currentTarget.dataset.type;

    const navlist = this.data.navlist.map((item, index) => {
      idx === index ? item.active = true : item.active = false

      return item
    })

    this.setData({ navlist }, () => {
      this.getList(type)
    })
  },

  bindInputClick() {
    wx.navigateTo({
      url: '../../../Common/searchPage/searchPage',
    })
  },

  // 详情
  detailView(ev) {
    const detail = ev.currentTarget.dataset.item

    wx.navigateTo({
      url: '../detail/detail?detail=' + JSON.stringify(detail),
    })
  },

  getNavList() {
    http.get(API.types, {
      type: "5,1"
    }).then(resp => {
      this.setData({
        navlist: resp.data.map(item => {
          return item.pid === 5 && item.cid === 1 ? { ...item, active: true } : { ...item, active: false }
        }).filter(item => item.pid === 5)
      })
    }).catch(error => {

    })
  },

  getList(type) {
    http.get(API.storeList, {
      type: type ? type : "5,1"
    }).then(resp => {
      console.log(resp);

      this.setData({
        list: resp.data
      })
    }).catch(error => {

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})