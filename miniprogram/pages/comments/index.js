// pages/movie/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     movie:null,
     comments:null,
     score:5
  },
  onChange:function(){

  },
  onScoreChange:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.showNavigationBarLoading()
     var that=this
     wx.request({
       url: 'https://api.douban.com/v2/movie/subject/'+
       options.id+'?apikey=0df993c66c0c636e29ecbb5344252a4a',
       method:'GET',
       header:{
         'content-type':'json'
       },
       success:function(res){
         console.log(res.data);
         if(res.statusCode==200){
           that.setData({
             movie: res.data
           })
         }
         wx.hideNavigationBarLoading()
         wx.setNavigationBarTitle({
           title: res.data.title,
         })
       },
       fail:function(res){

       }
     })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})