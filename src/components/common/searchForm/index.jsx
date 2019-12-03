import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'antd'
import style from './Search.module.css'

const SearchForm = ({ form, config, handleSearch }) => {
  const { getFieldDecorator } = form

  const getFields = () => {
    return config.map((item) => {
      return (
        <Form.Item key={item.key}>
          {getFieldDecorator(item.key, {
            initialValue: item.initialValue,
            rules: item.rules
          })(item.slot)}
        </Form.Item>
      )
    })
  }

  const emitSearch = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      handleSearch(values)
    })
  }

  return (
    <div className={style.content}>
      <Form layout="inline">{getFields()}</Form>
      <Button type="primary" onClick={emitSearch}>
        搜索
      </Button>
    </div>
  )
}

const SearchView = Form.create()(SearchForm)

SearchView.propTypes = {
  config: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default SearchView
