import React, { useState } from 'react'
import { Menu, Icon } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'
import menus from '@/config/menu'

const { SubMenu } = Menu
const MenuView = ({ userInfo }) => {
  const { resources } = userInfo
  // console.log('resources', resources)
  const { pathname } = useLocation()
  const reducer = (pre, cur) => pre.concat(cur)

  const curPath = (path) => {
    const checkKey = (data) => {
      return data.map((item) => {
        if (item.routes) {
          return checkKey(item.routes)
        }
        return item
      })
    }
    const keys = checkKey(menus)
    const routeMap = keys.reduce(reducer)
    return (
      routeMap.find((item) => item.path === path) ||
      (menus[0].path && menus[0]) ||
      menus[0].routes[0]
    )
  }

  const { key } = curPath(pathname)
  const [current, setCurrent] = useState(key)

  const handleClick = (e) => {
    setCurrent(e.key)
  }

  // SubMenu 的 title
  const subMenuTitle = (data) => (
    <span>
      <Icon type={data.icon} />
      <span className={styles.noselect}>{data.name}</span>
    </span>
  )

  // 创建可跳转菜单
  const createMenuItem = (data) => (
    <Menu.Item key={data.key} className={styles.noselect}>
      <Link to={data.path}>
        {!!data.icon && <Icon type={data.icon} />}
        {data.name}
      </Link>
    </Menu.Item>
  )

  // 创建展开，不可进行跳转的菜单
  const creatSubMenu = (data) => {
    const menuItemList = []
    data.routes.map((item) => {
      const arr = resources.filter((ele) => item.key === ele.code)
      if (arr.length > 0) {
        menuItemList.push(createMenuItem(item))
      }
      return arr
    })

    return menuItemList.length > 0 ? (
      <SubMenu key={data.key} title={subMenuTitle(data)}>
        {menuItemList}
      </SubMenu>
    ) : null
  }

  // 创建菜单树
  const renderMenuMap = (list) => {
    return list.map((item) => {
      return item.type === 'subMenu' ? creatSubMenu(item) : createMenuItem(item)
    })
  }

  // 获取一级菜单的 key
  const getSubMenuKey = (list) => list.map((item) => item.key)

  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      style={{ width: 256 }}
      defaultOpenKeys={getSubMenuKey(menus)}
      selectedKeys={[current]}
      mode="inline"
    >
      {renderMenuMap(menus)}
    </Menu>
  )
}

export default MenuView
