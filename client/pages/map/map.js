Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    address: 'T.I.T 创意园'
    // markers: [{
    //   id: 1,
    //   latitude: 23.099994,
    //   longitude: 113.324520,
    //   name: 'T.I.T 创意园'
    // }],
    // covers: [{
    //   latitude: 23.099994,
    //   longitude: 113.344520,
    //   iconPath: 'location.png'
    // }, {
    //   latitude: 23.099994,
    //   longitude: 113.304520,
    //   iconPath: 'location.png'
    // }]
  },
  onReady: function (e) {
    // this.mapCtx = wx.createMapContext('myMap')
  },

  getCenterLocation: function () {
    wx.chooseLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
        console.log(res.address)
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          address: res.address
        })
        
      }
    })
  },

  moveToLocation: function () {
    wx.moveToLocation()
    wx.chooseLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
        console.log(res.address)
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          address: res.address
        })

      }
    })
  },

  // translateMarker: function() {
  //   this.mapCtx.translateMarker({
  //     markerId: 1,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude:23.10229,
  //       longitude:113.3345211,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },

  // includePoints: function() {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [{
  //       latitude:23.10229,
  //       longitude:113.3345211,
  //     }, {
  //       latitude:23.00229,
  //       longitude:113.3345211,
  //     }]
  //   })
  // }
})
