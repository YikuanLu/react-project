// 🦄
import React from 'react'
import MenuView from '@/components/common/menu'
import styles from './Home.module.css'

import Header from '@/components/common/header'
import Breadcrumb from '@/components/common/breadcrumb'
import {
  adPositions,
  articleTypes,
  helpCats,
  GAME_TYPES
} from '@/assets/js/type'
import {
  SET_GAMETYPES, // 设置游戏类型
  SET_AD_POSITIONS, // 设置广告位置
  SET_ARTICLE_TYPES, // 设置文章类型
  SET_HELP_CATS // 设置帮助类型
} from '@/redux/actions-types'

class Home extends React.Component {
  componentDidMount() {
    const { setCommonData, userInfo, history } = this.props
    const { token } = userInfo
    if (!token) {
      history.push('/login')
      return
    }
    setCommonData(SET_AD_POSITIONS, adPositions)
    setCommonData(SET_ARTICLE_TYPES, articleTypes)
    setCommonData(SET_HELP_CATS, helpCats)
    setCommonData(SET_GAMETYPES, GAME_TYPES)
  }

  render() {
    const { children } = this.props
    // console.log(this.props)
    return (
      <div className={styles.container}>
        <div className={styles.menu}>
          <MenuView />
        </div>
        <div className={styles.content}>
          <Header />
          <Breadcrumb />
          <div className={styles.mainContent}>{children}</div>
        </div>
      </div>
    )
  }
}

export default Home
