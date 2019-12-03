import React from 'react'
import { PageHeader } from 'antd'
// import CreateSelect from '@/components/common/mySelect'
// import {
//   GAME_TYPES,
//   INFO_TYPES
// } from '@/assets/js/type'

// import styles from './Style.module.css'

const Home = () => {
  const title = '首页'
  // 页面通用头部
  const Header = () => {
    return (
      <PageHeader
        style={{
          background: '#fff'
        }}
        title={title}
      />
    )
  }

  return (
    <div className="news">
      <Header />
    </div>
  )
}

export default Home
