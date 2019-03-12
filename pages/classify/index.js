Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    screenArray: [
      {
        id: 0,
        name: "热搜推荐"
      },
      {
        id: 1,
        name: "手机数码"
      },
      {
        id: 2,
        name: "女装内衣"
      },
      {
        id: 3,
        name: "男装内衣"
      },
      {
        id: 4,
        name: "家用电器"
      },
      {
        id: 5,
        name: "鞋靴箱包"
      },
      {
        id: 6,
        name: "运动户外"
      },
      {
        id: 7,
        name: "电脑办公"
      },
      {
        id: 8,
        name: "美妆护肤"
      },
      {
        id: 9,
        name: "个护清洁"
      },
      {
        id: 10,
        name: "生活充值"
      },
      {
        id: 11,
        name: "家居建材"
      },
      {
        id: 12,
        name: "家居家纺"
      },
      {
        id: 13,
        name: "母婴童装"
      },
      {
        id: 14,
        name: "玩具乐器"
      },
      {
        id: 15,
        name: "生活美食"
      },
      {
        id: 16,
        name: "酒水饮料"
      },
      {
        id: 17,
        name: "汽车生活"
      }, 
      {
        id: 18,
        name: "医药保健"
      },
      {
        id: 19,
        name: "计生情趣"
      },
      {
        id: 20,
        name: "时尚钟表"
      },
      {
        id: 21,
        name: "珠宝饰品"
      },
      {
        id: 22,
        name: "生鲜果蔬"
      },
      {
        id: 23,
        name: "图书音像"
      },
      {
        id: 24,
        name: "拍拍二手"
      },
      {
        id: 25,
        name: "宠物园艺"
      },
      {
        id: 26,
        name: "礼品鲜花"
      }
    ], //左侧导航栏内容
    screenId: "",  //后台查询需要的字段
    childrenArray: [], //右侧内容
  },

  onLoad: function (options) {
    
  },

  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      screenId: e.currentTarget.dataset.screenid,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
    //刷新右侧内容的数据
    var screenId = this.data.screenId;
    request.sendRrquest(API_queryClassify, 'POST', { flag: 1, screenId: screenId })
      .then(function (res) {
        console.log("返回数据：");
        that.setData({
          childrenArray: res.data.data.screenArray[0],
        })
        console.log(that.data.childrenArray);
      }, function (error) { console.log("返回失败"); });
  },
})