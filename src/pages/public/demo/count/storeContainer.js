// import React from 'react'
import { connect } from 'react-redux'
import { changeCount } from '@/redux/actions'
import CountUi from './ui'

const mapStateToProps = (state) => {
  return {
    count: state.countController.count.value
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeCount: (type) => dispatch(changeCount(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountUi)
