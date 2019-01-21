//timetable/index.js
var util = require('../../utils/util.js');
var touchDot = 0; //触摸时的原点
var time = 0; // 时间记录，用于滑动时且时间小于1s则执行左右滑动
var interval = ""; // 记录/清理时间记录
var kecheng = 0;
var app = getApp()
Page({
  data: {
    currentIndex: 0,
    cardRightIn: false,
    cardLeftIn: false,
    times: [{
      name: '上学',
      class2: 'left2'
    }, {
      name: '08:00',
      class2: ''
    }, {
      name: '09:00',
      class2: ''
    }, {
      name: '10:00',
      class2: ''
    }, {
      name: '11:00',
      class2: ''
    }, {
      name: '午休',
      class2: 'left2'
    }, {
      name: '14:00',
      class2: ''
    }, {
      name: '15:00',
      class2: ''
    }, {
      name: '16:00',
      class2: ''
    }, {
      name: '放学',
      class2: 'left2'
    }, {
      name: '课外班',
      class2: 'left2'
    }],
    len: 2,
    week_kecheng: [{
      index: 1,
      week_day: [{
        week: '一',
        day: 16
      }, {
        week: '二',
        day: 17,
        k: 'top-text2'
      }, {
        week: '三',
        day: 18
      }, {
        week: '四',
        day: 19
      }, {
        week: '五',
        day: 20
      }, {
        week: '六',
        day: 21
      }, {
        week: '日',
        day: 22
      }],
      xw_kc: [{
        "xqj": 1,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "品德",
        "bg": 'pinde'
      }, {
        "xqj": 2,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "自然",
        "bg": 'ziran'
      }, {
        "xqj": 3,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "音乐",
        "bg": 'yinyue'
      }, {
        "xqj": 4,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 5,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "班会",
        "bg": 'banhui'
      }, {
        "xqj": 1,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "美术",
        "bg": 'meishu'
      }, {
        "xqj": 2,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 3,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "品德",
        "bg": 'pinde'
      }, {
        "xqj": 4,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "自然",
        "bg": 'ziran'
      }, {
        "xqj": 5,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "班会",
        "bg": 'banhui'
      }, {
        "xqj": 1,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "品德",
        "bg": 'pinde'
      }, {
        "xqj": 2,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "自然",
        "bg": 'ziran'
      }, {
        "xqj": 3,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "音乐",
        "bg": 'yinyue'
      }],
      sw_kc: [{
        "xqj": 3,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 4,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 5,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 1,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 2,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 3,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 4,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 5,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 1,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 2,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 3,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 4,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 5,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 1,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 2,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "美术",
        "bg": 'meishu'
      }, {
        "xqj": 3,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 4,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "音乐",
        "bg": 'yinyue'
      }, {
        "xqj": 5,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "自然",
        "bg": 'ziran'
      }, {
        "xqj": 6,
        "skjc": 2,
        "skcd": 2,
        "kcmc": "爵士舞(张小米）",
        "bg": 'others'
      }, {
        "xqj": 7,
        "skjc": 2,
        "skcd": 2,
        "kcmc": "二胡(张小米）",
        "bg": 'others'
      }]
    }, {
      index: 2,
      week_day: [{
        week: '一',
        day: 23
      }, {
        week: '二',
        day: 24,
        k: 'top-text2'
      }, {
        week: '三',
        day: 25
      }, {
        week: '四',
        day: 26
      }, {
        week: '五',
        day: 27
      }, {
        week: '六',
        day: 28
      }, {
        week: '日',
        day: 29
      }],
      xw_kc: [{
        "xqj": 1,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "品德",
        "bg": 'pinde'
      }, {
        "xqj": 2,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "自然",
        "bg": 'ziran'
      }, {
        "xqj": 3,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "音乐",
        "bg": 'yinyue'
      }, {
        "xqj": 4,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 5,
        "skjc": 1,
        "skcd": 1,
        "kcmc": "班会",
        "bg": 'banhui'
      }, {
        "xqj": 1,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "美术",
        "bg": 'meishu'
      }, {
        "xqj": 2,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 1,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "品德",
        "bg": 'pinde'
      }, {
        "xqj": 2,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "自然",
        "bg": 'ziran'
      }, {
        "xqj": 3,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "音乐",
        "bg": 'yinyue'
      }, {
        "xqj": 4,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 5,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "班会",
        "bg": 'banhui'
      }],
      sw_kc: [{
        "xqj": 1,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 2,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, , {
        "xqj": 3,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, , {
        "xqj": 4,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 5,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 1,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 2,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 3,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 4,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 5,
        "skjc": 3,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 1,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 2,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "数学",
        "bg": 'shuxue'
      }, {
        "xqj": 3,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 4,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "语文",
        "bg": 'yuwen'
      }, {
        "xqj": 5,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "英文",
        "bg": 'yingwen'
      }, {
        "xqj": 1,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 2,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "美术",
        "bg": 'meishu'
      }, {
        "xqj": 3,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "体育",
        "bg": 'tiyu'
      }, {
        "xqj": 4,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "音乐",
        "bg": 'yinyue'
      }, {
        "xqj": 5,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "自然",
        "bg": 'ziran'
      }, {
        "xqj": 6,
        "skjc": 2,
        "skcd": 2,
        "kcmc": "爵士舞(张小米）",
        "bg": 'others'
      }, {
        "xqj": 7,
        "skjc": 2,
        "skcd": 2,
        "kcmc": "二胡(张小米）",
        "bg": 'others'
      }]
    }],
  },
  onLoad: function () {
    var that = this;
    that.setData({
      kechengs: that.data.week_kecheng[0],
    });
  },
  // 触摸开始事件
  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间  
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件
  tishi: function (e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 2000
    });
    this.onLoad();
  },
  // 触摸结束事件
  touchEnd: function (e) {
    clearInterval(interval); // 清除setInterval
    time = 0;
  },
  toAgree: function (e) {
    let id = e.currentTarget.dataset.id;
    let week_kecheng = this.data.week_kecheng
    for (let i of week_kecheng) {
      if (i._id == id) {
        i.agree = !i.agree
      }
      if (i._id == id && i.agree) {
        i.agreeNum = i.agreeNum + 1
      } else if (i._id == id && !i.agree) {
        i.agreeNum = i.agreeNum - 1
      }
      this.setData({ week_kecheng })
    }
  },
  toComment: function () {
    console.log('comment')
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    let idx = e.currentTarget.dataset.index;
    let startX = this.data.startX,//开始X坐标
      startY = this.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    //滑动超过45度角 return
    if (Math.abs(angle) > 45) return;

    if (touchMoveX > startX) { //右滑
      this.setData({
        currentIndex: idx == 0 ? 0 : idx - 1,
        cardRightIn: false,
        cardLeftIn: true
      })
    } else {
      this.setData({
        currentIndex: idx == this.data.week_kecheng.length - 1 ? idx : idx + 1,
        cardRightIn: true,
        cardLeftIn: false
      })
    }
    wx.pageScrollTo({
      scrollTop: 0
    })

  },
  /**
 * 计算滑动角度
 * @param {Object} start 起点坐标
 * @param {Object} end 终点坐标
 */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
  },

})