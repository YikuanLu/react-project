import React from 'react'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import style from './Breadcrumb.module.css'
import routes from '@/route/routes'

/**
 * 以递归的方式展平react router数组
 */
const flattenRoutes = (arr) =>
  arr.reduce((prev, item) => {
    prev.push(item)
    return prev.concat(
      Array.isArray(item.routes) ? flattenRoutes(item.routes) : item
    )
  }, [])

const allRoutes = flattenRoutes(routes)

// 通用面包屑
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <Breadcrumb className={style.breadcrumb}>
      {breadcrumbs.map((bc) => {
        return (
          <Breadcrumb.Item key={bc.key}>
            <Link to={bc.exact ? bc.key : '#'}>{bc.name}</Link>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default withBreadcrumbs(allRoutes)(Breadcrumbs)
