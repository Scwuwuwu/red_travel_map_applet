// detail.js
const tool = require('../../utils/tool');

Page({
  data: { area: {} },
  // 监听页面加载
  onLoad(options) {
    // 获取景点信息
    const area = tool.getAreaDetail(options.cityId, options.areaId);
    // 更新页面
    this.setData({ area: area });
  },
  
  // 返回上一页
  goBack() {
    wx.navigateBack({
      delta: 1
    });
  }
});