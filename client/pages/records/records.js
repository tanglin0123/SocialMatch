const util = require('../../utils/util.js')

Page({
  data: {
    records: []
  },
  onLoad: function () {
    this.setData({
      records: (wx.getStorageSync('records') || []).map(record => {
        return util.formatTime(new Date(record))
      })
    })
  }
})
