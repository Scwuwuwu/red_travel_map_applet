// 导入城市和景点的共享数据
const areas = require("./areas");

// 获取指定城市的景点列表
function getAreaList(cityId) {
  // 遍历城市列表，找到对应城市的景点列表
  for (let i = 0; i < areas.areaList.length; i++) {
    if (cityId === areas.areaList[i].cityId) {
      return areas.areaList[i].list;  // 返回对应城市的景点列表
    }
  }
  // 如果没有找到对应城市，返回空数组
  return [];
}

// 获取单个景点详情
function getAreaDetail(cityId, areaId) {
  // 调用 getAreaList 获取指定城市的景点列表
  const list = getAreaList(cityId);
  // 遍历景点列表，找到对应景点的详情
  for (let i = 0; i < list.length; i++) {
    if (areaId === list[i].areaId) {
      return list[i];  // 返回对应景点的详情
    }
  }
  // 如果没有找到对应景点，返回空对象
  return {};
}

// 导入函数
module.exports = { getAreaList, getAreaDetail };  // 导出 getAreaList 和 getAreaDetail 函数