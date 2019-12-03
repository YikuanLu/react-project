import {
  SET_ARTICLE_TYPES,
  SET_AD_POSITIONS,
  SET_HELP_CATS,
  SET_USERINFO,
  SET_GAMETYPES
} from '../actions-types'

const initState = {
  // 文章类型
  articleTypes: [],
  // 广告位置列表
  adPositions: [],
  // 帮助中心类型
  helpCats: [],
  // 用户信息
  userInfo: {
    userName: '',
    resources: [],
    token: ''
  },
  gameTypes: []
}

function commonData(state = initState, action) {
  switch (action.type) {
    case SET_ARTICLE_TYPES:
      return {
        ...state,
        articleTypes: action.articleTypes
      }
    case SET_AD_POSITIONS:
      return {
        ...state,
        adPositions: action.adPositions
      }
    case SET_HELP_CATS:
      return {
        ...state,
        helpCats: action.helpCats
      }
    case SET_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case SET_GAMETYPES:
      return {
        ...state,
        gameTypes: action.gameTypes
      }
    default:
      return state
  }
}

export default commonData
