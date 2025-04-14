// index.js

const areas = require('../../utils/areas');
const tool = require('../../utils/tool');

Page({
  // 页面初始数据
  data: {
    // 关键知识点1: areas.cityList赋值给城市列表
    cityList: areas.cityList, 
    currentCityId: '001',     // 当前展示的城市编号
    latitude: 39.90374,
    longitude: 116.397827,
    // 关键知识点4: 获取地图标记点列表
    markers: areas.markers, 
    // 关键知识点1: 根据城市编号获取景点列表
    areaList: tool.getAreaList('001'),
    isHide: false
  },

  onLoad() {
    this.mapCtx = wx.createMapContext('redMap');
    // 初始化地图标记
    this.updateMarkers('001');
  },

  // 更新地图标记点
  updateMarkers(cityId) {
    const areaList = tool.getAreaList(cityId);
    if (areaList.length > 0) {
      const markers = areaList.map((item, index) => {
        return {
          id: index + 1,
          latitude: item.latitude,
          longitude: item.longitude,
          title: item.name,
          iconPath: '/images/location.png',
          width: 30,
          height: 30
        };
      });
      
      // 更新标记和中心位置
      this.setData({
        markers: markers,
        latitude: areaList[0].latitude,
        longitude: areaList[0].longitude
      });
    }
  },

  handleCityChange(e) {
    const cityId = e.currentTarget.dataset.cityid;
    const areaList = tool.getAreaList(cityId);
    
    this.setData({
      currentCityId: cityId,
      areaList: areaList
    });
    
    // 更新地图标记
    this.updateMarkers(cityId);
  },
  // 关键知识点3. 隐藏/展开景点列表面板
  toggleAreaBox() {
    this.setData({ isHide: !this.data.isHide });
  },
  // 自定义函数--更新地图中心位置
  // 关键知识点5: 更新地图中心位置
  showCenter(e) {
    const { lat, lon } = e.currentTarget.dataset;
    this.setData({ 
      latitude: lat, 
      longitude: lon 
    });
  },
  // 自定义函数--唤起导航app进行导航
  // 关键知识点6: 唤起导航app进行导航
  guideMap(e) {
    const { lat, lon, name } = e.currentTarget.dataset;
    wx.openLocation({
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
      name: name,
      scale: 18
    });
  },
  // 自定义函数--打开详情页
  // 关键知识点7: 跳转详情页
  goToDetail(e) {
    // 打开新页面
    wx.navigateTo({
      // 根据城市id和景点id
      url: `/pages/detail/detail?cityId=${e.currentTarget.dataset.cityid}&areaId=${e.currentTarget.dataset.areaid}`
    });
  }
});