import React from 'react'
import { Input, Button, PageHeader } from 'antd'
import { CLIENT_LIST, IS_SHOW } from '@/assets/js/type'
import columns from './columns'
// import { demoApi } from '@/api/index'

import MySelect from '@/components/common/mySelect'
import MyTable from '@/components/common/table'

// 添加广告
const toAdd = () => {
  // console.log(1)
}

// 异步获取数据
const getData = async () => {
  // return demoApi.demoAxios({
  //   matchId: 'lgwi9913kij7n2l6kn5355k677knnlm5902n'
  // })
}

// 页面通用头部
const Header = () => {
  return (
    <PageHeader
      title="帮助中心"
      extra={[
        <Button key="1" type="primary" onClick={toAdd}>
          新增内容
        </Button>
      ]}
    />
  )
}

const HelpDocs = ({ helpCats }) => {
  const searchConfigList = [
    {
      key: 'position',
      slot: <MySelect data={helpCats} placeholder="筛选类型" />
    },
    {
      key: 'client',
      slot: <MySelect data={CLIENT_LIST} placeholder="筛选客户端" />
    },
    {
      key: 'isShow',
      slot: <MySelect data={IS_SHOW} placeholder="是否显示" />
    },
    {
      key: 'isCommon',
      slot: <MySelect data={IS_SHOW} placeholder="是否常见问题" />
    },
    {
      key: 'title',
      // initialValue: '这个是默认值',
      slot: <Input placeholder="请输入标题" />
    }
  ]
  return (
    <div className="help-docs">
      <Header />
      <MyTable
        apiFun={getData}
        columns={columns}
        searchConfigList={searchConfigList}
      />
    </div>
  )
}

export default HelpDocs
