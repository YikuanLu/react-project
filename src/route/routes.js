import { lazy } from 'react'

const Container = lazy(() => import('@/pages/content'))
const Home = lazy(() => import('@/pages/home'))

const Login = lazy(() => import('@/pages/login'))

const ErrorPage = lazy(() => import('@/pages/public/errorPage'))

const InfoOffice = lazy(() => import('@/pages/info/office'))
const InfoAddEdit = lazy(() => import('@/pages/info/infoAddEdit'))

const AdAds = lazy(() => import('@/pages/ad/ads'))
const AdAdsEdit = lazy(() => import('@/pages/ad/adsEdit'))
const AdPosition = lazy(() => import('@/pages/ad/position'))

const HelpDocs = lazy(() => import('@/pages/help/helpDocs'))
const HelpCats = lazy(() => import('@/pages/help/helpCats'))

/**
 * path 跳转的路径
 * component 对应路径显示的组件
 * exact 匹配规则，true的时候则精确匹配。
 */
const menus = [
  {
    path: '/login',
    name: '登录',
    exact: true,
    component: Login
  },
  {
    path: '/',
    name: '首页',
    component: Container,
    routes: [
      {
        path: '/',
        name: '首页',
        exact: true,
        key: 'container',
        component: Home
      },
      {
        path: '/info',
        name: '资讯管理',
        routes: [
          {
            path: '/info/office',
            name: '官方资讯',
            exact: true,
            isAuth: true,
            component: InfoOffice,
            key: 'info:admin:officeInfo:view'
          },
          {
            path: '/info/office/:type',
            name: '文章编辑',
            exact: true,
            isAuth: true,
            component: InfoAddEdit,
            key: 'info:admin:officeInfo:create'
          }
        ]
      },
      {
        path: '/ad',
        name: '广告管理',
        routes: [
          {
            path: '/ad/ads',
            name: '广告列表',
            exact: true,
            isAuth: true,
            component: AdAds,
            key: 'site:admin:ads:manage'
          },
          {
            path: '/ad/ads/:type',
            name: '广告编辑',
            exact: true,
            isAuth: true,
            component: AdAdsEdit
          },
          {
            path: '/ad/location',
            name: '广告位置',
            exact: true,
            isAuth: true,
            component: AdPosition,
            key: 'site:admin:location:manage'
          }
        ]
      },
      {
        path: '/help',
        name: '帮助中心管理',
        routes: [
          {
            path: '/help/help-docs',
            name: '帮助中心列表',
            exact: true,
            isAuth: true,
            component: HelpDocs,
            key: 'site:admin:helpDocs:manage'
          },
          {
            path: '/help/help-cats',
            name: '帮助中心类型',
            exact: true,
            isAuth: true,
            component: HelpCats,
            key: 'site:admin:helpCats:manage'
          }
        ]
      },
      {
        path: '/403',
        name: '暂无权限',
        exact: true,
        component: ErrorPage
      }
    ]
  }
]

export default menus
