// pages/authorize/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  bindGetUserInfo: function (e) {
    if (!e.detail.userInfo) {
      return;
    }
    wx.setStorageSync('userInfo', e.detail.userInfo)
    this.login();
  },
  login: function () {
    let that = this;
    let token = wx.getStorageSync('token');
    if (token) {
      wx.request({
        url: 'http://127.0.0.1:8069/' + app.globalData.subDomain + '/user/check-token',
        data: {
          token: token
        },
        success: function (res) {
          console.log("check-token")
          console.log(res.data)
          if (res.data.code != 0) {
            wx.removeStorageSync('token')
            console.log("鉴权成功，开始登录")
            that.login();
          } else {
            // 回到原来的地方放
            wx.navigateBack();
          }
        }
      })
      return;
    }
    wx.login({
      success: function (res) {
        wx.request({
          url: 'http://127.0.0.1:8069/' + app.globalData.subDomain + '/user/wxapp/login',
          data: {
            code: res.code
          },
          header: {
            "Content-Type": "json"
          },
          success: function (res) {
            console.log(res.data)
            if (res.data.code == 10000) {
              // 去注册
              console.log("登录时发现没有注册，去注册")
              that.registerUser();
              return;
            }
            if (res.data.code != 0) {
              // 登录错误
              wx.hideLoading();
              wx.showModal({
                title: '提示',
                content: '无法登录，请重试',
                showCancel: false
              })
              return;
            }
            console.log('登录成功-- token-data:')
            console.log(res.data)
            wx.setStorageSync('token', res.data.token)
            wx.setStorageSync('uid', res.data.data.uid)
            //先不保存uid，注意看看后面会不会用到，2018-9-10
            // 回到原来的地方放
            wx.navigateBack();
          }
        })
      }
    })
  },
  registerUser: function () {
    var that = this;
    wx.login({
      success: function (res) {
        var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
        wx.getUserInfo({
          success: function (res) {
            var iv = res.iv;
            var encryptedData = res.encryptedData;
            // 下面开始调用注册接口
            wx.request({
              url: 'http://127.0.0.1:8069/' + app.globalData.subDomain + '/user/wxapp/register/complex',
              data: { 
                code: code, 
                encrypted_data: encryptedData, 
                iv: iv 
              }, // 设置请求的 参数
              header: {
                "Content-Type": "json"
              },
              success: (res) => {
                wx.hideLoading();
                that.login();
              }
            })
          }
        })
      }
    })
  }
})