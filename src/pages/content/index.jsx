// import React from 'react'
import { connect } from 'react-redux'
import setCommonData from '@/redux/actions'
import ContainerUi from './ui'

const mapStateToProps = (state) => {
  const { articleTypes, adPositions, helpCats, userInfo } = state.commonData
  return {
    articleTypes,
    adPositions,
    helpCats,
    userInfo
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCommonData: (type, val) => dispatch(setCommonData(type, val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerUi)
