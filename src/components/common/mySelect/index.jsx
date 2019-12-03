import React from 'react'
import { Select } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select

class MySelect extends React.Component {
  componentDidMount() {}

  render() {
    const { data, placeholder, name, key, value, onChange } = this.props
    const handerChange = (val) => {
      onChange(val)
    }
    return (
      <Select
        style={{ width: 200 }}
        value={value}
        onChange={handerChange}
        placeholder={placeholder}
      >
        {data.map((item, index) => (
          <Option value={item[key]} key={item[key] || index}>
            {item[name]}
          </Option>
        ))}
      </Select>
    )
  }
}

MySelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.string
}

MySelect.defaultProps = {
  placeholder: '请输入搜索条件',
  name: 'name',
  key: 'key'
}

export default MySelect
