import {
  SET_ARTICLE_TYPES,
  SET_AD_POSITIONS,
  SET_HELP_CATS,
  SET_USERINFO,
  SET_GAMETYPES
} from './actions-types'

export default function setCommonData(type, val) {
  switch (type) {
    case SET_ARTICLE_TYPES: // 设置文章类型
      return { type: SET_ARTICLE_TYPES, articleTypes: val }
    case SET_AD_POSITIONS: // 设置广告位置
      return { type: SET_AD_POSITIONS, adPositions: val }
    case SET_HELP_CATS: // 设置帮助类型
      return { type: SET_HELP_CATS, helpCats: val }
    case SET_USERINFO: // 设置用户信息
      return { type: SET_USERINFO, userInfo: val }
    case SET_GAMETYPES: // 设置游戏类型
      return { type: SET_GAMETYPES, gameTypes: val }
    default:
      throw new Error('请传入修改的数据类型和值')
  }
}
