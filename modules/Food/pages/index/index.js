// moudleFood/pages/index/index.js
import http from "../../../../utils/http/index.js";
import { API } from "../../../../utils/API/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
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

  getList() {
    http.get(API.storeList, {
      type: "1,1"
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