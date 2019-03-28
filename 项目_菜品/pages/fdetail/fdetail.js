// pages/fdetail/fdetail.js
const WxParse = require('../../wxParse/wxParse.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    preImgSrc: "http://a.itying.com/",
    foodId:"",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foodId: options.fid
    })
    // console.log(this.data.foodId);
    this.requestFoodDetail();
  },  
  requestFoodDetail(){
    var that = this;//把this指向page保存下来
    wx.request({
      url: 'http://a.itying.com/api/productcontent',
      data:{
        id: this.data.foodId  //传递id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        // console.log(res.data.result[0])
        var imgUrl = res.data.result[0].img_url;
        res.data.result[0].img_url = imgUrl.replace(/\\/g,"/");
        var article = res.data.result[0].content;
        WxParse.wxparse("article","html",article,that)
        that.setData({
          list:res.data.result
        });
        console.log(that.data.list)
      }
    })
  }
})