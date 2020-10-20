export default {
  pages: [
    'pages/index/index'
  ],
  tabBar: {
    list: [{
      iconPath: 'resource/home.png',
      selectedIconPath: 'resource/home_ck.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      iconPath: 'resource/class.png',
      selectedIconPath: 'resource/class_ck.png',
      pagePath: 'pages/class/class',
      text: '分类'
    }, {
      iconPath: 'resource/faxian.png',
      selectedIconPath: 'resource/faxian_ck.png',
      pagePath: 'pages/find/find',
      text: '发现'
    }, {
      iconPath: 'resource/my.png',
      selectedIconPath: 'resource/my_ck.png',
      pagePath: 'pages/my/my',
      text: '我的'
    }],
    'color': '#bfbfbf',
    'selectedColor': '#fb435b',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
