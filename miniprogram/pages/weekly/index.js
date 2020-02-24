// pages/weekly/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     thisWeekMovie:[{
       id: 1291841,
       title:'教父',
       img: '../../image/jiaofu.jpg',
       desc:'权力永远都在操控我们，所以人们奋斗的最终目标就是不被操控，然而不被操控就必须操控别人，这个漩涡没有人可以逃避才是教父整个家族几代人的悲哀，也是世界的悲哀。',
       isHighlyRecom:false,
     },
       {
         id: 1292052,
         title: '肖申克的救赎',
         img: '../../image/xiao.jpg',
         desc: '瑞德（Red）说，希望是危险的东西，是精神苦闷的根源。重重挤压之下的牢狱里          呆了三十年的他的确有资格这么说。因为从进来的那一天起，狱长就说过，「把灵魂交给上          帝，把身体交给我。」除了他能弄来的香烟和印着裸女的扑克牌，任何其他异动在这个黑暗          的高墙之内似乎都无法生长。',
         isHighlyRecom: true,
       },
       {
         id: 1295644,
         title: '这个杀手不太冷',
         img: '../../image/shashou.jpg',
         desc: '这是关于两个小孩的故事，一个女孩和一个男孩，在他们心里，他们都是12岁，           他们都感到失落而他们深爱彼此。',
         isHighlyRecom: false,
       },
       {
         id: 1292720,
         title: '阿甘正传',
         img: '../../image/agan.jpg',
         desc: '人生就像一盒巧克力，你永远不知道下一颗巧克力是什么味道的',
         isHighlyRecom: false,
       },
     ],
     count:0
  },
  toMovies:function(e){
    let id = e.currentTarget.dataset.movieId
     wx.navigateTo({
       url: '../movie/index?id='+id,
     })
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

  }
})