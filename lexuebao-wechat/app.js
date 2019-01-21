//app.js
App({
  onLaunch: function () {
    var that = this;
    //  获取机构名称
    wx.request({
      url: 'http://127.0.0.1:8069/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'org_name'
      },
      header: {
        "content-type": "json"
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == 0) {
          wx.setStorageSync('org_name', res.data.data.value);
        }
      }
    })
    
    // 判断是否登录
    let token = wx.getStorageSync('token');
    if (!token) {
      that.goLoginPageTimeOut()
      return
    }
    wx.request({
      url: 'http://127.0.0.1:8069/' + that.globalData.subDomain + '/user/check-token',
      data: {
        token: token
      },
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        if (res.data.code != 0) {
          console.log("鉴权成功，进入登录")
          wx.removeStorageSync('token')
          that.goLoginPageTimeOut()
        }
      }
    })
  },
  goLoginPageTimeOut: function () {
    setTimeout(function () {
      console.log("进入authorize")
      wx.navigateTo({
        url: "/pages/authorize/index"
      })
    }, 1000)
  },  
    
  globalData: {
    userInfo: null,
    subDomain: "lxb", // 如果你的域名是： https://api.it120.cc/abcd 那么这里只要填写 abcd
    version: "3.1.0",
    shareProfile: '让学习更快乐，乐学宝欢迎您！' // 首页转发的时候话术
  }
  /*
  根据自己需要修改下单时候的模板消息内容设置，可增加关闭订单、收货时候模板消息提醒；
  1、/pages/to-pay-order/index.js 中已添加关闭订单、商家发货后提醒消费者；
  2、/pages/order-details/index.js 中已添加用户确认收货后提供用户参与评价；评价后提醒消费者好评奖励积分已到账；
  3、请自行修改上面几处的模板消息ID，参数为您自己的变量设置即可。  
   */
})