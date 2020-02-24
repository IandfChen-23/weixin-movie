// pages/movie/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     movieList:[]
  },
  getMovieList:function(){
    wx.showLoading({
      title: 'loading',
    })
    let that = this
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?start=' + this.data.movieList.length + '&count=10&apikey=0df993c66c0c636e29ecbb5344252a4a',
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          movieList: that.data.movieList.concat(res.data.subjects)
        })
        wx.hideLoading()
      },
      fail: function (res) {
        wx.hideLoading()
      }
    })
  },
  toCommnets: function (e) {
    let id = e.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '../comments/index?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieList()
  },
  onShareAppMessage:function(){
    return {
      title:'向你推荐'
    }
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
    this.getMovieList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})