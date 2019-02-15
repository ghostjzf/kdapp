// modules/Food/pages/detail/detail.js
import http from "../../../../utils/http/index.js";
import { API } from "../../../../utils/API/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    list: []
  },

  getDetail(id) {
    console.log(id)
  },

  preview() {
    
  },

  getList() {
    http.get(API.recoomend, {
      phoneno: this.data.detail.phoneno
    }).then(resp => {
      console.log(resp);

      this.setData({
        list: resp.data.items
      })
    }).catch(error => {

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const detail = JSON.parse(options.detail);

    this.setData({
      detail
    }, () => {
      this.getList();
    })
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