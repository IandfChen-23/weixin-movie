const db=wx.cloud.database()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  insert:function(){
    console.log('fdfdasfsd')
    db.collection('users').add({
      data:{
        name:'leige',
        age:20
      },
      success:res=>{
        console.log(res)
      }
    })
  },
  update:function(){
    db.collection('users').doc('66c996965ddbd705005733207ae026e1').update({
      data:{
        age:21
      }
    })
  },
  look:function(){
   db.collection('users').where({
     name:'leige'
   }).get().then(res=>{
     console.log(res)
   })
  },
  delete:function(){
    db.collection('users').doc('66c996965ddbd705005733207ae026e1').remove();
  },
  upload:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        wx.cloud.uploadFile({
          cloudPath: 'example.png', // 上传至云端的路径
          filePath: tempFilePaths[0], // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID);
            db.collection('image').add({
              data:{
                fileID:res.fileID
              }
            }).then(res=>{
              console.log(res)
            })
          },
          fail: console.error
        })
      }
    }) 
  },
  sum:function(){
    wx.cloud.callFunction({
      name:'sum',
      data:{
        a:1,
        b:2
      }
    }).then(res=>{
      console.log(res)
    })
  },
  getOpenId:function(){
   wx.cloud.callFunction({
     name:'login'
   }).then(res=>{
     console.log(res);
   })
  },
  patchDelete:function(){

  },
  onLoad: function() {
    
  },
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
