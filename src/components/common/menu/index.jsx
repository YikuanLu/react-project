// import React from 'react'
import { connect } from 'react-redux'
import MenuUi from './ui'

const mapStateToProps = (state) => {
  const { userInfo } = state.commonData
  return {
    userInfo
  }
}

export default connect(mapStateToProps)(MenuUi)
