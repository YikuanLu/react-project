const routes = [
  {
    name: '首页',
    key: 'home',
    icon: 'home',
    path: '/',
    routes: []
  },
  {
    name: '资讯管理',
    key: 'info',
    type: 'subMenu',
    icon: 'read',
    routes: [
      {
        path: '/info/office',
        key: 'info:admin:officeInfo:view',
        name: '官方资讯'
      },
      {
        path: '/info/user',
        key: 'info:admin:userInfo:view',
        name: '用户资讯'
      },
      {
        path: '/info/category',
        key: 'info:admin:category:view',
        name: '资讯类型'
      },
      {
        path: '/info/comment',
        key: 'info:admin:comment:mange',
        name: '评论管理'
      },
      {
        path: '/info/tipoff',
        key: 'info:admin:tipoff:manage',
        name: '举报管理'
      },
      {
        path: '/info/sens-word',
        key: 'site:admin:sensWord:manage',
        name: '违禁词库'
      }
    ]
  },
  {
    name: '广告管理',
    key: 'ad',
    type: 'subMenu',
    icon: 'compass',
    routes: [
      {
        path: '/ad/ads',
        key: 'site:admin:ads:manage',
        name: '广告列表'
      },
      {
        path: '/ad/location',
        key: 'site:admin:location:manage',
        name: '广告位置'
      }
    ]
  },
  {
    name: '帮助中心',
    key: 'help',
    type: 'subMenu',
    icon: 'smile',
    routes: [
      {
        path: '/help/help-docs',
        key: 'site:admin:helpDocs:manage',
        name: '帮助中心列表'
      },
      {
        path: '/help/help-cats',
        key: 'site:admin:helpCats:manage',
        name: '帮助中心类型'
      }
    ]
  },
  {
    name: '系统管理',
    key: 'admin',
    type: 'subMenu',
    icon: 'setting',
    routes: [
      {
        path: '/system/admin-user',
        key: 'admin:admin:adminUser:view',
        name: '管理员列表'
      },
      {
        path: '/system/admin-role',
        key: 'admin:admin:adminRole:view',
        name: '角色列表'
      },
      {
        path: '/system/msg',
        key: 'extra:admin:notice:manage',
        name: '系统消息'
      }
    ]
  }
]

export default routes
