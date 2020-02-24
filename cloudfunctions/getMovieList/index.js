// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  return wx.request({
    url: 'https://api.douban.com/v2/movie/in_theaters/' + '?                       apikey=0df993c66c0c636e29ecbb5344252a4a',
    method: 'GET',
    header: {
      'content-type': 'json'
    },
    success: function (res) {
      console.log(res.data);
    },
    fail: function (res) {

    }
  })
}