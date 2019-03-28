// pages/courses/courses.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    preImgSrc: "http://a.itying.com/",
    list:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestFootList()
  },
  goFootDetail(e){
    // console.log(e.target.dataset.fid);
    var id = e.currentTarget.dataset.foodid;
    wx.navigateTo({
      url: '../fdetail/fdetail?fid='+id
    })
  },
  requestFootList(){
    var that = this;
    wx.request({
      url: 'http://a.itying.com/api/productlist',
      header: {
        'content-type':'application/json' // 默认值
      },
      success:function(res){
        console.log(res);
        var r = res.data.result;
        for(var i=0;i<r.length;i++){
          for(var j=0;j<r[i].list.length;j++){
            var rl = r[i].list;
            rl[j].img_url = rl[j].img_url.replace(/\\/g,'/');
          }
        }
        that.setData({
          list:res.data.result
        });
        // console.log(that.data.list);
      }
    })
  }

})