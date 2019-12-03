// import React from 'react'
import { connect } from 'react-redux'
import setCommonData from '@/redux/actions'
import Ui from './ui'

const mapStateToProps = (state) => {
  const { gameTypes, articleTypes } = state.commonData
  return {
    gameTypes,
    articleTypes
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCommonData: (type, val) => dispatch(setCommonData(type, val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ui)
