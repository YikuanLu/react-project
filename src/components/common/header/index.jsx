import { connect } from 'react-redux'
import setCommonData from '@/redux/actions'
import HeaderUi from './ui'

const mapStateToProps = (state) => {
  const { userInfo } = state.commonData
  return {
    userInfo
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCommonData: (type, val) => dispatch(setCommonData(type, val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderUi)
