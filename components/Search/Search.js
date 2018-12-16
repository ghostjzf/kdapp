// components/Search/Search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    text: "取消"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindinput(e) {
      this.triggerEvent("bindinput", { value: e.detail.value });
    },
    bindconfirm(e) {
      this.triggerEvent("bindconfirm", { value: e.detail.value });
    },
    back() {
      wx.navigateBack();
    }
  }
})
