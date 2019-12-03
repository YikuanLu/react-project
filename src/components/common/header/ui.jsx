import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import { Menu, Dropdown } from 'antd'

import { SET_USERINFO } from '@/redux/actions-types'
import style from './Header.module.css'
import logo from '@/assets/img/logo.png'
import { common } from '@/api'

const Header = ({ userInfo, setCommonData, history }) => {
  const { userName } = userInfo
  const firstWord = userName.slice(0, 1)

  // console.log('history', history)

  const logout = () => {
    common.logout().then(() => {
      setCommonData(SET_USERINFO, {
        userName: '',
        resources: [],
        token: ''
      })
      history.push('/login')
    })
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <span>个人信息</span>
      </Menu.Item>
      <Menu.Item onClick={logout}>
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={style.header}>
      <div className={`fl ${style.logoBox}`}>
        <Link to="/">
          <span className={style.logo}>
            <img src={logo} alt="logo" />
          </span>
          <span>尚牛电竞管理后台</span>
        </Link>
      </div>
      <Dropdown overlay={menu} className={`fr ${style.content}`}>
        <span className={style.user}>
          <span className={style.avart}>{firstWord}</span>
          <span>{userName}</span>
        </span>
      </Dropdown>
    </div>
  )
}

export default withRouter(Header)
