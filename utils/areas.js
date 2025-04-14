// 城市列表
const cityList = [
    // 城市编号+城市名称
    { cityId: '001', cityName: '北京' },
    { cityId: '002', cityName: '上海' },
    { cityId: '003', cityName: '广州' },
    { cityId: '004', cityName: '深圳' },
    { cityId: '005', cityName: '杭州' },
    { cityId: '006', cityName: '嘉兴' },
    { cityId: '009', cityName: '南昌' },
    { cityId: '010', cityName: '安阳'}
  ];
  
  // 景点列表
  const areaList = [
    {
      // 城市编号: 北京
      cityId: '001',  
      // 城市内部的景点列表数组
      list: [
        {
          areaId: '101',  // 景点编号
          name: '天安门广场',
          image: '/images/areas/beijing/101.jpg',
          latitude: 39.90374,
          longitude: 116.397827,
          intro: '天安门广场位于北京市中心，南北长880米，东西宽500米...'
        },
        {
          areaId: '102',  // 景点编号
          name: '中国国家博物馆',
          image: '/images/areas/beijing/102.jpg',
          latitude: 39.905407999999994,
          longitude: 116.40139699999997,
          intro: '中国国家博物馆位于北京市中心，南北长880米，东西宽500米...'
        },
        {
          areaId: '103',  // 景点编号
          name: '中国人民革命军事博物馆',
          image: '/images/areas/beijing/103.jpg',
          latitude: 39.9075,
          longitude: 116.3223,
          intro: '中国人民革命军事博物馆位于北京市中心，南北长880米，东西宽500米...'
        }
      ]
    },
    {
      // 城市编号: 上海
      cityId: '002',
      list: [
        {
          areaId: '201',  // 景点编号
          name: '上海中共一大会址',
          image: '/images/areas/shanghai/201.jpg', 
          latitude: 31.227827,
          longitude: 121.47374,
          intro: '上海中共一大会址........'
        }  
      ]  
    },
    {
     // 城市编号: 嘉兴
     cityId: '006',
     list: [
       {
         areaId: '301',  // 景点编号
         name: '中共一大红船',
         image: '/images/areas/jiaxing/301.jpg', 
         latitude: 30.827827,
         longitude: 120.47374,
         intro: '中共一大红船........'
       } 
     ] 
    }
  ];
  
  // 地图标记,地图初始标记的是天安门广场
  const markers = [
    {
      id: 1,
      latitude: 39.90374,
      longitude: 116.397827,
      title: '天安门广场',
      iconPath: '/images/location.png',
      width: 40,
      height: 40
    }
  ];
  // 导出位置数据
  module.exports = { cityList, areaList, markers };