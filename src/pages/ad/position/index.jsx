import React from 'react'
import { Button, PageHeader } from 'antd'
import columns from './columns'
// import { demoApi } from '@/api/index'

import MyTable from '@/components/common/table'

// 异步获取数据
const getData = async () => {
  // return demoApi.demoAxios({
  //   matchId: 'lgwi9913kij7n2l6kn5355k677knnlm5902n'
  // })
}

// 页面通用头部
const Header = ({ history }) => {
  // 添加广告
  const toAdd = () => {
    // console.log(1)
    history.push('/ad/ads/add')
  }

  return (
    <PageHeader
      title="广告位置"
      extra={[
        <Button key="1" type="primary" onClick={toAdd}>
          新增位置
        </Button>
      ]}
    />
  )
}

const Position = ({ history }) => {
  return (
    <div className="position">
      <Header history={history} />
      <MyTable apiFun={getData} columns={columns} />
    </div>
  )
}

export default Position
