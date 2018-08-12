const app = getApp()

const util = require('../../utils/util.js')

Page({
  data: {
    sportsTypeList: [{
        key: 'PingPong',
        value: '乒乓球'
      },
      {
        key: 'Badminton',
        value: '羽毛球'
      },
      {
        key: 'Billards',
        value: '台球'
      },
      {
        key: 'Tennis',
        value: '网球'
      },
      {
        key: 'Soccer',
        value: '足球'
      },
      {
        key: 'Basketball',
        value: '篮球'
      },
      {
        key: 'Volleyball',
        value: '排球'
      }
    ],

    genderList: [{
        key: 'male',
        value: '男',
        checked: 'true'
      },
      {
        key: 'female',
        value: '女'
      }
    ],

    sportsTypeIndex: 0,
    sportsType: 'PingPong',
    gender: 'female',
    userInfo: {},
    hasUserInfo: false,
    date: util.formatDate(new Date(Date.now())),
    fromtime: '08:00',
    totime: '09:00',
    longitude: 0,
    latitude: 0,
    mylocation: '',
    address: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../records/records'
    })
  },


  bindSportsTypePickerChange: function(e) {
    console.log('SportsTypePicker发送选择改变，携带值为', e.detail.value)

    this.setData({
      sportsTypeIndex: e.detail.value,
      sportsType: this.data.sportsTypeList[e.detail.value].key
    })

    console.log(this.data.sportsType)
  },

  genderRadioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      gender: e.detail.value
    })
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },


  bindFromTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      fromtime: e.detail.value
    })
  },

  bindToTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      totime: e.detail.value
    })
  },


  openMap: function() {
    var that = this
    wx.chooseLocation({
      success: function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
        console.log(res.name)
        console.log(res.address)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          mylocation: res.name,
          address: res.address
        })

      }
    })
  },


  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset: function() {
    console.log('form发生了reset事件')
  },
})