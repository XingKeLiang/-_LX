// pages/day01/day01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"未改变",
    title:"这是标题",
    flag:0,
    uid:12345,
    num:11,
    list:["Hello","World"],
    double: [
      {
        cate: "欧美系",
        carbrand: [
          { brand: "宝马" },
          { brand: "奔驰" }
        ]
      },
      {
        cate: "国产",
        carbrand: [
          { brand: "哈弗" },
          { brand: "比亚迪" }
        ]
      },
      {
        cate: "日系",
        carbrand: [
          { brand: "本田" },
          { brand: "丰田" }
        ]
      }
    ]   
  },
  printMst(){
    console.log("您有一条消息")
  },
  // 获取data里面的数据
  getdata(){
    console.log(this.data.uid)
  },
  // 修改data里面的数据
  setdata(){
    this.setData({
      msg:"已经改变。。。。"
    })
  },
  count(event){
    console.log(event.target.dataset.aid * 2)
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