//timetable/add.js
//获取应用实例
var app = getApp()
Page({
  data: {
    times: [{
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
      name: '14:00',
      class2: ''
    }, {
      name: '15:00',
      class2: ''
    }, {
      name: '16:00',
      class2: ''
    }],
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
    kecheng_hover: 0,
    kecheng: [{
      'kc_py': 'yuwen',
      'kc_nr': '语文'
    }, {
      'kc_py': 'shuxue',
      'kc_nr': '数学'
    }, {
      'kc_py': 'pinde',
      'kc_nr': '思想品德'
    }, {
      'kc_py': 'shufa',
      'kc_nr': '书法'
    }, {
      'kc_py': 'meishu',
      'kc_nr': '美术'
    }, {
      'kc_py': 'tiyu',
      'kc_nr': '体育'
    }, {
      'kc_py': 'yinyue',
      'kc_nr': '音乐'
    }],
    xw_kc: [{
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
    }],
    xw_kc1: [{
      "xqj": 1,
      "skjc": 1,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 2,
      "skjc": 1,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 3,
      "skjc": 1,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 4,
      "skjc": 1,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 5,
      "skjc": 1,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 1,
      "skjc": 2,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 2,
      "skjc": 2,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 3,
      "skjc": 2,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 4,
      "skjc": 2,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 5,
      "skjc": 2,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 1,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 2,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 3,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 4,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 6,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 7,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 6,
      "skjc": 2,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 7,
      "skjc": 2,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 6,
      "skjc": 1,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 5,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
      "xqj": 7,
      "skjc": 1,
      "skcd": 1,
      'state': 0
    }],
    sw_kc1: [, {
      "xqj": 6,
      "skjc": 3,
      "skcd": 1,
      'state': 0
    }, {
        "xqj": 7,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 6,
        "skjc": 2,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 7,
        "skjc": 2,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 6,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 7,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 6,
        "skjc": 4,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 7,
        "skjc": 4,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 7,
        "skjc": 5,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 6,
        "skjc": 5,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 1,
        "skjc": 2,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 2,
        "skjc": 2,
        "skcd": 1,
        'state': 0
      }, , {
        "xqj": 3,
        "skjc": 2,
        "skcd": 1,
        'state': 0
      }, , {
        "xqj": 4,
        "skjc": 2,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 5,
        "skjc": 2,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 1,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 2,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 3,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 4,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 5,
        "skjc": 3,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 1,
        "skjc": 4,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 2,
        "skjc": 4,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 3,
        "skjc": 4,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 4,
        "skjc": 4,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 5,
        "skjc": 4,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 1,
        "skjc": 5,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 2,
        "skjc": 5,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 3,
        "skjc": 5,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 4,
        "skjc": 5,
        "skcd": 1,
        'state': 0
      }, {
        "xqj": 5,
        "skjc": 5,
        "skcd": 1,
        'state': 0
      }],
    'kc_py': 'yuwen',
    'kc_nr': '语文',
  },
  onLoad: function () {
    console.log('onLoad')
  },
  xuanze: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.key;
    if (this.data.sw_kc1[index].state == 1) {
      this.data.sw_kc1[index].state = 0;
      this.data.sw_kc1[index].kc_py = 'other';
      this.data.sw_kc1[index].kc_nr = 'ohter';
    } else if (this.data.sw_kc1[index].state == 0) {
      this.data.sw_kc1[index].state = 1;
      this.data.sw_kc1[index].kc_py = this.data.kc_py;
      this.data.sw_kc1[index].kc_nr = this.data.kc_nr;
    }
    console.log(this.data.kc_nr);
    this.setData({
      sw_kc1: this.data.sw_kc1,
    });
  },
  xuanze2: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.key;
    if (this.data.xw_kc1[index].state == 1) {
      this.data.xw_kc1[index].state = 0;
      this.data.xw_kc1[index].kc_py = 'other';
      this.data.xw_kc1[index].kc_nr = 'ohter';
    } else if (this.data.xw_kc1[index].state == 0) {
      this.data.xw_kc1[index].state = 1;
      this.data.xw_kc1[index].kc_py = this.data.kc_py;
      this.data.xw_kc1[index].kc_nr = this.data.kc_nr;
    }
    console.log(this.data.kc_nr);
    this.setData({
      xw_kc1: this.data.xw_kc1,
    });
  },
  kecheng: function (e) {
    var that = this;
    var index = e.target.dataset.key;
    this.data.kc_py = this.data.kecheng[index].kc_py;
    this.data.kc_nr = this.data.kecheng[index].kc_nr;
    that.setData({
      kecheng_hover: index,
      kc_py: this.data.kc_py,
      kc_nr: this.data.kc_nr
    });
    console.log(index);
  }
})