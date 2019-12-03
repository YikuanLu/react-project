import React, { useState } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'
import useService from '@/utils/tableHook'
import SearchView from '@/components/common/searchForm'

const MyTable = (props) => {
  const { columns, apiFun, searchConfigList } = props
  const [pageSize, setPageSize] = useState(5)
  const [pageNo, setPageNo] = useState(1)
  const [searchParams, setSearchParams] = useState({})
  const { loading = false, response = {} } = useService(apiFun, {
    pageSize,
    pageNo,
    ...searchParams
  })

  const validData = response && response.total ? response : {}
  const { list = [], total } = validData

  const handleSearch = (val) => {
    setPageNo(1)
    setSearchParams(val)
    apiFun({ searchParams }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      {searchConfigList.length > 0 && (
        <SearchView config={searchConfigList} handleSearch={handleSearch} />
      )}
      <Table
        loading={loading}
        dataSource={list}
        columns={columns}
        pagination={{
          pageSize,
          current: pageNo,
          total,
          onChange: (PageNo, PageSize) => {
            setPageNo(PageNo)
            setPageSize(PageSize)
            setSearchParams(searchParams)
          }
        }}
      />
    </div>
  )
}

MyTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchConfigList: PropTypes.arrayOf(PropTypes.object),
  apiFun: PropTypes.func.isRequired
}

MyTable.defaultProps = {
  searchConfigList: []
}

export default MyTable
