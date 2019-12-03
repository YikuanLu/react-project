import React from 'react'
import { Select } from 'antd'

const { Option } = Select

export const createSelect = (data, placeholder = '请输入搜索条件', name = 'name', key = 'key') => {
  return (
    <Select style={{ width: 200 }} placeholder={placeholder}>
      {data.map((item, index) => (
        <Option value={item[key]} key={item[name] || index}>
          {item.name}
        </Option>
      ))}
    </Select>
  )
}

export const a = ''
